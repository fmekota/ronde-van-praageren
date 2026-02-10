# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ronde van Praageren is a cycling race event website built with Next.js 15 and TailwindCSS 4. The main project files are in the `ronde-van-praageren/` subdirectory.

## Commands

All commands should be run from `ronde-van-praageren/`:

```bash
cd ronde-van-praageren
npm run dev      # Start development server at http://localhost:3000
npm run build    # Build for production
npm run lint     # Run ESLint
npm start        # Start production server
```

## Architecture

- **Single-page application**: The entire website is in `src/app/page.tsx` (~1000 lines)
- **Styling**: TailwindCSS with custom color variables defined in `src/app/globals.css`
- **Client-side rendering**: Uses `"use client"` directive for Strava embed script loading via useEffect

## Key Files

- `ronde-van-praageren/src/app/page.tsx` - Main page with all sections
- `ronde-van-praageren/src/app/globals.css` - Custom CSS variables and utility classes
- `ronde-van-praageren/src/app/layout.tsx` - Root layout with metadata
- `ronde-van-praageren/public/` - Static assets (images, PDF)

## Color Theme

Custom CSS variables in `globals.css`:
- `--primary`: #FF5733 (orange-red)
- `--accent`: #3CAEA3 (teal)
- `--yellow-accent`: #F6D55C
- `--dark-blue`: #20639B
- `--brown-700/800`: Button colors
- `--olive-500/600/700`: Olive greens

## Third-Party Integrations

- **Strava**: Route embed (ID: 3199162964264401098) loaded via script in useEffect
- **Windy.com**: Weather forecast iframe (Prague coordinates)
- **Formspree**: Ready for form submissions (requires configuration)

## Deployment

Optimized for Vercel with `vercel.json` configuration. Push to GitHub triggers automatic deployment.
