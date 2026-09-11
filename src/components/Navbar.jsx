import React, { useState, useCallback } from "react";
import { Terminal, Menu, X as CloseIcon } from "lucide-react";
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
          className="flex items-center gap-2.5 group"
          id="nav-logo"
        >
          <span className="bp-display text-sm font-extrabold tracking-widest text-[var(--green)]">
            AXIOS
          </span>
          <span className="text-xs font-mono text-[var(--border-strong)]">/</span>
          <div className="flex items-center gap-1.5">
            <Terminal size={17} style={{ color: "var(--green)" }} />
            <span className="bp-display text-lg font-bold tracking-tight">
              BREACH<span style={{ color: "var(--green)" }}>POINT</span>
            </span>
          </div>
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

        <div className="hidden md:flex items-center">
          <span className="bp-mono text-xs uppercase tracking-widest font-semibold px-3 py-1.5 rounded-sm border border-[var(--border-strong)] bg-[var(--green-soft)] text-[var(--green)]">
            AXIOS &apos;26
          </span>
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
          <div className="bp-mono text-xs uppercase tracking-widest font-semibold px-3 py-2 rounded-sm border border-[var(--border-strong)] bg-[var(--green-soft)] text-[var(--green)] text-center mt-2">
            AXIOS &apos;26
          </div>
        </div>
      )}
    </header>
  );
}
