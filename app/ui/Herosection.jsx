import React from "react";
import herosectionBg from "@/assets/herosection/herosection-bg.jpg";

export default function Herosection() {
  return (
    <main className="min-h-screen  p-2 relative z-0 flex justify-center items-center">
      <span className="absolute top-0 right-0 w-full h-full bg-black/55 z-10"></span>

      <section className="relative z-20 max-w-7xl mx-auto  text-white grid grid-cols-1 md:grid-cols-2 gap-4">
        <section className="flex flex-col gap-5 mt-20 md:mt-0 md:justify-around">
          <div>
            <h2 className="text-3xl md:text-5xl font-medium ">
              Power Your Home. Empower Your Future. Switch to Solar Today!
            </h2>
          </div>
          <ul className=" text-sm md:text-lg list-disc space-y-1">
            <li>Experience Lower Electricity Bills with Solar Power</li>
            <li>Clean Energy Independence. Invest in a Greener Future</li>
            <li>
              Transform Your Roof into a Revenue Stream. Monetize Surplus Solar
              Energy Through Grid Export
            </li>
          </ul>
        </section>
        <section className="mt-10 md:mt-0 h-96  bg-white">component</section>
      </section>
    </main>
  );
}
