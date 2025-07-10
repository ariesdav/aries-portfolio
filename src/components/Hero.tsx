import React from "react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-24 bg-[#111] text-white"
    >
      <div className="space-y-6 max-w-4xl text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight space-y-1">
          <span className="block">
            Hi, I&#39;m{" "}
            <span className="relative group">
              <a href="#about" className="text-emerald-400 transition font-bold group-hover:brightness-125">
                Ariestio Dava Pratama
              </a>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-400 text-black/80 px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition duration-300 z-50 shadow-lg whitespace-nowrap">
                Learn more about me
              </span>
            </span>
            .
          </span>

          <span className="block">
             A{" "}
            <span className="relative group">
              <a href="#tech" className="text-emerald-400 transition font-bold group-hover:brightness-125">
                Data Scientist
              </a>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-400 text-black/80 px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition duration-300 z-50 shadow-lg whitespace-nowrap">
                Tools & technologies I use
              </span>
            </span>
            , Who Likes
          </span>

          <span className="block">
            Solving Problems With{" "}
            <span className="relative group">
              <a href="#projects" className="text-emerald-400 transition font-bold group-hover:brightness-125">
               Data.
              </a>
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-emerald-400 text-black/80 px-3 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition duration-300 z-50 shadow-lg whitespace-nowrap">
                Explore my work
              </span>
            </span>
          </span>
        </h1>



        <div className="mt-6">
          <a
            href="#about"
            className="text-sm uppercase tracking-wider text-emerald-400 hover:underline underline-offset-4"
          >
            Let&#39;s dive in ↓
          </a>
        </div>
      </div>
    </section>
  );
}
