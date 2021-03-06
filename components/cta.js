import React from "react";
import Container from "./container";

function handleContactClick() {
  document.querySelector("#headlessui-disclosure-button-4").click()
}

export default function Cta() {
  return (
    <Container>
      <div className="mt-12 mb-6 flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-gray-100 dark:bg-trueGray-800 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-black dark:text-white text-2xl font-medium lg:text-3xl">
            Invest in your business today!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            No charge for initial consultation
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="#contact"
            className="inline-block py-3 mx-auto text-lg font-medium text-center bg-red-600 hover:bg-red-500  text-white rounded-md px-7 lg:px-10 lg:py-5 "
            onClick={handleContactClick}>
            Get Started Now
          </a>
        </div>
      </div>
    </Container>
  );
}