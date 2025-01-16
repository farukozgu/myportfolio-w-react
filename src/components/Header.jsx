import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import "./Header.css";
import night from "../assets/night.png";
import light from "../assets/light.png";

function Header() {
  const [isOpen, setisOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleHamburger = () => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <header className="container dark:text-white">
      <nav className="block md:flex items-center justify-between">
        <ul className="hidden md:flex items-center gap-5 py-3 font-semibold text-base font-inter">
          <li>
            <a
              className="hover:text-blue-600 transition-all hover:underline hover:underline-offset-4 decoration-2"
              href="/"
            >
              Home
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-600 transition-all hover:underline hover:underline-offset-4 decoration-2"
              href="#skills"
            >
              Skills
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-600 transition-all hover:underline hover:underline-offset-4 decoration-2"
              href="#experience"
            >
              Experience
            </a>
          </li>
          <li>
            <a
              className="hover:text-blue-600 transition-all hover:underline hover:underline-offset-4 decoration-2"
              href="#contact"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center justify-between ">
          <button
            onClick={toggleHamburger}
            className={`menu-toggle ${isOpen ? "open" : ""}`}
          >
            {isOpen ? <X className="icon" /> : <Menu className="icon" />}
          </button>
          <div className="flex items-center">
            <button onClick={toggleDarkMode}>
              <img
                className="w-full cursor-pointer"
                src={darkMode ? light : night}
                alt="Toggle Dark Mode"
              />
            </button>
            <a
              href="/public/farukcv.pdf"
              className="bg-slate-900 dark:bg-white dark:text-black text-white rounded-lg transition-all hover:bg-blue-600 dark:hover:bg-blue-600 dark:hover:text-white py-2 px-5 font-semibold font-inter text-base m-5"
            >
              Download CV
            </a>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-150%" }}
            transition={{ type: "spring", stiffness: 50 }}
            className="flex md:hidden absolute bg-white left-4 right-4 shadow-lg border-1 dark:bg-white dark:text-black p-5 items-center justify-between"
          >
            <ul className="flex flex-col items-start gap-5 p-3 font-semibold text-lg font-inter">
              <li>
                <a className="hover:text-blue-600" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600" href="#skills">
                  Skills
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600" href="#experience">
                  Experience
                </a>
              </li>
              <li>
                <a className="hover:text-blue-600" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
