/**
 * BreachPoint Landing Page
 *
 * This entry point re-exports the root App component from the structured React application.
 * The modular codebase is organized as follows:
 *   - Components: src/components/
 *   - Data models: src/data/
 *   - Cyberpunk styles & tokens: src/index.css
 *   - Application Root: src/App.jsx
 */
import App from "./src/App";

export default App;
export { default as Navbar } from "./src/components/Navbar";
export { default as Hero } from "./src/components/Hero";
export { default as Rounds } from "./src/components/Rounds";
export { default as RoundCard } from "./src/components/RoundCard";
export { default as Sponsors } from "./src/components/Sponsors";
export { default as SponsorCard } from "./src/components/SponsorCard";
export { default as EventHeads } from "./src/components/EventHeads";
export { default as EventHeadCard } from "./src/components/EventHeadCard";
export { default as Footer } from "./src/components/Footer";
