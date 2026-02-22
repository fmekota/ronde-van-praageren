# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ronde van Praageren is a cycling race event website built with Next.js 15, React 19, and TailwindCSS 4. The main project files are in the `ronde-van-praageren/` subdirectory.

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

- **App Router**: Next.js 15 App Router with pages in `src/app/`
- **Client Components**: Main page uses `"use client"` for Strava embed script loading
- **Centralized Config**: Event data (dates, segments, testimonials, sponsors) in `src/config/event.ts`
- **Reusable Components**: Card components in `src/components/` (SegmentCard, TestimonialCard, EventDetailCard)
- **Archive Pages**: Historical event data at `/archive` with year-specific subpages

## Key Files

- `src/app/page.tsx` - Main landing page with all sections
- `src/config/event.ts` - Centralized event configuration (EVENT_CONFIG constant)
- `src/components/` - Reusable UI components with barrel export in `index.ts`
- `src/app/globals.css` - TailwindCSS 4 with custom color theme via `@theme inline`
- `src/app/archive/` - Archive pages for past events
- `src/config/archive/` - Historical event data by year

## Color Theme

Custom CSS variables in `globals.css` using TailwindCSS 4's `@theme inline`:
- `--primary`: #FF5733 (orange-red)
- `--accent`: #3CAEA3 (teal)
- `--yellow-accent`: #F6D55C
- `--dark-blue`: #20639B
- `--brown-700/800`: Button colors
- `--olive-500/600/700`: Olive greens

## Third-Party Integrations

- **Strava**: Route embed loaded via `next/script` with error handling fallback
- **Windy.com**: Weather forecast iframe (Prague coordinates)

## Deployment

Optimized for Vercel with `vercel.json` configuration. Push to GitHub triggers automatic deployment.
