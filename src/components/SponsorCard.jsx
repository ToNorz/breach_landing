import React from "react";
import { Shield } from "lucide-react";

export default function SponsorCard({
  name = "Sponsor Name",
  tier,
  size = "sm",
  icon: Icon = Shield,
}) {
  const large = size === "lg";
  const displayTier = tier || (large ? "Title Sponsor" : "Partner");

  return (
    <div
      className={`bp-panel rounded-sm flex flex-col items-center justify-center gap-3 ${
        large ? "py-14" : "py-10"
      }`}
    >
      <div
        className={`rounded-sm flex items-center justify-center ${
          large ? "w-16 h-16" : "w-12 h-12"
        }`}
        style={{
          border: "1px solid var(--border-strong)",
          background: "var(--green-soft)",
        }}
      >
        <Icon size={large ? 26 : 20} style={{ color: "var(--text-faint)" }} />
      </div>
      <div className="text-center">
        <p
          className={`bp-display font-semibold ${large ? "text-base" : "text-sm"}`}
          style={{ color: "var(--text-dim)" }}
        >
          {name}
        </p>
        <p
          className="bp-mono text-[10px] uppercase tracking-widest mt-1"
          style={{ color: "var(--text-faint)" }}
        >
          {displayTier}
        </p>
      </div>
    </div>
  );
}
