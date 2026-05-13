# PartyWitty — React Assessment

Nightlife social app built with React 18, TypeScript, Vite, TanStack Router, Tailwind CSS, and Framer Motion.

## Live Demo

🔗 https://partywitty-assessment.vercel.app/feed

## Tech Stack

* React 18 + TypeScript
* Vite
* TanStack Router (file-based)
* Tailwind CSS
* Framer Motion

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```txt
src/
├── components/   # Reusable UI, card, and layout components
├── data/         # Mock data
├── hooks/        # Custom React hooks
├── pages/        # Page-level components (one per route)
├── routes/       # TanStack Router route definitions
├── services/     # API service layer (placeholder)
├── types/        # Shared TypeScript interfaces
└── utils/        # Helper functions
```

## Routes

| Path             | Page                 |
| ---------------- | -------------------- |
| `/feed`          | Explore Feed (main)  |
| `/events`        | Events listing       |
| `/buy-drinks`    | Drink selection      |
| `/order-summary` | Order confirmation   |
| `/go-tonight`    | Profile invite       |
| `/verify-prompt` | Verification prompt  |
| `/verify-face`   | Face scan            |
| `/verified`      | Verification success |
| `/show-vibe`     | Photo upload         |

## Design Notes

* Design matches Figma exactly — no layout changes made
* Glassmorphism sidebar with `backdrop-filter: blur`
* Stacked ghost card effect on feed profile cards
* Gradient: `#FF3CAC → #6C63FF` (pink → purple)
* Page bg: warm bone/lavender gradient

## Assessment Notes

* Components are fully reusable and typed
* Hooks are extracted and single-responsibility
* Services layer ready for real API integration
* All routes functional with correct navigation flow
* Fully responsive across desktop, tablet, and mobile
* Clean scalable architecture with reusable UI patterns
