/* Visitor engagement: reactions, quick messages, per-project likes.
   Delivery via Web3Forms (key in window.MSX_ENGAGE, set from params.yaml).
   Gentle client-side rate limits keep the inbox sane. */
(function () {
  'use strict';

  var CFG = window.MSX_ENGAGE || {};
  var hasKey = typeof CFG.key === 'string' && CFG.key.length > 10;

  /* ---- shared submit helper (exposed for the terminal's msg command) ---- */
  function sendEvent(subject, message, extra) {
    if (!hasKey) return Promise.reject(new Error('not configured'));
    var body = Object.assign({
      access_key: CFG.key,
      subject: subject,
      from_name: (CFG.site || 'Website') + ' visitor',
      message: message,
      page: location.pathname,
      language: CFG.lang || ''
    }, extra || {});
    return fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify(body)
    }).then(function (r) {
      return r.json().then(function (d) {
        if (!r.ok || !d.success) throw new Error(d.message || 'send failed');
        return d;
      });
    });
  }
  window.msxSendEvent = hasKey ? sendEvent : null;

  /* ---- rate limiting via localStorage ---- */
  function today() {
    return new Date().toISOString().slice(0, 10);
  }
  function countToday(kind) {
    try {
      var raw = JSON.parse(localStorage.getItem('msx-' + kind) || '{}');
      return raw.date === today() ? raw.n : 0;
    } catch (e) { return 0; }
  }
  function bumpToday(kind) {
    try {
      localStorage.setItem('msx-' + kind, JSON.stringify({ date: today(), n: countToday(kind) + 1 }));
    } catch (e) { /* private mode: allow */ }
  }

  /* ---- homepage reaction strip ---- */
  var react = document.getElementById('msx-react');
  if (react && hasKey) {
    var btns = react.querySelectorAll('button[data-reaction]');
    var thanks = react.querySelector('.msx-react-thanks');
    var showThanks = function () {
      btns.forEach(function (b) { b.disabled = true; });
      if (thanks) thanks.hidden = false;
    };
    if (countToday('reacted') > 0) showThanks();
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (countToday('reacted') > 0) { showThanks(); return; }
        bumpToday('reacted');
        btn.classList.add('msx-react-pop');
        showThanks();
        sendEvent('New reaction on ' + (CFG.site || 'the website'),
          'Reaction: ' + btn.getAttribute('data-reaction')).catch(function () { /* already thanked */ });
      });
    });
  }

  /* ---- quick message form ---- */
  var form = document.getElementById('msx-msg-form');
  if (form && hasKey) {
    var note = form.querySelector('.msx-form-note');
    var sendBtn = form.querySelector('.msx-send');
    var setNote = function (kind) {
      note.textContent = note.getAttribute('data-' + kind) || '';
      note.className = 'msx-form-note' + (kind === 'sent' ? ' msx-note-ok' : ' msx-note-err');
    };
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      if (form.querySelector('[name="botcheck"]').checked) return; // bot
      var msg = form.querySelector('[name="message"]').value.trim();
      if (!msg) { setNote('needmsg'); return; }
      if (countToday('messages') >= 3) { setNote('toomany'); return; }
      var name = form.querySelector('[name="name"]').value.trim();
      var email = form.querySelector('[name="email"]').value.trim();
      sendBtn.disabled = true;
      var label = sendBtn.textContent;
      sendBtn.textContent = sendBtn.getAttribute('data-sending');
      note.textContent = '';
      sendEvent('New message on ' + (CFG.site || 'the website'),
        msg + '\n\n— ' + (name || 'Anonymous') + (email ? ' <' + email + '>' : ''),
        email ? { replyto: email } : {})
        .then(function () {
          bumpToday('messages');
          form.reset();
          setNote('sent');
        })
        .catch(function () { setNote('error'); })
        .finally(function () {
          sendBtn.disabled = false;
          sendBtn.textContent = label;
        });
    });
  }

  /* ---- copy email to clipboard ---- */
  document.querySelectorAll('.msx-copy[data-copy]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var value = btn.getAttribute('data-copy');
      var done = function () {
        var label = btn.textContent;
        btn.textContent = btn.getAttribute('data-copied');
        btn.classList.add('msx-copy-ok');
        setTimeout(function () {
          btn.textContent = label;
          btn.classList.remove('msx-copy-ok');
        }, 1600);
      };
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(value).then(done).catch(done);
      } else { done(); }
    });
  });

  /* ---- per-project reaction (injected at the end of project pages) ---- */
  if (CFG.isProject && hasKey) {
    var host = document.querySelector('article main');
    if (host) {
      var strings = {
        en: { q: 'Was this project interesting?', b: 'It is!', t: 'Thanks — glad you liked it!' },
        es: { q: '¿Te ha parecido interesante este proyecto?', b: '¡Sí!', t: '¡Gracias — me alegra que te haya gustado!' },
        it: { q: 'Ti è sembrato interessante questo progetto?', b: 'Sì!', t: 'Grazie — felice che ti sia piaciuto!' }
      };
      var t = strings[CFG.lang] || strings.en;
      var box = document.createElement('div');
      box.className = 'msx-proj-like';
      var q = document.createElement('span');
      q.textContent = t.q;
      var b = document.createElement('button');
      b.type = 'button';
      b.innerHTML = '<span>👍</span> ' + t.b;
      box.appendChild(q);
      box.appendChild(b);
      host.appendChild(box);

      var likeKey = 'liked-' + location.pathname;
      var liked = function () {
        b.disabled = true;
        q.textContent = t.t;
        b.classList.add('msx-react-pop');
      };
      if (countToday(likeKey) > 0) {
        b.disabled = true;
      }
      b.addEventListener('click', function () {
        if (countToday(likeKey) > 0) return;
        bumpToday(likeKey);
        liked();
        sendEvent('Project reaction: ' + (CFG.page || location.pathname),
          '👍 on project "' + (CFG.page || location.pathname) + '"').catch(function () { /* fine */ });
      });
    }
  }
})();
