import React from "react";
import { Terminal } from "lucide-react";
import { PLATFORMS_DATA, CONTACT_EMAILS, SOCIAL_LINKS } from "../data/footer";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="relative px-6 pt-20 pb-10"
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border)",
      }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-14">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Terminal size={16} style={{ color: "var(--green)" }} />
              <span className="bp-display text-base font-semibold">
                BREACH<span style={{ color: "var(--green)" }}>POINT</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "var(--text-faint)" }}>
              A national-level cybersecurity CTF. Break the system, capture the flag.
            </p>
          </div>

          {/* Col 2: Platforms */}
          <div>
            <p className="bp-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
              Platforms
            </p>
            <ul className="space-y-3 text-sm" style={{ color: "var(--text-dim)" }}>
              {PLATFORMS_DATA.map((plat) => {
                const Icon = plat.icon;
                return (
                  <li key={plat.name} className="flex items-center justify-between gap-2">
                    <span className="flex items-center gap-2">
                      <Icon size={13} /> {plat.name}
                    </span>
                    <span className="bp-mono text-[10px]" style={{ color: "var(--text-faint)" }}>
                      {plat.status}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Col 3: Contact */}
          <div>
            <p className="bp-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
              Contact
            </p>
            <ul className="space-y-3 text-sm" style={{ color: "var(--text-dim)" }}>
              {CONTACT_EMAILS.map((email) => (
                <li key={email}>
                  <a href={`mailto:${email}`} className="bp-nav-link">
                    {email}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Follow */}
          <div>
            <p className="bp-mono text-xs uppercase tracking-widest mb-4" style={{ color: "var(--text-faint)" }}>
              Follow
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.name}
                    className="w-9 h-9 rounded-sm flex items-center justify-center bp-nav-link"
                    style={{ border: "1px solid var(--border)" }}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 bp-mono text-[11px] uppercase tracking-wider"
          style={{ borderTop: "1px solid var(--border)", color: "var(--text-faint)" }}
        >
          <span>&copy; {new Date().getFullYear()} BreachPoint. All systems monitored.</span>
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--green)" }} />
            End of transmission
          </span>
        </div>
      </div>
    </footer>
  );
}
