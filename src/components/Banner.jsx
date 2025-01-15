import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <section id="about" className="container">
      <div className="aboutMe flex flex-col justify-between items-left">
        <span className="text-lg sm:text-xl font-inter text-slate-700 font-normal py-1 dark:text-white">
          Hey There <span className="text-3xl">👋</span> I'm
        </span>
        <h1 className="font-extrabold font-manrope text-slate-900 !leading-[1.2] text-5xl py-1 sm:text-8xl dark:text-white">
          Faruk Ozgu
        </h1>
        <p className="font-semibold font-inter text-xl sm:text-4xl py-1 text-slate-900 dark:text-white">
          <span className="text-blue-600">a Passionate Front</span>end Developer
        </p>
        <p className="font-normal text-base sm:text-2xl text-slate-700 py-1 font-inter max-w-3xl dark:text-white">
          I'm a frontend developer based in Italy, I'll help you build beautiful
          websites your users will love.
        </p>
        <a
          href="#projects"
          className="transition-all  dark:hover:bg-blue-600 dark:hover:text-white dark:border-white w-full max-w-48 rounded-md text-center text-lg font-inter font-medium bg-blue-500 dark:bg-white text-white dark:text-black hover:text-white  hover:bg-blue-600 py-2 px-4 my-6"
        >
          Explore My Work
        </a>
      </div>
    </section>
  );
}

export default Banner;
