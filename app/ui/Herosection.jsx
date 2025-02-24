import React from "react";
import herosectionBg from "@/assets/herosection/herosection-bg.jpg";
import FormSection from "./FormSection";

export default function Herosection({ isServeyFinish = false }) {
  return (
    <main className="min-h-screen   relative z-0 flex justify-center items-center -mt-28">
      <section className="relative z-20 max-w-7xl mx-auto  text-white grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="flex flex-col gap-5 mt-28 md:mt-0  md:justify-around">
          <div>
            <h2 className="text-3xl lg:text-6xl font-medium ">
              Power Your Home. Empower Your Future. Switch to Solar Today!
            </h2>
          </div>
          <ul className=" text-sm lg:text-lg list-disc space-y-1">
            <li>Experience Lower Electricity Bills with Solar Power</li>
            <li>Clean Energy Independence. Invest in a Greener Future</li>
            <li>
              Transform Your Roof into a Revenue Stream. Monetize Surplus Solar
              Energy Through Grid Export
            </li>
          </ul>
        </div>
        <div className="  lg:flex lg:justify-end ">
          <FormSection isServeyFinish={isServeyFinish} />
        </div>
      </section>
    </main>
  );
}
