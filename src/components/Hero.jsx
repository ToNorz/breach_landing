import React, { useState, useEffect, useRef } from "react";
import { ArrowRight, Calendar, Trophy } from "lucide-react";
import AxiosLogo from "./AxiosLogo";

const TITLE_LETTERS = "BREACHPOINT".split("");
const RANDOM_CHARS = ["0", "1", "4", "7", "A", "X", "#", "8", "9", "Z", "_"];

const DATE_QUOTES = [
  "Synchronize clocks. Lock your timeline.",
  "Calibrate your rigs. Save the date.",
  "Prime your terminal. The grid activates.",
];

const PRIZE_QUOTES = [
  "Bounties for the bold. High stakes.",
  "Crack the challenges. Claim the spoils.",
  "Elite skills earn real bounties.",
];

export default function Hero() {
  const [activeFlip, setActiveFlip] = useState(null);
  const timerRef = useRef(null);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [quoteFade, setQuoteFade] = useState(true);

  // Prize counter animation state
  const [prizeCount, setPrizeCount] = useState(0);
  const [prizeQuoteIndex, setPrizeQuoteIndex] = useState(0);
  const [prizeQuoteFade, setPrizeQuoteFade] = useState(true);

  // Fast counter animation: counts up to 25,000, holds for 2.5s, then loops
  useEffect(() => {
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPrizeCount(25000);
      return;
    }

    let rafId;
    let timeoutId;
    let isCancelled = false;

    const runCounterCycle = () => {
      const startTime = performance.now();
      const duration = 850; // fast 850ms count up
      const target = 25000;

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
          // Snap to exact 25,000 and hold for 2.5 seconds
          setPrizeCount(25000);
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
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const interval = setInterval(() => {
      setQuoteFade(false);
      setTimeout(() => {
        setQuoteIndex((prev) => (prev + 1) % DATE_QUOTES.length);
        setQuoteFade(true);
      }, 300);
    }, 4200);
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

        {/* Event Dates, Prize Pool & Quotes */}
        <div
          className="bp-rise mt-10 sm:mt-12 flex flex-col items-center gap-5 sm:gap-6 text-center w-full px-2"
          style={{ animationDelay: "0.55s" }}
        >
          {/* Section 1: Dates & Quote */}
          <div className="flex flex-col items-center gap-2 w-full">
            <div
              className="inline-flex items-center gap-2 sm:gap-2.5 px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-sm transition-all duration-300 hover:border-[var(--green)] max-w-full"
              style={{
                border: "1px solid var(--border-strong)",
                background: "rgba(10, 15, 20, 0.75)",
                backdropFilter: "blur(8px)",
                boxShadow: "0 0 20px -5px rgba(52, 229, 164, 0.12)",
              }}
            >
              <Calendar size={14} className="shrink-0 sm:w-[15px] sm:h-[15px]" style={{ color: "var(--green)" }} />
              <span
                className="bp-mono text-[11px] sm:text-xs md:text-sm uppercase tracking-wider sm:tracking-widest font-semibold"
                style={{ color: "var(--green)" }}
              >
                SEPTEMBER 25, 26
              </span>
            </div>

            {/* Cyber Quote for Dates - Mobile Responsive Single Line with Fixed Height */}
            <div className="h-6 flex items-center justify-center overflow-hidden w-full max-w-lg mx-auto px-2">
              <p
                className={`bp-mono text-[10px] sm:text-xs md:text-sm tracking-wide uppercase font-medium whitespace-nowrap transition-opacity duration-300 ${
                  quoteFade ? "opacity-100" : "opacity-0"
                }`}
                style={{ color: "var(--text-dim)" }}
              >
                &apos;{DATE_QUOTES[quoteIndex]}&apos;
              </p>
            </div>
          </div>

          {/* Section 2: Prize Pool with Fast Counter Animation & Quote */}
          <div className="flex flex-col items-center gap-2 w-full">
            <div
              className="inline-flex items-center gap-2.5 sm:gap-3 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-sm transition-all duration-300 hover:border-[var(--green)] max-w-full"
              style={{
                border: "1px solid var(--border-strong)",
                background: "rgba(10, 15, 20, 0.8)",
                backdropFilter: "blur(10px)",
                boxShadow: "0 0 25px -5px rgba(52, 229, 164, 0.16)",
              }}
            >
              <div
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-sm flex items-center justify-center shrink-0"
                style={{
                  background: "var(--green-soft)",
                  border: "1px solid var(--border-strong)",
                }}
              >
                <Trophy size={13} className="sm:w-[15px] sm:h-[15px]" style={{ color: "var(--green)" }} />
              </div>

              <div className="flex items-baseline gap-1.5 sm:gap-2">
                <span
                  className="bp-mono text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest font-semibold"
                  style={{ color: "var(--text-faint)" }}
                >
                  PRIZE POOL
                </span>
                <span
                  className="bp-display text-lg sm:text-xl md:text-2xl font-extrabold tracking-tight tabular-nums"
                  style={{
                    color: "var(--green)",
                    textShadow: "0 0 15px rgba(52, 229, 164, 0.35)",
                  }}
                >
                  ₹{prizeCount.toLocaleString()}
                </span>
              </div>
            </div>

            {/* Cyber Quote for Prize Pool - Mobile Responsive Single Line with Fixed Height */}
            <div className="h-6 flex items-center justify-center overflow-hidden w-full max-w-lg mx-auto px-2">
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
      </div>
    </section>
  );
}
