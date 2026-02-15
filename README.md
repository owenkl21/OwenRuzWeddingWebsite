# Owen & Ruz Wedding Website Starter

A modular wedding website starter built with **Next.js (App Router)**, **React**, **TypeScript**, and **Tailwind CSS**.

## Quick start

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run locally:
   ```bash
   npm run dev
   ```
3. Open [http://localhost:3000](http://localhost:3000)

## Project structure

- `src/app`: Next.js pages, layout, global styles
- `src/components/layout`: reusable layout components
- `src/components/sections`: modular wedding sections (hero, story, schedule, travel, registry)
- `src/data/site-content.ts`: editable wedding content data

## Why modular?

Each homepage area is split into independent section components so you can:

- reorder sections quickly
- add/remove sections with minimal code changes
- keep content in a dedicated data file for easier edits

## Next ideas

- Add RSVP form (with server actions or API routes)
- Add photo gallery section
- Add countdown timer
- Connect registry links and map embed
