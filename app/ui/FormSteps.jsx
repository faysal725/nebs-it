import React, { useEffect, useMemo, useState } from "react";

export default function FormSteps({ steps = 1, current = 4 }) {

  const allSteps = useMemo(() => {
    return Array.from({ length: steps }, (_, i) => i + 1);
  }, [steps]);

  return (
    <ul className="text-xs flex justify-between items-center my-2 ">
      {allSteps.map((step, index) => (
        <>
          <li key={index} className="flex flex-col justify-center items-center">
            <div
              className={`rounded-full h-7 w-7 border  flex justify-center  items-center ${
                current == step && "border-2 border-teal-500"
              }
            ${step > current && "border-1 border-black"}
            ${step < current && "border-indigo-500"}
            `}
            >
              {step}
            </div>

            <p
              className={`text-[10px]  text-start             ${
                step >= current ? "text-black" : "text-indigo-500"
              } `}
            >
              {step == allSteps.length ? "Last Page" : "Next"}
            </p>
          </li>

          {step < allSteps.length && (
            <li className="flex flex-col justify-start h-7">
              <span
                className={`h-[1px]  block bg-black mt-2 ${
                  step == current ? "w-12" : "w-7"
                } ${step < current && "hidden"}`}
              ></span>
            </li>
          )}
        </>
      ))}
    </ul>
  );
}
