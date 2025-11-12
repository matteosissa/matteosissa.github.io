# Hugo Blox Template Override Guide

## How Hugo Blox Template Overrides Work

### The Basics

Hugo Blox uses Hugo's **module mounting system** to organize its components. When you want to customize a block, you need to understand where Hugo looks for templates and how to override them.

### Template Lookup Order

Hugo follows a specific order when looking for templates:
1. **Your local project** (`/home/matteo/Desktop/CV_WEBSITE/`)
2. **Theme modules** (in `/home/matteo/.cache/hugo_cache/modules/`)

When you create a file in your local project that matches the path of a theme file, your local version takes precedence (overrides the theme).

---

## Understanding the Mount Configuration

The Hugo Blox theme (`blox-tailwind`) defines how its files are mounted in `/home/matteo/.cache/hugo_cache/modules/.../blox-tailwind@v0.10.0/hugo.yaml`:

```yaml
module:
  mounts:
    # BLOX A) Server-rendered block templates (Go HTML)
    - source: blox
      target: layouts/partials/hbx/blocks
      includeFiles:
        - '**/block.html'

    # BLOX B) Client islands (compiled with js.Build/js.Batch)
    - source: blox
      target: assets/js/hbx/blocks
      includeFiles:
        - '**/*.js'
        - '**/*.ts'
        - '**/*.jsx'
        - '**/*.tsx'

    # BLOX C) Block-specific CSS
    - source: blox
      target: assets/css/hbx/blocks
      includeFiles:
        - '**/*.css'
```

### What This Means

- The theme's `blox/resume-skills/block.html` file gets mounted to `layouts/partials/hbx/blocks/resume-skills/block.html`
- To override it, you create the same file in **your project** at `layouts/partials/hbx/blocks/resume-skills/block.html`

---

## Step-by-Step: Overriding Any Block Template

### Step 1: Find the Block You Want to Customize

All available blocks are in the theme's `blox/` directory:

```bash
ls /home/matteo/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/\!hugo\!blox/hugo-blox-builder/modules/blox-tailwind@v0.10.0/blox/
```

Available blocks include:
- `resume-skills`
- `resume-biography`
- `resume-biography-3`
- `resume-experience`
- `resume-languages`
- `resume-awards`
- `collection`
- `markdown`
- `hero`
- `features`
- etc.

### Step 2: Locate the Template File

Each block typically has a `block.html` file:

```bash
# Example: Finding the resume-biography-3 template
find /home/matteo/.cache/hugo_cache/modules -name "block.html" -path "*/resume-biography-3/*"
```

### Step 3: Copy the Template to Your Project

**CRITICAL:** The path in your project must match the **target** mount path, not the source!

```bash
# Generic formula:
# Theme source: blox/BLOCK_NAME/block.html
# Your override: layouts/partials/hbx/blocks/BLOCK_NAME/block.html

# Example: Override resume-biography-3
mkdir -p layouts/partials/hbx/blocks/resume-biography-3
cp /home/matteo/.cache/hugo_cache/modules/.../blox-tailwind@v0.10.0/blox/resume-biography-3/block.html \
   layouts/partials/hbx/blocks/resume-biography-3/block.html
```

### Step 4: Edit Your Local Copy

Now you can modify `layouts/partials/hbx/blocks/BLOCK_NAME/block.html` however you want.

**Important notes:**
- Hugo uses **Go templating syntax** (variables like `{{ $variable }}`, loops like `{{ range }}`)
- The theme uses **Tailwind CSS** classes
- You can add **inline styles** (like `style="gap: 10rem;"`) which always work
- Adding new Tailwind classes won't work (CSS is pre-compiled)

### Step 5: Hugo Automatically Detects Changes

Hugo's dev server watches for file changes. When you save your override:
1. Hugo detects the change
2. Rebuilds the site (takes 20-100ms)
3. Your browser auto-reloads (if you have live reload enabled)

**If changes don't appear:**
- Hard refresh your browser: `Ctrl + Shift + R` (Linux/Windows) or `Cmd + Shift + R` (Mac)
- Check you're viewing the correct port (look at Hugo server output for the URL)
- Restart the Hugo server: stop with `Ctrl+C`, then run `hugo server` again

---
 
## Common Customization Examples

### Example 1: Change Spacing (What We Just Did)

**Block:** `resume-skills`  
**File:** `layouts/partials/hbx/blocks/resume-skills/block.html`  
**Change:** Added inline style for gap

