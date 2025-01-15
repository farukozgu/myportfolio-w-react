import React from "react";

function Skills({ skills }) {
  return (
    <section id="skills" className="container pt-24">
      <div>
        <h1 className="font-inter text-slate-900 text-2xl sm:text-6xl font-extrabold dark:text-white">
          Skills & Tools
        </h1>
        <p className="font-inter text-slate-900 dark:text-white py-3 font-medium text-lg max-w-2xl">
          Discover the essential tools and technologies that power my web
          development process. These are the key resources that help me create
          dynamic, responsive, and visually appealing applications.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-3 py-6">
        {skills.map((item, index) => (
          <div
            key={index}
            className="flex items-center border-2 p-3 rounded-lg border-gray-200 gap-3 transition-all hover:bg-gray-100 dark:hover:bg-gray-300 group"
          >
            <img
              src={item.skillImg}
              alt="Skill"
              className="p-3 bg-gray-300 rounded-lg"
            />
            <div className="flex flex-col items-start">
              <h1 className="font-inter font-bold text-lg group-hover:text-black dark:text-white group-hover:dark:text-black">
                {item.skill}
              </h1>
              <span className="font-inter font-medium text-base group-hover:text-black dark:text-white group-hover:dark:text-black">
                {item.info}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
