import React, { useState, useCallback } from "react";
import { Terminal, Radio, Menu, X as CloseIcon } from "lucide-react";
import { NAV_LINKS } from "../data/navigation";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const scrollTo = useCallback((e, href) => {
    e.preventDefault();
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-md"
      style={{
        background: "rgba(5,7,10,0.85)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#home"
          onClick={(e) => scrollTo(e, "#home")}
          className="flex items-center gap-2 group"
          id="nav-logo"
        >
          <Terminal size={18} style={{ color: "var(--green)" }} />
          <span className="bp-display text-lg font-bold tracking-tight">
            BREACH<span style={{ color: "var(--green)" }}>POINT</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className="bp-nav-link bp-mono text-xs uppercase tracking-wider font-medium"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#event-heads"
            onClick={(e) => scrollTo(e, "#event-heads")}
            className="bp-btn-outline bp-mono text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-sm inline-flex items-center gap-2"
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
          id="nav-mobile-toggle"
        >
          {open ? <CloseIcon size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div
          className="md:hidden px-6 pb-5 flex flex-col gap-4"
          style={{ borderTop: "1px solid var(--border)" }}
          id="nav-mobile-menu"
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={(e) => scrollTo(e, l.href)}
              className="bp-mono text-xs uppercase tracking-wider font-medium pt-4"
              style={{ color: "var(--text-dim)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#event-heads"
            onClick={(e) => scrollTo(e, "#event-heads")}
            className="bp-btn-outline bp-mono text-xs uppercase tracking-wider font-semibold px-4 py-2 rounded-sm inline-flex items-center gap-2 justify-center mt-1"
          >
            <Radio size={13} />
            Call for Sponsors
          </a>
        </div>
      )}
    </header>
  );
}
