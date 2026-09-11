import React from "react";

export default function RoundCard({
  index,
  title,
  status,
  statusVariant = "green",
  tagline,
  description,
  highlightText,
  icon: Icon,
}) {
  return (
    <div className="bp-panel rounded-sm p-8 md:p-10 flex flex-col h-full">
      {/* Cyberpunk corner accents */}
      <span className="bp-corner border-t border-l" style={{ top: -1, left: -1 }} />
      <span className="bp-corner border-t border-r" style={{ top: -1, right: -1 }} />
      <span className="bp-corner border-b border-l" style={{ bottom: -1, left: -1 }} />
      <span className="bp-corner border-b border-r" style={{ bottom: -1, right: -1 }} />

      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-sm flex items-center justify-center"
            style={{
              border: "1px solid var(--border-strong)",
              background: "var(--green-soft)",
            }}
          >
            {Icon && <Icon size={18} style={{ color: "var(--green)" }} />}
          </div>
          <span className="bp-mono text-xs tracking-widest font-medium" style={{ color: "var(--text-faint)" }}>
            ROUND {index}
          </span>
        </div>
        <span
          className={`bp-mono text-[10px] uppercase font-semibold px-2.5 py-1 rounded-sm ${
            statusVariant === "red" ? "bp-tag-red" : "bp-tag"
          }`}
        >
          {status}
        </span>
      </div>

      <h3 className="bp-display text-2xl md:text-3xl font-bold mb-4">{title}</h3>
      <p className="bp-mono text-sm font-medium mb-4" style={{ color: "var(--green)" }}>
        {tagline}
      </p>
      <div className="text-sm md:text-base leading-relaxed font-normal" style={{ color: "var(--text-dim)" }}>
        {typeof description === "string" && highlightText ? (
          <>
            {description.split(highlightText).map((part, i, arr) => (
              <React.Fragment key={i}>
                {part}
                {i < arr.length - 1 && (
                  <strong className="font-semibold" style={{ color: "var(--text)" }}>{highlightText}</strong>
                )}
              </React.Fragment>
            ))}
          </>
        ) : (
          description
        )}
      </div>
    </div>
  );
}
