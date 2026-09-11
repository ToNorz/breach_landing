import React from "react";
import { Users, ArrowRight } from "lucide-react";
import EventHeadCard from "./EventHeadCard";
import { EVENT_HEADS_DATA, PARTNERSHIP_INFO } from "../data/eventHeads";

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
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-14">
          {EVENT_HEADS_DATA.map((head) => (
            <EventHeadCard
              key={head.id}
              name={head.name}
              role={head.role}
              email={head.email}
            />
          ))}
        </div>

        {/* Partnership Callout Banner */}
        <div className="bp-panel rounded-sm px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-sm flex items-center justify-center shrink-0"
              style={{
                border: "1px solid var(--border-strong)",
                background: "var(--green-soft)",
              }}
            >
              <Users size={18} style={{ color: "var(--green)" }} />
            </div>
            <p className="text-base md:text-lg font-normal" style={{ color: "var(--text)" }}>
              {PARTNERSHIP_INFO.message}
            </p>
          </div>
          <a
            href={`mailto:${PARTNERSHIP_INFO.contactEmail}`}
            className="bp-btn-primary rounded-sm px-6 py-3 inline-flex items-center gap-2 bp-mono text-xs uppercase tracking-wider font-semibold shrink-0"
          >
            {PARTNERSHIP_INFO.buttonText}
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
