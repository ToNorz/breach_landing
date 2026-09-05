import React, { useState } from "react";
import {
  Bell,
  Terminal,
  Shield,
  Trophy,
  LayoutGrid,
  Calendar,
  ChevronRight,
  X,
  Mail,
  Image as ImageIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="min-h-screen bg-cyber-900Base text-gray-300 font-sans selection:bg-cyber-green selection:text-black">
      {/* Navigation */}
      <nav className="border-b border-gray-800 bg-black/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Terminal className="w-8 h-8 text-cyber-green" />
              <span className="font-mono text-xl font-bold tracking-widest text-white">
                BREACH<span className="text-cyber-green">POINT</span>
              </span>
            </div>

            <div className="flex items-center space-x-6">
              <a
                href="#rounds"
                className="hover:text-cyber-green transition-colors text-sm font-mono uppercase"
              >
                Rounds
              </a>
              <a
                href="#stats"
                className="hover:text-cyber-green transition-colors text-sm font-mono uppercase"
              >
                Gallery
              </a>
              <a
                href="#sponsors"
                className="hover:text-cyber-green transition-colors text-sm font-mono uppercase"
              >
                Sponsors
              </a>

              {/* Notification Icon */}
              <div className="relative">
                <button
                  onClick={() => setShowNotification(!showNotification)}
                  className="p-2 rounded-full hover:bg-gray-800 transition-colors relative group focus:outline-none"
                  aria-label="Notifications"
                >
                  <Bell className="w-5 h-5 text-gray-400 group-hover:text-cyber-cyanglow transition-colors" />
                  <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                </button>

                {/* Pop-up Notification */}
                <AnimatePresence>
                  {showNotification && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="absolute right-0 mt-2 w-80 bg-gray-900 border border-gray-800 rounded-lg shadow-2xl z-50 overflow-hidden"
                    >
                      <div className="p-4 border-b border-gray-800 flex justify-between items-center bg-black/40">
                        <span className="font-mono text-sm text-cyber-cyanglow">
                          Incoming Transmission
                        </span>
                        <button
                          onClick={() => setShowNotification(false)}
                          className="text-gray-500 hover:text-white"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="p-5 font-mono">
                        <p className="text-xs text-gray-400 mb-3 uppercase tracking-wider">
                          Intercepted Flag
                        </p>
                        <div className="bg-black/50 p-3 rounded border border-gray-800 select-all font-mono text-sm break-all text-cyber-green mb-3">
                          QnJlYWNoUG9pbnR7RW5jMGQ1ZHg2NH0=
                        </div>
                        <p className="text-sm text-gray-300">
                          Submit this string on the registration portal to gain
                          10 initial points.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-800/50 rounded-full px-4 py-1.5 mb-8 border border-gray-700">
            <span className="flex h-2 w-2 rounded-full bg-cyber-green animate-pulse"></span>
            <span className="text-sm font-mono text-gray-300">
              System Online // Awaiting Competitors
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            <span
              className="block text-white mb-2 glitch"
              data-text="BREACH POINT"
            >
              BREACH POINT
            </span>
            <span className="block text-xl md:text-2xl font-mono text-cyber-cyanglow mt-6 font-normal">
              Axios '25 Flagship Capture The Flag Event
            </span>
          </h1>

          <p className="mt-8 max-w-2xl mx-auto text-xl text-gray-400">
            The ultimate battleground for elite hackers. Infiltrate, defend, and
            dominate.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-6 font-mono">
            <div className="flex items-center space-x-2 text-gray-300">
              <Calendar className="w-5 h-5 text-cyber-pinkglow" />
              <span>TBA</span>
            </div>
            <div className="text-gray-500">|</div>
            <div className="flex items-center space-x-2 text-gray-300">
              <Trophy className="w-5 h-5 text-yellow-500" />
              <span>₹25,000 Prize Pool</span>
            </div>
            <div className="text-gray-500">|</div>
            <div className="flex items-center space-x-2 text-gray-300">
              <span className="px-2 py-0.5 bg-green-500/10 text-cyber-green border border-green-500/20 rounded text-sm uppercase">
                No Registration Fee
              </span>
            </div>
          </div>

          <div className="mt-12 flex justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 bg-cyber-green hover:bg-green-400 text-black font-bold rounded font-mono transition-transform hover:scale-105"
            >
              Register on Unstop
              <ChevronRight className="w-5 h-5 ml-2" />
            </a>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 bg-transparent border border-gray-700 hover:border-gray-500 text-white font-mono rounded transition-colors hover:bg-gray-800"
            >
              CTFTime Link
            </a>
          </div>
        </div>
      </section>

      {/* Rounds Section */}
      <section
        id="rounds"
        className="py-24 bg-black/40 border-y border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white font-mono mb-4">
              Event Structure
            </h2>
            <p className="text-gray-400">
              2 Rounds • 2 Days • Immersive Narrative
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Round 1 */}
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl relative group hover:border-cyber-green/50 transition-colors">
              <div className="absolute top-0 right-0 p-4">
                <span className="text-xs font-mono text-gray-500 uppercase">
                  Day 1
                </span>
              </div>
              <Terminal className="w-12 h-12 text-cyber-green mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                Round 1: Jeopardy CTF
              </h3>
              <p className="text-gray-400 mb-6 font-mono text-sm italic">
                "Uncover why three long-dead systems just woke up to broadcast a
                terrifying warning..."
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-cyber-green mr-2 mt-0.5 shrink-0" />{" "}
                  Web Exploitation
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-cyber-green mr-2 mt-0.5 shrink-0" />{" "}
                  Reverse Engineering & Pwn
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-cyber-green mr-2 mt-0.5 shrink-0" />{" "}
                  Digital Forensics & Crypto
                </li>
              </ul>
            </div>

            {/* Round 2 */}
            <div className="bg-gray-900 border border-gray-800 p-8 rounded-xl relative group hover:border-cyber-pinkglow/50 transition-colors">
              <div className="absolute top-0 right-0 p-4">
                <span className="text-xs font-mono text-cyber-pinkglow font-bold uppercase">
                  Top 10 Teams • Day 2
                </span>
              </div>
              <Shield className="w-12 h-12 text-cyber-pinkglow mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2 font-mono">
                Round 2: Attack & Defence
              </h3>
              <p className="text-gray-400 mb-6 font-mono text-sm italic">
                "Infiltrate rival nodes while shielding your own
                infrastructure."
              </p>
              <ul className="space-y-3 text-sm text-gray-400">
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-cyber-pinkglow mr-2 mt-0.5 shrink-0" />{" "}
                  Secure your assigned VM
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-cyber-pinkglow mr-2 mt-0.5 shrink-0" />{" "}
                  Patch vulnerabilities
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-4 h-4 text-cyber-pinkglow mr-2 mt-0.5 shrink-0" />{" "}
                  Write exploits for rival teams
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery & Stats */}
      <section id="stats" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white font-mono mb-4">
              BreachPoint Legacy
            </h2>
            <p className="text-gray-400">Axios '24 & '25 Statistics</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-gray-800/30 p-6 rounded-lg text-center border border-gray-800">
              <div className="text-4xl font-mono font-bold text-white mb-2">
                500+
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                Participants
              </div>
            </div>
            <div className="bg-gray-800/30 p-6 rounded-lg text-center border border-gray-800">
              <div className="text-4xl font-mono font-bold text-white mb-2">
                50+
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                Challenges
              </div>
            </div>
            <div className="bg-gray-800/30 p-6 rounded-lg text-center border border-gray-800">
              <div className="text-4xl font-mono font-bold text-white mb-2">
                48h
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                Uptime
              </div>
            </div>
            <div className="bg-gray-800/30 p-6 rounded-lg text-center border border-gray-800">
              <div className="text-4xl font-mono font-bold text-white mb-2">
                ₹10K+
              </div>
              <div className="text-sm text-gray-400 uppercase tracking-wider">
                Bounties
              </div>
            </div>
          </div>

          {/* Placeholder Gallery */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="aspect-video bg-gray-900 border border-gray-800 rounded-lg flex flex-col items-center justify-center group overflow-hidden relative"
              >
                <div className="absolute inset-0 bg-gray-800 animate-pulse opacity-50"></div>
                <ImageIcon className="w-10 h-10 text-gray-700 z-10" />
                <span className="text-sm text-gray-500 font-mono mt-2 z-10">
                  Image Placeholder {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section
        id="sponsors"
        className="py-24 bg-cyber-cyanglow/5 border-y border-gray-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white font-mono mb-4">
            Sponsored By
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Join the ranks of top cybersecurity organizations. We are actively
            looking for companies to partner with for BreachPoint Axios '25.
          </p>

          <div className="flex flex-wrap justify-center gap-8 items-center opacity-70 grayscale hover:grayscale-0 transition-all mb-12">
            {/* Sponsor Placeholders */}
            <div className="w-48 h-20 bg-gray-900 border border-gray-800 rounded flex items-center justify-center font-mono text-gray-500">
              Logo 1
            </div>
            <div className="w-48 h-20 bg-gray-900 border border-gray-800 rounded flex items-center justify-center font-mono text-gray-500">
              Logo 2
            </div>
            <div className="w-48 h-20 bg-gray-900 border border-gray-800 rounded flex items-center justify-center font-mono text-gray-500">
              Logo 3
            </div>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center px-6 py-2 border border-cyber-cyanglow text-cyber-cyanglow hover:bg-cyber-cyanglow hover:text-black font-mono rounded transition-colors uppercase text-sm tracking-wider"
          >
            Call for Sponsors
          </a>
        </div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="bg-black py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <Terminal className="w-6 h-6 text-cyber-green" />
              <span className="font-mono text-xl font-bold text-white">
                BREACH<span className="text-cyber-green">POINT</span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-sm">
              The premier cybersecurity event at Axios. For queries regarding
              the CTF, rules, or sponsorship opportunities, reach out to the
              event heads.
            </p>
          </div>

          <div className="space-y-8">
            <h4 className="text-white font-mono uppercase tracking-wider text-sm border-b border-gray-800 pb-2">
              Event Heads
            </h4>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="font-bold text-white">Aditya Hariharan</p>
                <div className="flex items-center space-x-2 mt-2 text-gray-400 hover:text-cyber-green transition-colors">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:22pc04@psgtech.ac.in"
                    className="text-sm font-mono"
                  >
                    22pc04@psgtech.ac.in
                  </a>
                </div>
              </div>
              <div>
                <p className="font-bold text-white">Saivenketraj K.S</p>
                <div className="flex items-center space-x-2 mt-2 text-gray-400 hover:text-cyber-green transition-colors">
                  <Mail className="w-4 h-4" />
                  <a
                    href="mailto:22pc28@psgtech.ac.in"
                    className="text-sm font-mono"
                  >
                    22pc28@psgtech.ac.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-gray-900 text-center text-sm text-gray-600 font-mono">
          <p>© 2024-2025 Breach Point. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
