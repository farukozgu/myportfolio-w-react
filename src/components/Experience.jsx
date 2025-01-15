import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [selectedCompany, setSelectedCompany] = useState("Niceye Group");

  const experiences = {
    "Niceye Group": {
      title: "Frontend Developer @ Niceye Group",
      date: "March 2022 - Present",
      points: [
        "Designed and developed websites for prestigious clients, including Pfizer, AstraZeneca, GSK, Vodafone, and Peugeot.",
        "Specialized in the development of streaming sites, ensuring robust performance and engaging user interfaces.",
        "Utilized tools such as HTML, CSS, Bootstrap, JavaScript, jQuery, React, Tailwind, and SASS to create dynamic, visually appealing web pages.",
        "Integrated version control systems like Git to manage and streamline development workflows.",
        "Maintained strong client communication to meet project specifications and deadlines.",
      ],
    },
    Pfizer: {
      title: "Frontend Developer @ Pfizer",
      date: "September 2022 - Present",
      points: [
        "Affiliated service within the NicEye Group.",
        "Collaborate with cross-functional teams to develop and maintain web applications for internal and external use.",
        "Develop and manage streaming sites to ensure seamless functionality and user experience.",
        "Implement responsive and user-friendly designs using modern front-end frameworks and libraries.",
        "Ensure the functionality and performance of web solutions across various devices and browsers.",
      ],
    },
  };

  const variants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <section id="experience" className="pt-24 pb-16 md:pb-0">
      <div className="container">
        <h1 className="font-inter text-slate-900 text-2xl sm:text-6xl font-extrabold dark:text-white">
          Experience
        </h1>
        <div className="mx-auto py-8">
          <div className="flex space-x-4">
            {Object.keys(experiences).map((company) => (
              <button
                key={company}
                onClick={() => setSelectedCompany(company)}
                className={`py-2 px-4 text-base sm:text-lg min-w-36 font-inter rounded-md ${
                  selectedCompany === company
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-800"
                }`}
              >
                {company}
              </button>
            ))}
          </div>

          <div className="mt-6 min-h-[400px] sm:min-h-[300px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedCompany}
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0"
              >
                <h3 className="text-xl sm:text-2xl font-bold font-inter text-purple-600">
                  {experiences[selectedCompany].title}
                </h3>
                <p className="text-gray-600 font-inter text-base sm:text-lg dark:text-white">
                  {experiences[selectedCompany].date}
                </p>
                <ul className="mt-4 space-y-2">
                  {experiences[selectedCompany].points.map((point, index) => (
                    <li
                      key={index}
                      className="flex items-center font-inter text-base text-slate-700 sm:text-lg dark:text-white"
                    >
                      <span className="w-2 h-2 bg-purple-500 rounded-full mr-2 dark:text-white"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
