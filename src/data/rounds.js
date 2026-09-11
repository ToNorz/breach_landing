import { Flag, Crosshair } from "lucide-react";

export const ROUNDS_DATA = [
  {
    index: "01",
    title: "Jeopardy CTF",
    status: "Status: Active",
    statusVariant: "green",
    tagline: "Recon. Exploit. Decode. Capture.",
    description:
      "A challenge-driven round covering multiple cybersecurity problem domains. Solve challenges, collect flags and climb the leaderboard.",
    icon: Flag,
  },
  {
    index: "02",
    title: "Attack & Defense",
    status: "Status: Top 10 Only",
    statusVariant: "red",
    tagline: "Defend your system. Break theirs.",
    description:
      "The Top 10 teams advance to an intense attack-and-defense battle where strategy, exploitation and defense decide the winner.",
    highlightText: "Top 10",
    icon: Crosshair,
  },
];
