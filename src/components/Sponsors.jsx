import React from "react";
import SponsorCard from "./SponsorCard";
import { SPONSORS_DATA } from "../data/sponsors";

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative px-6 py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="bp-mono text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "var(--text-faint)" }}>
            Backed By
          </p>
          <h2 className="bp-display text-3xl md:text-4xl font-bold mb-3">Powering the Breach</h2>
          <p className="bp-mono text-xs sm:text-sm font-medium max-w-xl mx-auto" style={{ color: "var(--text-dim)" }}>
            Supported by industry leaders and past partners championing cybersecurity innovation.
          </p>
        </div>

        {/* Title Sponsors (Large) */}
        <div className="mb-16">
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-10 sm:w-16" style={{ background: "var(--border-strong)" }} />
            <h3 className="bp-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--green)" }}>
              Title Sponsors
            </h3>
            <span className="h-px w-10 sm:w-16" style={{ background: "var(--border-strong)" }} />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 max-w-3xl mx-auto">
            {SPONSORS_DATA.titleSponsors.map((sponsor) => (
              <SponsorCard
                key={sponsor.id}
                name={sponsor.name}
                tier={sponsor.tier}
                size={sponsor.size}
                logo={sponsor.logo}
              />
            ))}
          </div>
        </div>

        {/* Previous Sponsors (Standard Grid) */}
        <div>
          <div className="flex items-center justify-center gap-3 mb-8">
            <span className="h-px w-10 sm:w-16" style={{ background: "var(--border)" }} />
            <h3 className="bp-mono text-xs uppercase tracking-widest font-semibold" style={{ color: "var(--text-dim)" }}>
              Previous Sponsors
            </h3>
            <span className="h-px w-10 sm:w-16" style={{ background: "var(--border)" }} />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
            {SPONSORS_DATA.previousSponsors.map((sponsor) => (
              <SponsorCard
                key={sponsor.id}
                name={sponsor.name}
                tier={sponsor.tier}
                size={sponsor.size}
                logo={sponsor.logo}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
