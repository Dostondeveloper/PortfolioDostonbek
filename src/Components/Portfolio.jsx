import React from "react";
import sort from "../assets/img/portfolio/sorting.png";
import linkedin from "../assets/img/portfolio/linkedin.png";
import redlife from "../assets/img/portfolio/Admin-analytics.png";
import nptel from "../assets/img/portfolio/nptel.png";
import netflix from "../assets/img/portfolio/netflix.png";
import efficacy from "../assets/img/portfolio/efficacy.png";
import { inViewHandler } from "../animationHandler";
import { motion, useAnimation } from "framer-motion";
import { InView } from "react-intersection-observer";

const Portfolio = () => {
  const animation = useAnimation();
  const portfolios = [
    {
      id: 1,
      src: sort,
      link: "https://app.netlify.com/teams/dostondeveloper/overview",
      repo: "https://github.com/Dostondeveloper",
    },
    {
      id: 2,
      src: linkedin,
      link: "https://app.netlify.com/teams/dostondeveloper/overview",
      repo: "https://github.com/Dostondeveloper",
    },
    {
      id: 3,
      src: redlife,
      link: "https://app.netlify.com/teams/dostondeveloper/overview",
      repo: "https://github.com/Dostondeveloper",
    },
  ];

  const design = [
    {
      id: 1,
      src: nptel,
      link: "https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1271377939360037864",
      repo: "https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1271377939360037864",
    },
    {
      id: 2,
      src: netflix,
      link: "https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1271377939360037864",
      repo: "https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1271377939360037864",
    },
    {
      id: 3,
      src: efficacy,
      link: "https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1271377939360037864",
      repo: "https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1271377939360037864",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-primary w-full text-white md:h-screen portfolio"
    >
      <InView onChange={(inview) => inViewHandler(inview, animation)}>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <h1 className="font-semibold text-fuchsia-800 text-md underline">
              Portfolio
            </h1>
            <p className="text-2xl lg:text-xl font-regular lg:font-extrabold mb-3 py-5">
              Some of my recent work
            </p>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={animation}
          >
            {portfolios.map(({ id, src, link, repo }) => (
              <div
                key={id}
                className="shadow-md bg-[#011221] border-[#1E2D3D] rounded-lg"
              >
                <img
                  src={src}
                  alt="projects"
                  className="rounded-md w-full h-[200px] duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => window.open(link, "_blank")}
                  >
                    Demo
                  </button>
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => window.open(repo, "_blank")}
                  >
                    GitHub
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </InView>

      <InView onChange={(inview) => inViewHandler(inview, animation)}>
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-2xl lg:text-xl font-regular lg:font-extrabold mb-3 py-5">
              Some of my recent design
            </p>
          </div>

          <motion.div
            className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={animation}
          >
            {design.map(({ id, src, link, repo }) => (
              <div
                key={id}
                className="shadow-md bg-[#011221] border-[#1E2D3D] rounded-lg"
              >
                <img
                  src={src}
                  alt="projects"
                  className="rounded-md w-full h-[200px] duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => window.open(link, "_blank")}
                  >
                    Link
                  </button>
                  <button
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105"
                    onClick={() => window.open(repo, "_blank")}
                  >
                    Figma
                  </button>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </InView>
    </div>
  );
};

export default Portfolio;
