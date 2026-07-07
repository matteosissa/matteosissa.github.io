/* Interactive terminal — lets visitors explore the profile via commands.
   Data is embedded at build time in #msx-terminal-data (per-language). */
(function () {
  'use strict';

  var dataEl = document.getElementById('msx-terminal-data');
  var output = document.getElementById('msx-term-output');
  var input = document.getElementById('msx-term-input');
  var body = document.getElementById('msx-term-body');
  var chips = document.getElementById('msx-term-chips');
  if (!dataEl || !output || !input || !body) return;

  var DATA;
  try {
    DATA = JSON.parse(dataEl.textContent);
  } catch (e) {
    return;
  }
  var UI = DATA.ui || {};
  var history = [];
  var historyIdx = -1;

  var COMMANDS = ['help', 'about', 'skills', 'experience', 'education', 'projects', 'languages', 'contact', 'msg', 'cv', 'clear'];
  var ALIASES = { whoami: 'about', ls: 'projects', bio: 'about', work: 'experience', email: 'contact', resume: 'cv', say: 'msg', hire: 'msg', '?': 'help' };

  /* ---- rendering helpers (textContent only — no HTML injection) ---- */

  function line(cls) {
    var el = document.createElement('div');
    el.className = 'msx-line' + (cls ? ' ' + cls : '');
    return el;
  }

  function textLine(text, cls) {
    var el = line(cls);
    el.textContent = text;
    return el;
  }

  function linkLine(prefix, text, url) {
    var el = line();
    if (prefix) el.appendChild(document.createTextNode(prefix));
    var a = document.createElement('a');
    a.textContent = text;
    a.href = url;
    a.className = 'msx-link';
    if (/^https?:|^mailto:|\.pdf$/i.test(url)) {
      a.target = '_blank';
      a.rel = 'noopener';
    }
    el.appendChild(a);
    return el;
  }

  function print(elements) {
    var frag = document.createDocumentFragment();
    elements.forEach(function (el, i) {
      el.style.animationDelay = Math.min(i * 35, 420) + 'ms';
      frag.appendChild(el);
    });
    output.appendChild(frag);
    body.scrollTop = body.scrollHeight;
  }

  function echoCommand(cmd) {
    var el = line('msx-echo');
    var p = document.createElement('span');
    p.className = 'msx-prompt';
    p.textContent = '➜ ~ ';
    el.appendChild(p);
    el.appendChild(document.createTextNode(cmd));
    output.appendChild(el);
  }

  /* ---- command implementations ---- */

  function pad(s, n) {
    while (s.length < n) s += ' ';
    return s;
  }

  var handlers = {
    help: function () {
      var out = [textLine(UI.helpHeader || 'Available commands:', 'msx-strong')];
      COMMANDS.filter(function (c) { return c !== 'help'; }).forEach(function (c) {
        out.push(textLine('  ' + pad(c, 12) + ((UI.descs || {})[c] || ''), 'msx-dim'));
      });
      return out;
    },
    about: function () {
      return [textLine(DATA.about)];
    },
    skills: function () {
      var out = [];
      (DATA.skills || []).forEach(function (group) {
        out.push(textLine(group.group, 'msx-strong'));
        out.push(textLine('  ' + group.items.join(' · ')));
      });
      return out;
    },
    experience: function () {
      var out = [];
      (DATA.experience || []).forEach(function (job) {
        out.push(textLine(job.title, 'msx-strong'));
        out.push(textLine('  ' + job.period, 'msx-dim'));
      });
      return out;
    },
    education: function () {
      var out = [];
      (DATA.education || []).forEach(function (edu) {
        out.push(textLine(edu.title, 'msx-strong'));
        out.push(textLine('  ' + edu.period + (edu.grade ? '  ·  ' + edu.grade : ''), 'msx-dim'));
      });
      return out;
    },
    projects: function () {
      return (DATA.projects || []).map(function (p) {
        return linkLine('• ', p.text, p.url);
      });
    },
    languages: function () {
      return (DATA.languages || []).map(function (l) { return textLine('• ' + l); });
    },
    contact: function () {
      return (DATA.contact || []).map(function (c) {
        return linkLine('• ' + c.text + ': ', c.url.replace(/^mailto:/, ''), c.url);
      });
    },
    cv: function () {
      return [linkLine('→ ', DATA.cv.text, DATA.cv.url)];
    },
    clear: function () {
      output.innerHTML = '';
      return [];
    },
    msg: function (args) {
      var text = (args || '').trim();
      var mail = (DATA.contact || []).filter(function (c) { return c.url.indexOf('mailto:') === 0; })[0];
      var mailFallback = function (prefix) {
        return mail ? linkLine(prefix + ' ', mail.url.replace(/^mailto:/, ''), mail.url) : textLine(prefix, 'msx-err');
      };
      if (!window.msxSendEvent) {
        return [mailFallback(UI.msgFail || 'Messaging is offline — email me instead:')];
      }
      if (!text) {
        return [textLine(UI.msgUsage || 'Usage: msg <your message>', 'msx-dim')];
      }
      var counterKey = 'msx-messages';
      var todayStr = new Date().toISOString().slice(0, 10);
      var n = 0;
      try {
        var raw = JSON.parse(localStorage.getItem(counterKey) || '{}');
        n = raw.date === todayStr ? raw.n : 0;
      } catch (e) { /* ignore */ }
      if (n >= 3) {
        return [mailFallback(UI.msgLimit || 'Message limit reached for today — email me instead:')];
      }
      var pending = textLine(UI.msgSending || 'Sending…', 'msx-dim');
      window.msxSendEvent('Terminal message on the website', text + '\n\n— sent from the interactive terminal')
        .then(function () {
          try { localStorage.setItem(counterKey, JSON.stringify({ date: todayStr, n: n + 1 })); } catch (e) { /* ignore */ }
          pending.textContent = UI.msgSent || 'Delivered!';
          pending.className = 'msx-line msx-strong';
        })
        .catch(function () {
          pending.textContent = '';
          pending.className = 'msx-line';
          pending.appendChild(mailFallback(UI.msgFail || 'Could not deliver — email me instead:'));
        })
        .finally(function () { body.scrollTop = body.scrollHeight; });
      return [pending];
    },
    sudo: function () {
      return [textLine('Permission denied: this incident will be reported to Matteo. 🙂', 'msx-dim')];
    }
  };

  function run(raw) {
    var cmd = raw.trim().toLowerCase();
    if (!cmd) return;
    echoCommand(raw.trim());
    history.push(raw.trim());
    historyIdx = history.length;

    var name = cmd.split(/\s+/)[0];
    name = ALIASES[name] || name;
    var handler = handlers[name];
    if (handler) {
      var args = raw.trim().slice(raw.trim().split(/\s+/)[0].length);
      print(handler(args));
    } else {
      print([
        textLine((UI.notFound || 'command not found:') + ' ' + name, 'msx-err'),
        textLine(UI.tryHelp || "Type 'help' to list the available commands.", 'msx-dim')
      ]);
    }
    body.scrollTop = body.scrollHeight;
  }

  /* ---- events ---- */

  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
      run(input.value);
      input.value = '';
    } else if (e.key === 'ArrowUp') {
      if (historyIdx > 0) {
        historyIdx--;
        input.value = history[historyIdx];
        e.preventDefault();
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIdx < history.length - 1) {
        historyIdx++;
        input.value = history[historyIdx];
      } else {
        historyIdx = history.length;
        input.value = '';
      }
      e.preventDefault();
    } else if (e.key === 'Tab') {
      e.preventDefault();
      var v = input.value.trim().toLowerCase();
      if (!v) return;
      var match = COMMANDS.filter(function (c) { return c.indexOf(v) === 0; });
      if (match.length === 1) input.value = match[0];
    }
  });

  // Clicking the terminal focuses the input (unless the user is selecting text or clicking a link)
  body.addEventListener('click', function (e) {
    if (e.target.closest('a')) return;
    var sel = window.getSelection();
    if (sel && sel.toString().length > 0) return;
    input.focus({ preventScroll: true });
  });

  if (chips) {
    chips.addEventListener('click', function (e) {
      var btn = e.target.closest('button[data-cmd]');
      if (!btn) return;
      run(btn.getAttribute('data-cmd'));
    });
  }

  /* ---- welcome message ---- */
  print([
    textLine(UI.welcome || '', 'msx-strong'),
    textLine(UI.hint || '', 'msx-dim')
  ]);
})();
