import React from "react";
import { NavBar } from "./NavBar";
import { Socials } from "./Socials";
import glasses from "../assets/img/logos/glasses.svg";
import logoReact from "../assets/img/logos/react-logo.svg"
import photo from "../assets/img/logos/ichigo.jpg"

export const Header = () => {
  return (
    <header className="h-20 flex bg-primary items-center fixed top-0 w-full text-white z-10">
      <div className="container mx-auto h-full flex items-center justify-center lg:justify-between">
        <img src={logoReact} className="w-1/12  hidden md:block lg:block" />
        <img src={glasses} className="w-1/4 lg:hidden md:hidden sm:block" />
        <img src={photo} className="w-1/4 lg:hidden md:hidden sm:block" alt="ichigo" />
        <NavBar />
        <Socials />
      </div>
    </header>
  );
};
