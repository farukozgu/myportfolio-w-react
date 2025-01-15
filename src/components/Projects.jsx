import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import blank from "../assets/blank.png";

import { FreeMode, Pagination, Navigation } from "swiper/modules";

function Projects() {
  const myProjects = {
    firstProject: {
      title: "First Project",
      description: "lorem ipsum dolor sit amet.",
      link: "https://github.com/farukozgu",
      img: "https://app-tech-app.bonmek.com/assets/layout/images/blank_img.png",
    },
    secondProject: {
      title: "Second Project",
      description: "lorem ipsum dolor sit amet.",
      link: "https://github.com/farukozgu",
      img: "https://app-tech-app.bonmek.com/assets/layout/images/blank_img.png",
    },
    thirdProject: {
      title: "Third Project",
      description: "lorem ipsum dolor sit amet.",
      link: "https://github.com/farukozgu",
      img: "https://app-tech-app.bonmek.com/assets/layout/images/blank_img.png",
    },
    fourthProject: {
      title: "Fourth Project",
      description: "lorem ipsum dolor sit amet.",
      link: "https://github.com/farukozgu",
      img: "https://app-tech-app.bonmek.com/assets/layout/images/blank_img.png",
    },
    fifthProject: {
      title: "Fifth Project",
      description: "lorem ipsum dolor sit amet.",
      link: "https://github.com/farukozgu",
      img: "https://app-tech-app.bonmek.com/assets/layout/images/blank_img.png",
    },
  };

  const projectList = Object.values(myProjects);

  return (
    <>
      <section id="projects" className="pt-14 pb-10 md:pt-24">
        <div className="container">
          <h1 className="font-inter text-slate-900 text-2xl sm:text-6xl font-extrabold pb-9 dark:text-white">
            Projects
          </h1>
          <Swiper
            navigation={true}
            slidesPerView={3}
            centeredSlides={false}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {projectList.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="flex flex-col bg-gray-100 py-6 px-4 rounded-lg">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full"
                  />
                  <h3 className="font-inter font-semibold text-2xl pt-7 pb-2">
                    {project.title}
                  </h3>
                  <p className="font-inter text-lg pb-3">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-inter text-base"
                  >
                    <span className="underline underline-offset-4 pr-2">
                      View Project
                    </span>
                    🡵
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Projects;