```html
<!-- Original (line 28 in theme) -->
<div class="grid grid-cols-1 md:grid-cols-2 items-start max-w-prose mx-auto gap-3 px-6 md:px-0">

<!-- Modified (our override) -->
<div class="grid grid-cols-1 md:grid-cols-2 items-start max-w-prose mx-auto px-6 md:px-0" style="gap: 10rem;">
```

### Example 2: Change Avatar Shape/Size

**Block:** `resume-biography-3`  
**File:** `layouts/partials/hbx/blocks/resume-biography-3/block.html`

You would:
1. Copy the template to `layouts/partials/hbx/blocks/resume-biography-3/block.html`
2. Find the avatar rendering code
3. Modify the CSS classes or add inline styles

### Example 3: Customize Experience Timeline

**Block:** `resume-experience`  
**File:** `layouts/partials/hbx/blocks/resume-experience/block.html`

You could change:
- Date format display
- Timeline connector styling
- Card spacing and layout
- Colors and backgrounds

---

## Understanding the File Structure

```
Your Project
├── layouts/
│   └── partials/
│       └── hbx/
│           └── blocks/           ← This is where overrides go
│               ├── resume-skills/
│               │   └── block.html
│               ├── resume-biography-3/
│               │   └── block.html
│               └── any-other-block/
│                   └── block.html
├── content/
│   └── _index.md                 ← Controls which blocks appear
└── content/authors/admin/
    └── _index.md                 ← The data that blocks display

Theme Cache (read-only)
└── /home/matteo/.cache/hugo_cache/modules/.../blox-tailwind@v0.10.0/
    └── blox/                     ← Original theme files (don't edit these!)
        ├── resume-skills/
        │   └── block.html
        └── resume-biography-3/
            └── block.html
```

**Key Points:**
- ✅ **DO** edit files in your project (`layouts/partials/hbx/blocks/...`)
- ❌ **DON'T** edit files in the cache (changes will be lost)
- The data comes from `content/authors/admin/_index.md`
- Which blocks display is controlled by `content/_index.md`

---

## Troubleshooting

### Changes Don't Appear

1. **Wrong path?** Check your override is at `layouts/partials/hbx/blocks/BLOCK_NAME/block.html`
2. **Wrong port?** Check the Hugo server output for the correct port
3. **Browser cache?** Do a hard refresh (`Ctrl + Shift + R`)
4. **Server not rebuilding?** Restart the Hugo server

### How to Verify Your Override Is Working

```bash
# Check the rendered HTML for your changes
curl -s http://localhost:PORT/ > /tmp/page.html
grep "your-custom-text-or-style" /tmp/page.html
```

### Finding What to Change

1. Open browser DevTools (F12)
2. Inspect the element you want to change
3. Find the CSS classes or structure
4. Search for those classes in the theme's `block.html` file
5. Copy to your override and modify

---

## Limitations

### What You CAN Do:
✅ Change HTML structure  
✅ Add/remove content  
✅ Modify existing Tailwind classes  
✅ Add inline styles (`style="..."`)  
✅ Change logic (if/else, loops)  
✅ Pull different data from your profile  

### What You CAN'T Do (Easily):
❌ Add new Tailwind utility classes (CSS is pre-compiled)  
❌ Use custom SCSS/CSS for Tailwind classes  
❌ Change the core theme framework  

**Workaround for custom styles:** Always use inline styles or create a custom CSS file and include it.

---

## Quick Reference Commands

```bash
# Find all available blocks
ls /home/matteo/.cache/hugo_cache/modules/filecache/modules/pkg/mod/github.com/\!hugo\!blox/hugo-blox-builder/modules/blox-tailwind@v0.10.0/blox/

# Find a specific block's template
find /home/matteo/.cache/hugo_cache/modules -name "block.html" -path "*/BLOCK_NAME/*"

# Create override for a block
mkdir -p layouts/partials/hbx/blocks/BLOCK_NAME
cp /home/matteo/.cache/hugo_cache/modules/.../blox/BLOCK_NAME/block.html \
   layouts/partials/hbx/blocks/BLOCK_NAME/block.html

# View the rendered HTML
curl -s http://localhost:PORT/ > /tmp/page.html
less /tmp/page.html

# Clean up wrong override attempts
rm -rf layouts/blox/
rm -rf layouts/partials/blocks/
rm -rf layouts/partials/blox/
```

---

## Summary

**The Override Process:**

1. **Find** the block in the theme cache
2. **Copy** to `layouts/partials/hbx/blocks/BLOCK_NAME/block.html`
3. **Edit** your local copy
4. **Save** and Hugo auto-rebuilds
5. **Refresh** browser to see changes

Remember: `layouts/partials/hbx/blocks/` is the magic path! 🎯
