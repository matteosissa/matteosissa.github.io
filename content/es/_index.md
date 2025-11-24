---
# Leave the homepage title empty to use the site title
title: ""
date: 2024-05-19
type: landing

design:
  # Default section spacing
  spacing: "6rem"

sections:
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ""
      # Show a call-to-action button under your biography? (optional)
      button:
        text: Descargar CV
        url: uploads/resume.pdf
    design:
      css_class: dark
      background:
        color: black
        image:
          # Add your image background to `assets/media/`.
          filename: stacked-peaks.svg
          filters:
            brightness: 1.0
          size: cover
          position: center
          parallax: false
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
      show_skill_percentage: false
  - block: collection
    id: projects
    content:
      title: Proyectos Destacados
      subtitle: ''
      text: 'Me gusta crear cosas. Aquí hay una selección de proyectos en los que he trabajado a lo largo de los años.'
      # Choose how many pages you would like to display (0 = all pages)
      count: 0
      # Filter on criteria
      filters:
        # The folders to display content from
        folders:
          - projects
        author: ""
        category: ""
        tag: ""
        publication_type: ""
        featured_only: false
        exclude_featured: false
        exclude_future: false
        exclude_past: false
      # Choose how many pages you would like to offset by
      # Useful if you wish to show the first item in the Featured widget
      offset: 0
      # Field to sort by, such as Date or Title
      sort_by: 'Date'
      sort_ascending: false
    design:
      # Choose a listing view
      view: article-grid
      # Choose how many columns the section has. Valid values: '1' or '2'.
      columns: '2'
      fill_image: false
      show_date: false
      show_read_time: false
      show_read_more: false
---
