import React from "react";
import { Mail } from "lucide-react";

export default function EventHeadCard({ name, role, email }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");

  return (
    <div className="bp-panel rounded-sm p-8 md:p-10 flex flex-col items-center text-center">
      {/* Corner accents */}
      <span className="bp-corner border-t border-l" style={{ top: -1, left: -1 }} />
      <span className="bp-corner border-b border-r" style={{ bottom: -1, right: -1 }} />

      <div
        className="w-20 h-20 rounded-full flex items-center justify-center bp-display text-xl font-semibold mb-5"
        style={{
          border: "1px solid var(--border-strong)",
          background: "var(--green-soft)",
          color: "var(--green)",
        }}
      >
        {initials}
      </div>
      <h3 className="bp-display text-lg font-semibold">{name}</h3>
      <p className="bp-mono text-xs uppercase tracking-widest mt-1.5" style={{ color: "var(--text-faint)" }}>
        {role}
      </p>
      <a
        href={`mailto:${email}`}
        className="bp-nav-link bp-mono text-sm mt-4 inline-flex items-center gap-2"
        style={{ color: "var(--text-dim)" }}
      >
        <Mail size={14} />
        {email}
      </a>
    </div>
  );
}
