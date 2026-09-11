import React from "react";
import EventHeadCard from "./EventHeadCard";
import { EVENT_HEADS_DATA } from "../data/eventHeads";

export default function EventHeads() {
  return (
    <section id="event-heads" className="relative px-6 py-28" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <p className="bp-mono text-xs uppercase tracking-widest font-semibold mb-4" style={{ color: "var(--text-faint)" }}>
            Contacts
          </p>
          <h2 className="bp-display text-3xl md:text-4xl font-bold">The People Behind the Breach</h2>
        </div>

        {/* Event Heads Grid */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {EVENT_HEADS_DATA.map((head) => (
            <EventHeadCard
              key={head.id}
              name={head.name}
              role={head.role}
              email={head.email}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
