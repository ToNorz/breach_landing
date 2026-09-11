import React from "react";
import SponsorCard from "./SponsorCard";
import { SPONSORS_DATA } from "../data/sponsors";

export default function Sponsors() {
  return (
    <section id="sponsors" className="relative px-6 py-28" style={{ background: "var(--bg)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="bp-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
            Backed By
          </p>
          <h2 className="bp-display text-3xl md:text-4xl font-semibold">Powering the Breach</h2>
        </div>

        {/* Title Sponsors (Large) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          {SPONSORS_DATA.titleSponsors.map((sponsor) => (
            <SponsorCard
              key={sponsor.id}
              name={sponsor.name}
              tier={sponsor.tier}
              size={sponsor.size}
            />
          ))}
        </div>

        {/* Partners (Standard) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {SPONSORS_DATA.partners.map((partner) => (
            <SponsorCard
              key={partner.id}
              name={partner.name}
              tier={partner.tier}
              size={partner.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
