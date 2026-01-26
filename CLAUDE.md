# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```sh
zola serve                    # Start local dev server with live reload
npm run build:watch --prefix tailwind  # Watch Tailwind CSS changes
```

### Build
```sh
zola build                    # Build static site to /public
npm run build --prefix tailwind        # Production CSS (minified)
npm run build:dev --prefix tailwind    # Development CSS (unminified)
```

### Dependency Updates
```sh
npm run updates --prefix tailwind      # Check for updates (ncu)
npm run postupdates --prefix tailwind  # Install and audit
```

## Architecture

This is a static portfolio site using **Zola** (static site generator) with **Tailwind CSS**.

### Build Pipeline
1. Tailwind compiles `tailwind/src/tailwind.css` → `static/css/styles.css`
2. Zola builds templates + content → `public/`
3. GitHub Actions deploys to gh-pages on push

### Key Directories
- `templates/` - Tera templates (`index.html` homepage, `page.html` generic)
- `content/` - Markdown content with TOML front matter
- `tailwind/` - CSS source, config, and npm scripts
- `static/` - Assets served directly (images, generated CSS, CNAME)

### Conventions
- Dark mode enabled by default (`dark` class on html element)
- Tailwind responsive prefixes for mobile-first design
- Font Awesome via CDN for icons
