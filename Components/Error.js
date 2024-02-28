import React from "react";

import Logo from "./alone-img.jpg";

const Error = () => {
  return (
    <>
      <div class="relative h-screen overflow-hidden bg-indigo-900">
        <img src={Logo} class="absolute object-cover w-full h-full" />
        <div class="absolute inset-0 bg-black opacity-25"></div>
        <div class="container relative z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
          <div class="relative z-10 flex flex-col items-center w-full font-mono">
            <h1 class="mt-4 text-5xl font-extrabold leading-tight text-center text-white">
              You&#x27;re alone here
            </h1>
            <p class="font-extrabold text-white text-8xl my-4 ">404</p>
            <button className="middle none center rounded-lg m-1 bg-yellow-500 py-2 px-2 font-sans text-xs font-bold uppercase text-white shadow-md shadow-yellow-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
              <a href="/">
                <li className="px-4">Lets Get Back to Home</li>
              </a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
