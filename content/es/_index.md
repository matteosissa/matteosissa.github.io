---
# Leave the homepage title empty to use the site title
title: ""
date: 2025-12-27
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    id: home
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Ver CV
        url: https://flowcv.com/resume/tu7mms7uk21g
      headings:
        about: ''
        interests: ''
    design:
      # Apply a gradient background
      css_class: hbx-bg-gradient
      # Avatar customization
      avatar:
        size: large # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded

  - block: resume-work-education
    id: experience
    content:
      username: admin
    design:
      # Hugo Blox Builder supports multiple built-in color themes. Choose your favorite from https://docs.hugoblox.com/getting-started/customize/#appearance or add your own by following the theme guide at https://docs.hugoblox.com/getting-started/customize/#appearance.
      theme_light: custom
      theme_dark: custom

  - block: resume-skills-languages
    id: skills
    content:
      username: admin
    design:
      show_skill_percentage: true

  - block: collection
    id: projects
    content:
      title: Proyectos Destacados
      # Choose how many pages you would like to display (0 = all pages)
      count: 0
      # Filter on criteria
      filters:
        folders:
          - projects
        featured_only: false
    design:
      view: article-grid
      columns: 2

  - block: resume-footer
    content:
      username: admin
    design:
      # No spacing above footer since it has its own padding
      spacing:
        padding: [0, 0, 0, 0]

---
