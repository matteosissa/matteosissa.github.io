# Matteo Sissa - Academic CV Website

This is a multilingual academic CV and portfolio website built with [Hugo](https://gohugo.io/) and [Hugo Blox](https://hugoblox.com/), featuring a modern design with Tailwind CSS. The website showcases my professional experience, education, projects, publications, and blog posts in three languages: English, Spanish, and Italian.

## 📁 Project Structure

```
CV_WEBSITE/
├── config/              # Hugo configuration files
│   └── _default/
│       ├── hugo.yaml       # Main Hugo settings
│       ├── languages.yaml  # Language configuration
│       ├── menus.yaml      # Navigation menus
│       ├── module.yaml     # Hugo modules
│       └── params.yaml     # Site parameters
├── content/             # Website content (multilingual)
│   ├── en/             # English content
│   ├── es/             # Spanish content
│   └── it/             # Italian content
│       ├── authors/    # Author profiles (main bio)
│       ├── projects/   # Project showcases
│       ├── publications/ # Research publications
│       ├── blog/       # Blog posts
│       ├── events/     # Events and talks
│       └── courses/    # Courses taught
├── assets/             # CSS, JS, and media files
├── layouts/            # Custom Hugo templates
├── static/             # Static files (uploads, etc.)
└── public/             # Generated site (build output)
```

## 🚀 Getting Started

### Prerequisites

- **Hugo Extended**: Version 0.152.2 or later ([Download](https://gohugo.io/installation/))
- **Go**: Version 1.21.5 or later ([Download](https://go.dev/dl/))
- **pnpm**: Version 10.14.0 or later ([Install](https://pnpm.io/installation))
- **Node.js**: Version 22 or later ([Download](https://nodejs.org/))

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/matteosissa/matteosissa.github.io.git
   cd CV_WEBSITE
   ```

2. **Install dependencies**:

   ```bash
   pnpm install
   ```

3. **Run the development server**:

   ```bash
   pnpm dev
   # or
   hugo server --disableFastRender
   ```

4. **Open your browser** and navigate to:

   ```
   http://localhost:1313
   ```

The site will auto-reload when you make changes to the content or configuration.

## 📝 Adding and Customizing Content

### Editing Your Profile

The main biography is located in:

```
content/{language}/authors/admin/_index.md
```

### Adding a Project

1. Create a new folder in `content/{language}/projects/`:

2. Create an `index.md` file, copying the markdown structure from other projects.

3. (Optional) Add a featured image named `featured.jpg` or `featured.png` in the same folder.

## 🎨 Customization

### Changing Colors and Styles

Edit `assets/css/custom.css` or `assets/scss/custom.scss` to customize the appearance:

```css
/* Example: Change primary color */
:root {
  --primary-color: #your-color;
}
```

### Modifying Navigation Menus

Edit `config/_default/menus.yaml` to add or remove menu items for each language.

### Updating Site Parameters

Edit `config/_default/params.yaml` to change:

- SEO settings
- Analytics configuration
- Footer content
- Social media sharing options

### Advanced Customization

For detailed information on overriding Hugo Blox templates and blocks, refer to the `CUSTOMIZATION_GUIDE.md` file in the repository.

## 🏗️ Building for Production

Build the static site:

```bash
pnpm build
# or
hugo --minify
```

The generated site will be in the `public/` directory.

## 🚢 Deployment on Github Pages

1. Build the site:
   ```bash
   hugo --minify
   ```

2. The `public/` folder contains your static site

3. Push to the `gh-pages` branch or configure GitHub Actions for automatic deployment

## 📚 Resources

- [Hugo Documentation](https://gohugo.io/documentation/)
- [Hugo Blox Documentation](https://hugoblox.com/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Hugo Blox Blocks Reference](https://hugoblox.com/blocks/)

## 📧 Contact

**Matteo Sissa**

- Email: matteo.sissa.2001@gmail.com

