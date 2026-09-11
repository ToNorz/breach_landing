import React from "react";
import RoundCard from "./RoundCard";
import { ROUNDS_DATA } from "../data/rounds";

export default function Rounds() {
  return (
    <section id="rounds" className="relative px-6 py-28" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="bp-mono text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "var(--text-faint)" }}>
            The Format
          </p>
          <h2 className="bp-display text-3xl md:text-4xl font-bold">
            Two rounds. One objective. Prove you belong.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {ROUNDS_DATA.map((round) => (
            <RoundCard
              key={round.index}
              index={round.index}
              title={round.title}
              status={round.status}
              statusVariant={round.statusVariant}
              tagline={round.tagline}
              description={round.description}
              highlightText={round.highlightText}
              icon={round.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
