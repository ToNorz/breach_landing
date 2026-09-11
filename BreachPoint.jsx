import React, { useState, useCallback } from "react";
import {
  Terminal,
  Zap,
  ArrowRight,
  Flag,
  Crosshair,
  Users,
  Mail,
  Menu,
  X as CloseIcon,
  Shield,
  Radio,
  Trophy,
  Github,
  Linkedin,
  Twitter,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Shared styles / tokens                                            */
/* ------------------------------------------------------------------ */

const GlobalStyle = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Inter:wght@400;500;600&display=swap');

    .bp-root {
      --bg: #05070a;
      --bg-alt: #090d0c;
      --panel: #0a0f0d;
      --border: rgba(74, 222, 158, 0.14);
      --border-strong: rgba(74, 222, 158, 0.4);
      --green: #34e5a4;
      --green-soft: rgba(52, 229, 164, 0.12);
      --red: #ff5468;
      --red-soft: rgba(255, 84, 104, 0.1);
      --amber: #f2b84b;
      --text: #e9f5ef;
      --text-dim: #90a49b;
      --text-faint: #4d5f57;
      font-family: 'Inter', sans-serif;
      background: var(--bg);
      color: var(--text);
      -webkit-font-smoothing: antialiased;
    }
    .bp-root * { box-sizing: border-box; }
    .bp-display { font-family: 'Space Grotesk', sans-serif; }
    .bp-mono { font-family: 'JetBrains Mono', monospace; }

    .bp-root html, .bp-scroll { scroll-behavior: smooth; }

    .bp-grid-bg {
      background-image:
        linear-gradient(to right, rgba(74,222,158,0.05) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(74,222,158,0.05) 1px, transparent 1px);
      background-size: 44px 44px;
      mask-image: radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 90%);
    }

    .bp-glow {
      background: radial-gradient(ellipse 60% 50% at 50% 20%, rgba(52,229,164,0.14), transparent 70%);
    }

    @keyframes bp-scan {
      0% { transform: translateY(-100%); opacity: 0; }
      10% { opacity: 0.5; }
      90% { opacity: 0.5; }
      100% { transform: translateY(2200%); opacity: 0; }
    }
    .bp-scanline {
      position: absolute;
      left: 0; right: 0; top: 0;
      height: 1px;
      background: linear-gradient(to right, transparent, rgba(52,229,164,0.6), transparent);
      animation: bp-scan 7s linear infinite;
    }

    @keyframes bp-blink {
      0%, 45% { opacity: 1; }
      50%, 95% { opacity: 0; }
      100% { opacity: 1; }
    }
    .bp-cursor { animation: bp-blink 1.1s steps(1) infinite; }

    @keyframes bp-rise {
      from { opacity: 0; transform: translateY(14px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .bp-rise { animation: bp-rise 0.7s cubic-bezier(0.16,1,0.3,1) both; }

    @media (prefers-reduced-motion: reduce) {
      .bp-scanline, .bp-cursor, .bp-rise { animation: none !important; }
    }

    .bp-panel {
      background: linear-gradient(180deg, var(--panel), var(--bg-alt));
      border: 1px solid var(--border);
      position: relative;
      transition: border-color 0.35s ease, transform 0.35s ease, background 0.35s ease;
    }
    .bp-panel:hover {
      border-color: var(--border-strong);
      transform: translateY(-3px);
    }
    .bp-corner {
      position: absolute;
      width: 14px;
      height: 14px;
      border-color: var(--border-strong);
      opacity: 0.7;
      transition: opacity 0.35s ease;
    }
    .bp-panel:hover .bp-corner { opacity: 1; }

    .bp-btn-primary {
      background: var(--green);
      color: #04150e;
      font-weight: 600;
      transition: filter 0.25s ease, transform 0.25s ease;
    }
    .bp-btn-primary:hover { filter: brightness(1.12); transform: translateY(-1px); }

    .bp-btn-outline {
      border: 1px solid var(--border-strong);
      color: var(--text);
      transition: border-color 0.25s ease, background 0.25s ease;
    }
    .bp-btn-outline:hover { background: var(--green-soft); border-color: var(--green); }

    .bp-nav-link {
      color: var(--text-dim);
      transition: color 0.2s ease;
      position: relative;
    }
    .bp-nav-link:hover { color: var(--text); }

    .bp-tag {
      border: 1px solid var(--border-strong);
      color: var(--green);
      background: var(--green-soft);
      letter-spacing: 0.06em;
    }
    .bp-tag-red {
      border: 1px solid rgba(255,84,104,0.4);
      color: var(--red);
      background: var(--red-soft);
      letter-spacing: 0.06em;
    }

    .bp-divider { background: var(--border); }
  `}</style>
);

/* ------------------------------------------------------------------ */
/*  Navbar                                                             */
/* ------------------------------------------------------------------ */

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Rounds", href: "#rounds" },
  { label: "Sponsors", href: "#sponsors" },
  { label: "Event Heads", href: "#event-heads" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = useCallback((e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md" style={{ background: "rgba(5,7,10,0.85)", borderBottom: "1px solid var(--border)" }}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" onClick={(e) => scrollTo(e, "#home")} className="flex items-center gap-2 group">
          <Terminal size={18} style={{ color: "var(--green)" }} />
          <span className="bp-display text-lg font-semibold tracking-tight">
            BREACH<span style={{ color: "var(--green)" }}>POINT</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className="bp-nav-link bp-mono text-xs uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#event-heads"
            onClick={(e) => scrollTo(e, "#event-heads")}
            className="bp-btn-outline bp-mono text-xs uppercase tracking-wider px-4 py-2 rounded-sm inline-flex items-center gap-2"
          >
            <Radio size={13} />
            Call for Sponsors
          </a>
        </div>

        <button
          className="md:hidden p-2"
          style={{ color: "var(--text)" }}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <CloseIcon size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-4" style={{ borderTop: "1px solid var(--border)" }}>
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className="bp-mono text-xs uppercase tracking-wider pt-4"
              style={{ color: "var(--text-dim)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#event-heads"
            onClick={(e) => scrollTo(e, "#event-heads")}
            className="bp-btn-outline bp-mono text-xs uppercase tracking-wider px-4 py-2 rounded-sm inline-flex items-center gap-2 justify-center mt-1"
          >
            <Radio size={13} />
            Call for Sponsors
          </a>
        </div>
      )}
    </header>
  );
}

/* ------------------------------------------------------------------ */
/*  Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="home" className="relative overflow-hidden" style={{ background: "var(--bg)" }}>
      <div className="absolute inset-0 bp-grid-bg pointer-events-none" />
      <div className="absolute inset-0 bp-glow pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bp-scanline" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-24 flex flex-col items-center text-center">
        <div
          className="bp-rise bp-mono text-[11px] uppercase inline-flex items-center gap-2 px-3 py-1.5 rounded-sm mb-8"
          style={{ animationDelay: "0.05s", border: "1px solid var(--border-strong)", color: "var(--green)", background: "var(--green-soft)" }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--green)" }} />
          SYSTEM ONLINE // CHALLENGE INITIALIZED
          <span className="bp-cursor">_</span>
        </div>

        <h1
          className="bp-rise bp-display font-bold leading-[0.95] tracking-tight"
          style={{ animationDelay: "0.15s", fontSize: "clamp(2.75rem, 8vw, 6.5rem)" }}
        >
          BREACHPOINT
        </h1>

        <p
          className="bp-rise bp-mono mt-6 text-sm md:text-base tracking-wide uppercase"
          style={{ animationDelay: "0.25s", color: "var(--text-dim)" }}
        >
          Break the system. Capture the flag. Make your mark.
        </p>

        <p
          className="bp-rise mt-6 max-w-xl text-base md:text-lg leading-relaxed"
          style={{ animationDelay: "0.35s", color: "var(--text)" }}
        >
          A two-stage cybersecurity challenge where curiosity becomes skill, and skill becomes control.
        </p>

        <div className="bp-rise flex flex-col sm:flex-row gap-4 mt-10" style={{ animationDelay: "0.45s" }}>
          <button
            onClick={() => scrollTo("#event-heads")}
            className="bp-btn-primary rounded-sm px-7 py-3.5 inline-flex items-center justify-center gap-2 bp-mono text-sm uppercase tracking-wider"
          >
            Register Now
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollTo("#rounds")}
            className="bp-btn-outline rounded-sm px-7 py-3.5 inline-flex items-center justify-center gap-2 bp-mono text-sm uppercase tracking-wider"
          >
            Explore Rounds
          </button>
        </div>

        <div
          className="bp-rise mt-16 flex items-center gap-6 bp-mono text-[11px] uppercase"
          style={{ animationDelay: "0.55s", color: "var(--text-faint)" }}
        >
          <span>Recon</span>
          <span style={{ color: "var(--border-strong)" }}>/</span>
          <span>Exploit</span>
          <span style={{ color: "var(--border-strong)" }}>/</span>
          <span>Defend</span>
          <span style={{ color: "var(--border-strong)" }}>/</span>
          <span>Capture</span>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Rounds                                                              */
/* ------------------------------------------------------------------ */

function RoundCard({ index, title, status, statusVariant, tagline, description, icon: Icon }) {
  return (
    <div className="bp-panel rounded-sm p-8 md:p-10 flex flex-col h-full">
      <span className="bp-corner border-t border-l" style={{ top: -1, left: -1 }} />
      <span className="bp-corner border-t border-r" style={{ top: -1, right: -1 }} />
      <span className="bp-corner border-b border-l" style={{ bottom: -1, left: -1 }} />
      <span className="bp-corner border-b border-r" style={{ bottom: -1, right: -1 }} />

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-sm flex items-center justify-center"
            style={{ border: "1px solid var(--border-strong)", background: "var(--green-soft)" }}
          >
            <Icon size={18} style={{ color: "var(--green)" }} />
          </div>
          <span className="bp-mono text-xs tracking-widest" style={{ color: "var(--text-faint)" }}>
            ROUND {index}
          </span>
        </div>
        <span className={`bp-mono text-[10px] uppercase px-2.5 py-1 rounded-sm ${statusVariant === "red" ? "bp-tag-red" : "bp-tag"}`}>
          {status}
        </span>
      </div>

      <h3 className="bp-display text-2xl md:text-3xl font-semibold mb-4">{title}</h3>
      <p className="bp-mono text-sm mb-4" style={{ color: "var(--green)" }}>
        {tagline}
      </p>
      <p className="text-sm md:text-base leading-relaxed" style={{ color: "var(--text-dim)" }}>
        {description}
      </p>
    </div>
  );
}

function Rounds() {
  return (
    <section id="rounds" className="relative px-6 py-28" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="bp-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
            The Format
          </p>
          <h2 className="bp-display text-3xl md:text-4xl font-semibold">
            Two rounds. One objective. Prove you belong.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          <RoundCard
            index="01"
            title="Jeopardy CTF"
            status="Status: Active"
            statusVariant="green"
            tagline="Recon. Exploit. Decode. Capture."
            description="A challenge-driven round covering multiple cybersecurity problem domains. Solve challenges, collect flags and climb the leaderboard."
            icon={Flag}
          />
          <RoundCard
            index="02"
            title="Attack & Defense"
            status="Status: Top 10 Only"
            statusVariant="red"
            tagline="Defend your system. Break theirs."
            description={
              <>
                The <strong style={{ color: "var(--text)" }}>Top 10</strong> teams advance to an intense
                attack-and-defense battle where strategy, exploitation and defense decide the winner.
              </>
            }
            icon={Crosshair}
          />
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Sponsors                                                            */
/* ------------------------------------------------------------------ */

function SponsorCard({ size = "sm" }) {
  const large = size === "lg";
  return (
    <div
      className={`bp-panel rounded-sm flex flex-col items-center justify-center gap-3 ${large ? "py-14" : "py-10"}`}
    >
      <div
        className={`rounded-sm flex items-center justify-center ${large ? "w-16 h-16" : "w-12 h-12"}`}
        style={{ border: "1px solid var(--border-strong)", background: "var(--green-soft)" }}
      >
        <Shield size={large ? 26 : 20} style={{ color: "var(--text-faint)" }} />
      </div>
      <div className="text-center">
        <p className={`bp-display font-semibold ${large ? "text-base" : "text-sm"}`} style={{ color: "var(--text-dim)" }}>
          Sponsor Name
        </p>
        <p className="bp-mono text-[10px] uppercase tracking-widest mt-1" style={{ color: "var(--text-faint)" }}>
          {large ? "Title Sponsor" : "Partner"}
        </p>
      </div>
    </div>
  );
}

function Sponsors() {
  return (
    <section id="sponsors" className="relative px-6 py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="bp-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
            Backed By
          </p>
          <h2 className="bp-display text-3xl md:text-4xl font-semibold">Powering the Breach</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <SponsorCard size="lg" />
          <SponsorCard size="lg" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {Array.from({ length: 8 }).map((_, i) => (
            <SponsorCard key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Event Heads                                                        */
/* ------------------------------------------------------------------ */

function EventHeadCard({ name, role, email }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="bp-panel rounded-sm p-8 md:p-10 flex flex-col items-center text-center">
      <span className="bp-corner border-t border-l" style={{ top: -1, left: -1 }} />
      <span className="bp-corner border-b border-r" style={{ bottom: -1, right: -1 }} />

      <div
        className="w-20 h-20 rounded-full flex items-center justify-center bp-display text-xl font-semibold mb-5"
        style={{ border: "1px solid var(--border-strong)", background: "var(--green-soft)", color: "var(--green)" }}
      >
        {initials}
      </div>
      <h3 className="bp-display text-lg font-semibold">{name}</h3>
      <p className="bp-mono text-xs uppercase tracking-widest mt-1.5" style={{ color: "var(--text-faint)" }}>
        {role}
      </p>
      <a
        href={`mailto:${email}`}
        className="bp-nav-link bp-mono text-sm mt-4 inline-flex items-center gap-2"
        style={{ color: "var(--text-dim)" }}
      >
        <Mail size={14} />
        {email}
      </a>
    </div>
  );
}

function EventHeads() {
  return (
    <section id="event-heads" className="relative px-6 py-28" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="bp-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
            Contacts
          </p>
          <h2 className="bp-display text-3xl md:text-4xl font-semibold">The People Behind the Breach</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-14">
          <EventHeadCard name="Aditya Hariharan" role="Event Head" email="22pc04@psgtech.ac.in" />
          <EventHeadCard name="Saivenketraj K.S" role="Event Head" email="22pc28@psgtech.ac.in" />
        </div>

        <div
          className="bp-panel rounded-sm px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
        >
          <div className="flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-sm flex items-center justify-center shrink-0"
              style={{ border: "1px solid var(--border-strong)", background: "var(--green-soft)" }}
            >
              <Users size={18} style={{ color: "var(--green)" }} />
            </div>
            <p className="text-base md:text-lg" style={{ color: "var(--text)" }}>
              Interested in partnering with BreachPoint? Let's build the challenge together.
            </p>
          </div>
          <a
            href="mailto:22pc04@psgtech.ac.in"
            className="bp-btn-primary rounded-sm px-6 py-3 inline-flex items-center gap-2 bp-mono text-xs uppercase tracking-wider shrink-0"
          >
            Get in Touch
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/*  Footer                                                              */
/* ------------------------------------------------------------------ */

function Footer() {
  return (
    <footer id="contact" className="relative px-6 pt-20 pb-10" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-14">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal size={16} style={{ color: "var(--green)" }} />
              <span className="bp-display text-base font-semibold">
                BREACH<span style={{ color: "var(--green)" }}>POINT</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-faint)" }}>
              A national-level cybersecurity CTF. Break the system, capture the flag.
            </p>
          </div>

          <div>
            <p className="bp-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
              Platforms
            </p>
            <ul className="space-y-3 text-sm" style={{ color: "var(--text-dim)" }}>
              <li className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2"><Trophy size={13} /> CTFtime</span>
                <span className="bp-mono text-[10px]" style={{ color: "var(--text-faint)" }}>soon</span>
              </li>
              <li className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2"><Terminal size={13} /> CTF Link</span>
                <span className="bp-mono text-[10px]" style={{ color: "var(--text-faint)" }}>soon</span>
              </li>
              <li className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2"><Zap size={13} /> Unstop</span>
                <span className="bp-mono text-[10px]" style={{ color: "var(--text-faint)" }}>soon</span>
              </li>
            </ul>
          </div>

          <div>
            <p className="bp-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
              Contact
            </p>
            <ul className="space-y-3 text-sm" style={{ color: "var(--text-dim)" }}>
              <li>
                <a href="mailto:22pc04@psgtech.ac.in" className="bp-nav-link">22pc04@psgtech.ac.in</a>
              </li>
              <li>
                <a href="mailto:22pc28@psgtech.ac.in" className="bp-nav-link">22pc28@psgtech.ac.in</a>
              </li>
            </ul>
          </div>

          <div>
            <p className="bp-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
              Follow
            </p>
            <div className="flex items-center gap-3">
              {[Github, Linkedin, Twitter].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-sm flex items-center justify-center bp-nav-link"
                  style={{ border: "1px solid var(--border)" }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 bp-mono text-[11px] uppercase tracking-wider"
          style={{ borderTop: "1px solid var(--border)", color: "var(--text-faint)" }}
        >
          <span>&copy; 2026 BreachPoint. All systems monitored.</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--green)" }} />
            End of transmission
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */
/*  App                                                                 */
/* ------------------------------------------------------------------ */

export default function App() {
  return (
    <div className="bp-root bp-scroll min-h-screen">
      <GlobalStyle />
      <Navbar />
      <Hero />
      <Rounds />
      <Sponsors />
      <EventHeads />
      <Footer />
    </div>
  );
}
