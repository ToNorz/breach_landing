# Breach Point Landing Page

Welcome to the Breach Point event landing page!

## Features

- Sleek hacker-themed UI built with **React** and **Tailwind CSS v4**.
- Built-in notification bell interaction containing a hidden CTF challenge for early registrants.
- Sections outlining the **Jeopardy CTF** (Round 1) and **Attack & Defence** (Round 2).
- Stats and Gallery placeholders for past/current Axios events.
- Call for Sponsors section for finding corporate partners.
- Registration links (placeholder destinations for Unstop and CTFTime).

## Running the project Locally

1. Install dependencies (if you haven't already):

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the URL provided to see the live view.

## Customizing

- Expand `src/App.jsx` to swap in the final Unstop and CTFTime links.
- Place event gallery photos in the placeholders by updating the `<img>` tags in the gallery section instead of the `lucide-react` icons.
- Add sponsor images within the sponsors grid.
