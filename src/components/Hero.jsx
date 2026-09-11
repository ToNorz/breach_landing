import React from "react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="relative overflow-hidden" style={{ background: "var(--bg)" }}>
      {/* Visual backgrounds */}
      <div className="absolute inset-0 bp-grid-bg pointer-events-none" />
      <div className="absolute inset-0 bp-glow pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="bp-scanline" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 pt-28 pb-24 flex flex-col items-center text-center">
        {/* Terminal status badge */}
        <div
          className="bp-rise bp-mono text-[11px] uppercase inline-flex items-center gap-2 px-3 py-1.5 rounded-sm mb-8"
          style={{
            animationDelay: "0.05s",
            border: "1px solid var(--border-strong)",
            color: "var(--green)",
            background: "var(--green-soft)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--green)" }} />
          SYSTEM ONLINE // CHALLENGE INITIALIZED
          <span className="bp-cursor">_</span>
        </div>

        {/* Hero Title */}
        <h1
          className="bp-rise bp-display font-bold leading-[0.95] tracking-tight"
          style={{
            animationDelay: "0.15s",
            fontSize: "clamp(2.75rem, 8vw, 6.5rem)",
          }}
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

        {/* CTA Buttons */}
        <div
          className="bp-rise flex flex-col sm:flex-row gap-4 mt-10"
          style={{ animationDelay: "0.45s" }}
        >
          <button
            onClick={() => scrollTo("#event-heads")}
            className="bp-btn-primary rounded-sm px-7 py-3.5 inline-flex items-center justify-center gap-2 bp-mono text-sm uppercase tracking-wider cursor-pointer"
            id="hero-register-btn"
          >
            Register Now
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollTo("#rounds")}
            className="bp-btn-outline rounded-sm px-7 py-3.5 inline-flex items-center justify-center gap-2 bp-mono text-sm uppercase tracking-wider cursor-pointer"
            id="hero-explore-btn"
          >
            Explore Rounds
          </button>
        </div>

        {/* Cyber keywords bar */}
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
