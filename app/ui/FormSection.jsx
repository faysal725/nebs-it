"use client";

import React, { useState } from "react";
import FormSteps from "./FormSteps";
import InputBox from "./InputBox";
import Radio from "./Radio";
import Button from "./Button";
import { useRouter } from "next/navigation";

export default function FormSection({isServeyFinish = false}) {
    const router = useRouter()

  const [currentStep, setCurrentStep] = useState(1);

  const [homeOwner, setHomeOwner] = useState(null);
  const [electricityBill, setElectricityBill] = useState(null);
  const [creditScore, setCreditScore] = useState();
  const [name, setName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [zip, setZip] = useState();
  const [state, setState] = useState();
  const [contact, setContact] = useState();
  const [time, setTime] = useState();

  function handleSubmit() {
    console.log("Current Step:", currentStep);

    if (currentStep === 1 && homeOwner !== null) {
      stepUp();
      return;
    }

    if (currentStep === 2 && electricityBill !== null) {
      stepUp();
      return;
    }

    if (currentStep === 3 && creditScore) {
      stepUp();
      return;
    }

    if (currentStep === 4 && name && address && city && zip && state) {
      stepUp();
      return;
    }

    if (currentStep === 5 && contact && time) {
      router.push("/thank-you"); 
    }
  }

  function stepUp() {
    setCurrentStep((prev) => prev + 1);
  }

  function stepDown() {
    setCurrentStep((prev) => prev - 1);
  }

  return (
    <main className=" text-base font-semibold text-black p-8 rounded-2xl relative overflow-hidden  bg-white min-h-80">
      <p className="text-xl">Complete the steps to unlock your solar potential</p>

      <section>
        <FormSteps steps={5} current={currentStep} />
      </section>

      <section className="my-7">
        <form className="space-y-3">
          {currentStep == 1 && (
            <Radio
              label="Are you a home owner?"
              name="home_owner"
              selected={homeOwner}
              onChange={setHomeOwner}
              options={[
                { value: "true", label: "Yes" },
                { value: "false", label: "No" },
              ]}
              required={true}
            />
          )}

          {currentStep == 2 && (
            <Radio
              label="Is your monthly electricity bills over $99? "
              name="electricity_bill"
              selected={electricityBill}
              onChange={setElectricityBill}
              options={[
                { value: "true", label: "Yes" },
                { value: "false", label: "No" },
              ]}
              required={true}
            />
          )}

          {currentStep == 3 && (
            <Radio
              label="Your estimated credit score?"
              name="credit_score"
              selected={creditScore}
              onChange={setCreditScore}
              options={[
                { value: "Excellent", label: "More Than 740 (Excellent)" },
                { value: "good", label: "680-739 (Good)" },
                { value: "poor", label: "Less than 569 (Poor)" },
                { value: "none", label: "I'm not sure" },
              ]}
              required={true}
            />
          )}

          {currentStep == 4 && (
            <>
              <InputBox
                label="Your Name "
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Type your name"
                required={true}
              />

              <InputBox
                label="Address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Street Address"
                required={true}
              />
              <InputBox
                label=""
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="city"
                required={false}
              />
              <InputBox
                label=""
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                placeholder="zip"
                required={false}
              />
              <InputBox
                label=""
                value={state}
                onChange={(e) => setState(e.target.value)}
                placeholder="state"
                required={false}
              />
            </>
          )}

          {currentStep == 5 && (
            <>
              <p className="text-xl font-semibold">One last thing...</p>
              <InputBox
                label="Contact"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                placeholder="Phone number"
                required={true}
              />
              <Radio
                label="Preferred time of calling?"
                name="preferred_time"
                selected={time}
                onChange={setTime}
                options={[
                  { value: "9-11(AM)", label: "9 AM - 11 AM" },
                  { value: "6-8(PM)", label: "6 PM - 8 PM" },
                  { value: "anytime", label: "I'm available to pick anytime" },
                ]}
                required={true}
              />
            </>
          )}
        </form>

        <div className="flex justify-center gap-3 mt-8">
          {currentStep < 5 && currentStep > 1 ? (
            <Button variant="outline" onClick={() => stepDown()}>
              Back
            </Button>
          ) : (
            <></>
          )}

          {currentStep < 5 ? (
            <Button
              variant={currentStep ==1 ? "large" : "primary"}
              type="submit"
              onClick={() => handleSubmit()}
            >
              Next
            </Button>
          ) : (
            <></>
          )}

          {currentStep == 5 ? (
            <Button
              onClick={() => handleSubmit()}
              variant="primary"
              type="submit"
            >
              Submit
            </Button>
          ) : (
            <></>
          )}
        </div>
      </section>

      {isServeyFinish && (
        <section className="absolute w-full h-full top-0 right-0 bg-white p-8 space-y-6 md:space-y-4">
          <div className="border-b border-b-black py-5">
            <p className="text-base text-center">Thank you for your response </p>
          </div>
          <div className="space-y-3">
            <p className="text-xl">
              You're about to save estimated 18,000 USD.
            </p>
            <p className="text-base">
              We’ll contact with you soon with proper credentials.
            </p>
          </div>
          <div className="flex justify-center ">
            <Button
              onClick={() => router.push('/')}
              variant="primary"
              type="submit"
            >
              Back To Home
            </Button>
          </div>
        </section>
      )}
    </main>
  );
}
