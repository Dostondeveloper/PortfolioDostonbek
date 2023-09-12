import React from "react";
import { FaCircle } from "react-icons/fa";
import Typewriter from "typewriter-effect";

export const About = () => {
  return (
    <section id="about" className="section bg-primary">
      <div className="container mx-auto">
        <h1 className="font-semibold text-fuchsia-800 text-md underline">
          About me
        </h1>
        <div className="flex flex-col xl:flex-row gap-24 pt-8 items-center">
          <div className="flex-flex-col items-center text-center lg:items-start lg:text-left w-full xl:w-1/2">
            <div className="flex-flex-col">
              <h2 className="text-2xl lg:text-4xl font-regular lg:font-extrabold mb-3">
                Usmonov Doston
              </h2>
              <div className="text-fuchsia-800 font-medium">
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Developer")
                      .pauseFor(200)
                      .start()
                      .deleteAll()
                      .typeString("Designer")
                      .deleteAll()
                      .start();
                  }}
                />
              </div>
              <p className="mt-3 text-sm font-regular">
                Mening ismim Doston men yoshligimdan kompyuter oynashga qiziqganman.
                Men 6 yoshimdan kompyuter oynashni va tuzatishni boshlaganman.
                Men shundan keyin dasturchi bo'lishni orzu qilganman.
                Men birinchi bo'lib React Js Frontend dasturchisi bo'laman.
              </p>
            </div>
          </div>
          <div className="bg-[#011221] border-[#1E2D3D] w-0.9 h-full px-6 py-6 gap-2 rounded-lg shadow-xl lg: hidden md:block sm:block">
            <div className="flex items-start gap-1">
              <FaCircle size={12} color="FE6157" />
              <FaCircle size={12} color="FEC335" />
              <FaCircle size={12} color="28C443" />
              <div>
                <div className="py-3">
                  <div className="flex gap-1 mt-2">
                    <span className=" text-fuchsia-800 font-regular ">
                      namespace
                    </span>
                    <span className="text-white font-light text-[0.8rem]">
                      Portfolio
                    </span>
                    <span className="text-white font-light text-[0.8rem]"></span>
                  </div>
                  <div className="flex gap-1 mt-2 ml-2">
                    <span className=" text-fuchsia-800 font-regular">
                      public class:
                    </span>
                    <span className="text-white font-light text-[0.8rem]">
                      Person
                    </span>
                    <span className="text-white font-light text-[0.8rem]"></span>
                  </div>
                  <div className="flex gap-1 mt-2 ml-4">
                    <span className=" text-fuchsia-800 font-regular gap-1">
                      public int
                    </span>
                    <span className="text-white font-light text-[0.8rem]">
                      Age:25
                    </span>
                    <span className="text-white font-light text-[0.8rem]"></span>
                  </div>
                  <div className="flex gap-1 mt-2 ml-4">
                    <span className=" text-fuchsia-800 font-regular">
                      public string
                    </span>
                    <span className="text-white font-light text-[0.8rem]">
                      City: Qashqadaryo
                    </span>
                    <span className="text-white font-light text-[0.8rem]"></span>
                  </div>
                  <div className="flex gap-1 mt-2 ml-4">
                    <span className=" text-fuchsia-800 font-regular">
                      public string
                    </span>
                    <span className="text-white font-light text-[0.8rem]">
                      Studying = "Najot Talim"
                    </span>
                    <span className="text-white font-light text-[0.8rem]"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
