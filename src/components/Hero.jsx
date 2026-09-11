import React, { useState, useEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import AxiosLogo from "./AxiosLogo";

const TITLE_LETTERS = "BREACHPOINT".split("");
const RANDOM_CHARS = ["0", "1", "4", "7", "A", "X", "#", "8", "9", "Z", "_"];

export default function Hero() {
  const [activeFlip, setActiveFlip] = useState(null);
  const timerRef = useRef(null);

  useEffect(() => {
    // Respect prefers-reduced-motion
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    let isMounted = true;

    const scheduleNext = () => {
      // Shorter pause between flips (~700ms - 1000ms) for a more active mechanical tick
      const pauseDuration = 700 + Math.random() * 300;
      timerRef.current = setTimeout(() => {
        if (!isMounted) return;

        // Select exactly one letter randomly
        const index = Math.floor(Math.random() * TITLE_LETTERS.length);
        const originalChar = TITLE_LETTERS[index];
        const validRandoms = RANDOM_CHARS.filter((c) => c !== originalChar);
        const randomChar = validRandoms[Math.floor(Math.random() * validRandoms.length)];

        setActiveFlip({
          index,
          randomChar,
          key: Date.now(),
        });

        // Fast flip completes in 360ms -> settle back to original letter, then schedule next
        timerRef.current = setTimeout(() => {
          if (!isMounted) return;
          setActiveFlip(null);
          scheduleNext();
        }, 360);
      }, pauseDuration);
    };

    // Initial settle before first flip
    scheduleNext();

    return () => {
      isMounted = false;
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

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
        {/* Recreated AXIOS '26 Emblem & Wordmark (HTML/SVG, date omitted) */}
        <div
          className="bp-rise max-w-[135px] sm:max-w-[165px] md:max-w-[195px] w-full mb-6 mx-auto transition-transform duration-300 hover:scale-105"
          style={{ animationDelay: "0.05s" }}
        >
          <AxiosLogo />
        </div>

        {/* Hero Title - Oxanium 800 with mechanical precision flip animation */}
        <h1
          className="bp-rise bp-display font-extrabold leading-[0.95] tracking-tight"
          style={{
            animationDelay: "0.15s",
            fontSize: "clamp(2.75rem, 8vw, 6.5rem)",
          }}
          aria-label="BREACHPOINT"
        >
          {TITLE_LETTERS.map((letter, i) => {
            const isFlipping = activeFlip && activeFlip.index === i;
            return (
              <span key={i} className="bp-flip-cell">
                {/* Static/Ghost letter preserving exact title kerning, tracking, and footprint */}
                <span
                  className={isFlipping ? "invisible select-none" : ""}
                  aria-hidden={isFlipping ? "true" : undefined}
                >
                  {letter}
                </span>

                {/* 3D Mechanical Tumbler */}
                {isFlipping && (
                  <span
                    key={activeFlip.key}
                    className="bp-flipper"
                    aria-hidden="true"
                  >
                    <span className="bp-flap bp-flap-orig">{letter}</span>
                    <span className="bp-flap bp-flap-random">{activeFlip.randomChar}</span>
                  </span>
                )}
              </span>
            );
          })}
        </h1>

        <p
          className="bp-rise bp-mono mt-6 text-sm md:text-base tracking-wide uppercase font-medium"
          style={{ animationDelay: "0.25s", color: "var(--text-dim)" }}
        >
          Break the system. Capture the flag. Make your mark.
        </p>

        {/* Body Description - Inter 400 */}
        <p
          className="bp-rise mt-6 max-w-xl text-base md:text-lg leading-relaxed font-normal"
          style={{ animationDelay: "0.35s", color: "var(--text)" }}
        >
          A two-stage cybersecurity challenge where curiosity becomes skill, and skill becomes control.
        </p>

        {/* CTA Buttons - IBM Plex Mono 600 */}
        <div
          className="bp-rise flex flex-col sm:flex-row gap-4 mt-10"
          style={{ animationDelay: "0.45s" }}
        >
          <button
            onClick={() => scrollTo("#event-heads")}
            className="bp-btn-primary rounded-sm px-7 py-3.5 inline-flex items-center justify-center gap-2 bp-mono text-sm uppercase tracking-wider font-semibold cursor-pointer"
            id="hero-register-btn"
          >
            Register Now
            <ArrowRight size={16} />
          </button>
          <button
            onClick={() => scrollTo("#rounds")}
            className="bp-btn-outline rounded-sm px-7 py-3.5 inline-flex items-center justify-center gap-2 bp-mono text-sm uppercase tracking-wider font-semibold cursor-pointer"
            id="hero-explore-btn"
          >
            Explore Rounds
          </button>
        </div>

        {/* Cyber keywords bar - IBM Plex Mono 500 */}
        <div
          className="bp-rise mt-16 flex items-center gap-6 bp-mono text-[11px] uppercase font-medium"
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
