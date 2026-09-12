import React from "react";
import { Shield, Lock } from "lucide-react";

export default function SponsorCard({
  name = "Sponsor Name",
  tier,
  size = "sm",
  logo,
  icon: Icon = Shield,
  masked = false,
}) {
  const large = size === "lg";
  const displayTier = tier || (large ? "Title Sponsor" : "Previous Sponsor");

  if (masked) {
    return (
      <div
        className={`group bp-panel rounded-sm flex flex-col items-center justify-between text-center transition-all duration-300 relative overflow-hidden ${
          large ? "p-6 sm:p-8" : "p-4 sm:p-5"
        }`}
        style={{ borderColor: "rgba(34, 197, 94, 0.2)" }}
      >
        {/* Cyberpunk corner accents */}
        <span className="bp-corner border-t border-l" style={{ top: -1, left: -1 }} />
        <span className="bp-corner border-b border-r" style={{ bottom: -1, right: -1 }} />

        {/* Masked Logo container */}
        <div
          className={`w-full flex flex-col items-center justify-center rounded-sm bg-white/[0.01] border border-dashed border-white/[0.08] transition-all duration-300 group-hover:border-[var(--green)]/30 group-hover:bg-white/[0.03] ${
            large ? "h-36 sm:h-40 p-6 mb-5" : "h-24 sm:h-28 p-3.5 mb-3"
          }`}
        >
          <div
            className={`rounded-full flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-110 ${
              large ? "w-12 h-12" : "w-9 h-9"
            }`}
            style={{
              border: "1px solid var(--border-strong)",
              background: "var(--green-soft)",
            }}
          >
            <Lock size={large ? 20 : 15} style={{ color: "var(--green)" }} />
          </div>
          <span className="bp-mono text-[11px] sm:text-xs uppercase tracking-widest font-semibold text-emerald-400">
            [ CLASSIFIED ]
          </span>
        </div>

        {/* Sponsor info */}
        <div className="w-full text-center">
          <h3
            className={`bp-mono font-bold tracking-wider text-slate-300 ${
              large ? "text-base sm:text-lg" : "text-xs sm:text-sm"
            }`}
          >
            TO BE REVEALED
          </h3>
          <p
            className={`bp-mono uppercase tracking-widest mt-1.5 font-medium ${
              large
                ? "text-xs text-emerald-400 inline-block bp-tag px-3 py-1 rounded-xs"
                : "text-[10px] text-slate-500"
            }`}
          >
            {displayTier}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`group bp-panel rounded-sm flex flex-col items-center justify-between text-center transition-all duration-300 relative overflow-hidden ${
        large ? "p-6 sm:p-8" : "p-4 sm:p-5"
      }`}
    >
      {/* Cyberpunk corner accents */}
      <span className="bp-corner border-t border-l" style={{ top: -1, left: -1 }} />
      <span className="bp-corner border-b border-r" style={{ bottom: -1, right: -1 }} />

      {/* Logo container without harsh white backgrounds */}
      <div
        className={`w-full flex items-center justify-center rounded-sm bg-white/[0.02] border border-white/[0.06] transition-all duration-300 group-hover:bg-white/[0.06] group-hover:border-[var(--green)]/30 ${
          large ? "h-36 sm:h-40 p-6 mb-5" : "h-24 sm:h-28 p-3.5 mb-3"
        }`}
      >
        {logo ? (
          <img
            src={logo}
            alt={name}
            className="max-h-full max-w-[85%] object-contain filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        ) : (
          <div
            className={`rounded-sm flex items-center justify-center ${
              large ? "w-16 h-16" : "w-12 h-12"
            }`}
            style={{
              border: "1px solid var(--border-strong)",
              background: "var(--green-soft)",
            }}
          >
            <Icon size={large ? 28 : 20} style={{ color: "var(--text-faint)" }} />
          </div>
        )}
      </div>

      {/* Sponsor info */}
      <div className="w-full text-center">
        <h3
          className={`bp-display font-bold transition-colors duration-200 ${
            large ? "text-lg sm:text-xl text-white" : "text-xs sm:text-sm text-slate-200 truncate group-hover:text-white"
          }`}
          title={name}
        >
          {name}
        </h3>
        <p
          className={`bp-mono uppercase tracking-widest mt-1.5 font-medium ${
            large
              ? "text-xs text-emerald-400 inline-block bp-tag px-3 py-1 rounded-xs"
              : "text-[10px] text-slate-500"
          }`}
        >
          {displayTier}
        </p>
      </div>
    </div>
  );
}
