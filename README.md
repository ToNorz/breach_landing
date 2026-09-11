# ⚡ BreachPoint — Cybersecurity CTF Landing Page

A modern, high-performance landing page for **BreachPoint**, a national-level cybersecurity Capture The Flag (CTF) competition. Built with **React 18**, **Vite**, **Tailwind CSS**, and **Lucide React**, featuring an immersive cyberpunk/terminal visual identity.

---

## 🚀 Quick Start

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed:
- **Node.js**: v18.0.0 or higher (v20+ recommended)
- **npm**: v9.0.0 or higher

Check your installed versions:
```bash
node -v
npm -v
```

---

### Installation & Running Locally

1. **Clone or navigate to the repository:**
   ```bash
   cd /path/to/Landing
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to the local URL (typically **http://localhost:5173**).

---

### Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite development server with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and bundles the application into optimized production assets in `dist/`. |
| `npm run preview` | Locally serves the production build from `dist/` for testing before deployment. |

---

## 📁 Project Structure

The project follows a clean, modular component-driven architecture:

```text
Landing/
├── index.html                  # HTML entry point with metadata, fonts, and SVG favicon
├── package.json                # Project dependencies and npm scripts
├── vite.config.js              # Vite React configuration
├── tailwind.config.js          # Tailwind CSS utility & theme config
├── postcss.config.js           # PostCSS setup
├── README.md                   # Setup guide and documentation
├── BreachPoint.jsx             # Root backwards-compatibility re-export shim
└── src/
    ├── main.jsx                # React DOM entry point
    ├── App.jsx                 # Top-level page container assembling sections
    ├── index.css               # Tailwind directives, CSS custom properties & cyber animations
    │
    ├── data/                   # Centralized configuration & content data
    │   ├── navigation.js       # Navigation links and anchors
    │   ├── rounds.js           # CTF rounds (Jeopardy CTF & Attack & Defense)
    │   ├── sponsors.js         # Title sponsors and partner tier lists
    │   ├── eventHeads.js       # Coordinator contact cards & partnership callout data
    │   └── footer.js           # Platform links, social channels, and emails
    │
    └── components/             # Reusable React UI components
        ├── Navbar.jsx          # Sticky blur header with smooth scrolling & mobile menu
        ├── Hero.jsx            # Terminal status, headline, scanline, & CTAs
        ├── Rounds.jsx          # Section container for competition rounds
        ├── RoundCard.jsx       # Individual round card with cyber corner accents
        ├── Sponsors.jsx        # Grid layout for title and partner sponsor tiers
        ├── SponsorCard.jsx     # Reusable sponsor logo card
        ├── EventHeads.jsx      # Section container for organizers & partnership banner
        ├── EventHeadCard.jsx   # Individual organizer contact card with avatar initials
        └── Footer.jsx          # 4-column footer with platform links, socials, & status
```

---

## 🧩 Component Architecture

| Component | File | Description |
| :--- | :--- | :--- |
| **Navbar** | [`src/components/Navbar.jsx`](src/components/Navbar.jsx) | Sticky top navigation bar with brand logo, smooth-scrolling section links, sponsor CTA, and an animated mobile drawer. |
| **Hero** | [`src/components/Hero.jsx`](src/components/Hero.jsx) | Animated hero banner with scanline sweep, blinking terminal cursor, custom typography, and registration buttons. |
| **Rounds** | [`src/components/Rounds.jsx`](src/components/Rounds.jsx) | Displays the two competition stages: Jeopardy CTF (Round 1) and Attack & Defense (Round 2). |
| **RoundCard** | [`src/components/RoundCard.jsx`](src/components/RoundCard.jsx) | Individual round card featuring neon corner brackets, stage tag, problem domain details, and icons. |
| **Sponsors** | [`src/components/Sponsors.jsx`](src/components/Sponsors.jsx) | Tiered sponsor showcases separating Title Sponsors from Community/Event Partners. |
| **SponsorCard** | [`src/components/SponsorCard.jsx`](src/components/SponsorCard.jsx) | Card supporting different sizes (`lg` for title sponsors, `sm` for partners). |
| **EventHeads** | [`src/components/EventHeads.jsx`](src/components/EventHeads.jsx) | Section highlighting key organizers and an interactive partnership outreach CTA. |
| **EventHeadCard**| [`src/components/EventHeadCard.jsx`](src/components/EventHeadCard.jsx)| Organizer profile card featuring auto-generated initials badge and direct mailto link. |
| **Footer** | [`src/components/Footer.jsx`](src/components/Footer.jsx) | Multi-column footer displaying supported platforms (CTFtime, Unstop), social media, and copyright status. |

---

## ⚙️ How to Customize Content

All text, links, and lists are separated from layout code in [`src/data/`](src/data/):

- **Update Navigation Links**: Edit [`src/data/navigation.js`](src/data/navigation.js).
- **Update CTF Rounds**: Edit [`src/data/rounds.js`](src/data/rounds.js) to change round titles, rules, tags, or icons.
- **Add Sponsors**: Edit [`src/data/sponsors.js`](src/data/sponsors.js) to append or replace sponsor names and tiers.
- **Change Event Organizers**: Edit [`src/data/eventHeads.js`](src/data/eventHeads.js) with new names, emails, and roles.
- **Update Socials & Platforms**: Edit [`src/data/footer.js`](src/data/footer.js) to update URLs for CTFtime, Unstop, GitHub, LinkedIn, or Twitter.

---

## 🎨 Design System & Theme Tokens

The design system uses CSS variables defined in [`src/index.css`](src/index.css):

```css
:root {
  --bg: #05070a;             /* Dark cyber background */
  --bg-alt: #090d0c;         /* Alternate section background */
  --panel: #0a0f0d;          /* Card surface color */
  --border: rgba(74, 222, 158, 0.14); /* Subtle emerald border */
  --border-strong: rgba(74, 222, 158, 0.4);
  --green: #34e5a4;          /* Primary neon green accent */
  --green-soft: rgba(52, 229, 164, 0.12);
  --red: #ff5468;            /* Alert / Attack red accent */
  --red-soft: rgba(255, 84, 104, 0.1);
  --text: #e9f5ef;           /* High contrast text */
  --text-dim: #90a49b;       /* Muted text */
  --text-faint: #4d5f57;     /* Subdued metadata text */
}
```

Typography uses:
- **Headings & Brand**: [Oxanium](https://fonts.google.com/specimen/Oxanium) 700/800 (`.bp-display`, `font-display`) for `BREACHPOINT`, section titles, and card headers.
- **Body & Descriptions**: [Inter](https://fonts.google.com/specimen/Inter) 400/500 (`font-sans`) for descriptions, narrative paragraphs, and body copy.
- **Time & Technical Labels**: [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) 400/500/600 (`.bp-mono`, `font-mono`) for terminal badges, timestamps, tags, navigation, buttons, and metadata.

---

## 🛠️ Tech Stack

- **Framework**: [React 18](https://react.dev/)
- **Bundler & Dev Server**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Custom CSS animations
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: Google Fonts (Oxanium, Inter, IBM Plex Mono)

---

## 📄 License

This project is created for the BreachPoint CTF event. All rights reserved.
