import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Calendar, Trophy } from "lucide-react";
import AxiosLogo from "./AxiosLogo";

const TITLE_LETTERS = "BREACHPOINT".split("");
const RANDOM_CHARS = ["0", "1", "4", "7", "A", "X", "#", "8", "9", "Z", "_"];

const PRIZE_QUOTES = [
  "Bounties for the bold. High stakes.",
  "Crack the challenges. Claim the spoils.",
  "Elite skills earn real bounties.",
];

export default function Hero() {
  const [activeFlip, setActiveFlip] = useState(null);
  const timerRef = useRef(null);

  // Prize counter animation state
  const [prizeCount, setPrizeCount] = useState(0);
  const [prizeQuoteIndex, setPrizeQuoteIndex] = useState(0);
  const [prizeQuoteFade, setPrizeQuoteFade] = useState(true);

  // Fast counter animation: counts up to 17,500, holds for 2.5s, then loops
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPrizeCount(17500);
      return;
    }

    let rafId;
    let timeoutId;
    let isCancelled = false;

    const runCounterCycle = () => {
      const startTime = performance.now();
      const duration = 850; // fast 850ms count up
      const target = 17500;

      const tick = (now) => {
        if (isCancelled) return;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Fast ease-out curve
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const currentVal = Math.round(easeOut * target);

        setPrizeCount(currentVal);

        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          // Snap to exact 17,500 and hold for 2.5 seconds
          setPrizeCount(17500);
          timeoutId = setTimeout(() => {
            if (isCancelled) return;
            runCounterCycle();
          }, 2500);
        }
      };

      rafId = requestAnimationFrame(tick);
    };

    runCounterCycle();

    return () => {
      isCancelled = true;
      if (rafId) cancelAnimationFrame(rafId);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  // Prize quotes rotation
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const interval = setInterval(() => {
      setPrizeQuoteFade(false);
      setTimeout(() => {
        setPrizeQuoteIndex((prev) => (prev + 1) % PRIZE_QUOTES.length);
        setPrizeQuoteFade(true);
      }, 300);
    }, 4500);
    return () => clearInterval(interval);
  }, []);


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

        {/* Event Date - Next Line, Clean Typography (No Card Theme) */}
        <div
          className="bp-rise bp-mono mt-4 sm:mt-5 text-xs sm:text-sm md:text-base uppercase tracking-[0.22em] font-semibold flex items-center justify-center gap-2.5"
          style={{ animationDelay: "0.22s", color: "var(--green)" }}
        >
          <Calendar size={15} className="shrink-0" />
          <span>SEPTEMBER 25, 26</span>
        </div>

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

        {/* Prize Pool Display - Enlarged with Fast Looping Counter Animation & Quote */}
        <div
          className="bp-rise mt-12 sm:mt-14 flex flex-col items-center gap-3.5 text-center w-full px-2"
          style={{ animationDelay: "0.55s" }}
        >
          <div
            className="inline-flex items-center gap-3.5 sm:gap-4 px-6 sm:px-8 py-3 sm:py-4 rounded-sm transition-all duration-300 hover:border-[var(--green)] max-w-full"
            style={{
              border: "1px solid rgba(52, 229, 164, 0.4)",
              background: "rgba(10, 15, 20, 0.85)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 0 35px -5px rgba(52, 229, 164, 0.25), inset 0 0 20px -5px rgba(52, 229, 164, 0.06)",
            }}
          >
            <div
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-sm flex items-center justify-center shrink-0"
              style={{
                background: "var(--green-soft)",
                border: "1px solid var(--border-strong)",
              }}
            >
              <Trophy size={18} className="sm:w-[22px] sm:h-[22px]" style={{ color: "var(--green)" }} />
            </div>

            <div className="flex items-baseline gap-2 sm:gap-3">
              <span
                className="bp-mono text-xs sm:text-sm uppercase tracking-wider sm:tracking-widest font-semibold"
                style={{ color: "var(--text-faint)" }}
              >
                PRIZE POOL
              </span>
              <span
                className="bp-display text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight tabular-nums"
                style={{
                  color: "var(--green)",
                  textShadow: "0 0 20px rgba(52, 229, 164, 0.45)",
                }}
              >
                ₹{prizeCount.toLocaleString()}
              </span>
            </div>
          </div>

          {/* Cyber Quote for Prize Pool - Guaranteed Single Line with Fixed Height */}
          <div className="h-6 sm:h-7 flex items-center justify-center overflow-hidden w-full max-w-lg mx-auto px-2">
            <p
              className={`bp-mono text-[10px] sm:text-xs md:text-sm tracking-wide uppercase font-medium whitespace-nowrap transition-opacity duration-300 ${
                prizeQuoteFade ? "opacity-100" : "opacity-0"
              }`}
              style={{ color: "var(--text-dim)" }}
            >
              &apos;{PRIZE_QUOTES[prizeQuoteIndex]}&apos;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
