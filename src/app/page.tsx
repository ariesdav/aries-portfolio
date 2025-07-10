import React from "react";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import ProjectsSection from "../components/ProjectsSection"; // ganti nama biar gak bentrok
import Footer from "../components/Footer";

export default function Page() {
  return (
    <div className="bg-[#111] text-white">
      <Hero />
      <main className="pt-24 px-6 md:px-16 py-12 space-y-24 scroll-smooth">
        
        {/* ABOUT */}
        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        {/* TECH STACK */}
        <section id="tech" className="scroll-mt-24">
          <TechStack />
        </section>

        {/* PROJECTS */}
        <section id="projects" className="scroll-mt-24">
          <ProjectsSection />
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24">
          <Footer />
        </section>

      </main>
    </div>
  );
}
