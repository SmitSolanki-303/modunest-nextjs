# Modunest Project Guidelines

This file contains the context, architectural decisions, and coding best practices for AI agents working on the Modunest codebase. Please adhere strictly to these rules.

## Tech Stack
- **Framework:** Next.js 15 (App Router)
- **React:** Version 19
- **Styling:** Tailwind CSS (v4)
- **Icons:** `lucide-react`
- **Animations / Sliders:** `swiper` (Preferred over custom touch event sliders), standard Tailwind CSS transitions.

## Architectural Best Practices (Next.js App Router)
1. **Server Components Default:** Keep page routes (`src/app/**/page.jsx`) and layouts as Server Components by default. This is critical for performance and SEO.
2. **Client Component Delegation:** Push `"use client"` down the component tree. Create specific interactive wrapper components (e.g., `src/components/sections/CollectionSlider.jsx`) and import them into Server Components rather than making entire pages Client Components.
3. **SEO & Metadata:** **NEVER** use `<Head>` from `next/head` inside the `app` directory. Always export a `metadata` object from the Server Component `page.jsx` or `layout.jsx`.
4. **Dynamic Imports:** If you must use `next/dynamic` with `{ ssr: false }`, it must be imported inside a Client Component wrapper. Next.js 15 will throw a build error if `ssr: false` is used directly in a Server Component.

## Project Structure
- `src/app/` -> Route definitions, Layouts, and Server-side pages.
- `src/components/sections/` -> Large, page-level block components (e.g., Hero, Portfolio, Sliders).
- `src/components/ui/` -> Small, reusable atomic components (e.g., standard `Button`, individual SVGs).
- `src/data/` -> Static mock data or JSON content arrays (e.g., `homesData.js`).

## Component Guidelines
1. **Reusable UI Elements:** Always check `src/components/ui` for existing components before creating new ones (e.g., use the existing `Button` component instead of styling native `<button>` tags).
2. **Images:** Always use the Next.js `<Image />` component. Ensure you provide `sizes="100vw"` (or appropriate responsive sizes) and set `priority={true}` for Above-the-Fold (LCP) images. Use `quality={90}` for hero images.
3. **Swiper / Carousels:** Do not build custom wheel/touch slider components. Use the installed `swiper` library. Note: Swiper's native `Mousewheel` module can conflict with trackpad micro-scrolls in React environments. If building full-screen sliders, use custom `wheel` event listeners with `useRef` throttles instead of the native mousewheel module.

## Styling (Tailwind v4)
- Use arbitrary values `[...]` sparingly. Rely on standard Tailwind utility classes.
- Ensure all interactive elements have hover/active states (e.g., `hover:scale-105 active:scale-95`).
- Use Tailwind's `transition-all duration-300 ease-out` for smooth micro-interactions.

## Refactoring Protocol
When asked to optimize or fix a component:
- **Minimize State:** Remove unused `useState` or `useEffect` hooks. 
- **Verify Imports:** Remove unused imports.
- **Maintain Aesthetics:** Modunest is a premium brand. Never degrade the visual quality, animations, or styling of the application when refactoring functional logic.
