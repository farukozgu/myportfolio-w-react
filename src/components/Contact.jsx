import React from "react";

function Contact() {
  return (
    <section id="contact" className="container my-9">
      <div className="flex flex-col md:flex-row md:items-center items-start justify-between shadow-lg rounded-2xl my-5 py-6 px-9 bg-gray-200">
        <div className="flex flex-col gap-1">
          <h1 className="text-slate-900 font-manrope font-bold text-2xl xl:text-3xl">
            Interested in working together?
          </h1>
        </div>
        <a
          href="mailto:faruk.ozgufb@gmail.com"
          className="bg-slate-900 hover:bg-blue-600 text-white shadow-lg py-3 px-6 transition-all text-center rounded-lg font-inter text-sm my-3 lg:text-base xl:text-lg"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}

export default Contact;
