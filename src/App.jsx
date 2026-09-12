import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Rounds from "./components/Rounds";
import Sponsors from "./components/Sponsors";
import EventHeads from "./components/EventHeads";
import Footer from "./components/Footer";
//
export default function App() {
  return (
    <div className="bp-root bp-scroll min-h-screen">
      <Navbar />
      <Hero />
      <Rounds />
      <Sponsors />
      <EventHeads />
      <Footer />
    </div>
  );
}
