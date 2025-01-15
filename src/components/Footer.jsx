import React from "react";

function Footer() {
  return (
    <footer className="container border-t border-slate-300 py-2">
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <p className="font-inter font-medium text-base text-black dark:text-white">
          © 2024 All rights reserved.
        </p>
        <div className="flex items-center gap-5 py-5">
          <a
            className="flex items-center gap-2 text-base font-inter font-medium hover:text-blue-600 dark:text-white"
            href="https://www.linkedin.com/in/farukozgu/"
            target="_blank"
          >
            Linkedin 🡵
          </a>
          <a
            className="flex items-center gap-2 text-base font-inter font-medium hover:text-blue-600 dark:text-white"
            href="https://github.com/farukozgu"
            target="_blank"
          >
            Github 🡵
          </a>
          <a
            className="flex items-center gap-2 text-base font-inter font-medium hover:text-blue-600 dark:text-white"
            href="https://www.instagram.com/faruk.ozgu/"
            target="_blank"
          >
            Instagram 🡵
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
