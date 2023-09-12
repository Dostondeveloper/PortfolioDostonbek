import React from "react";
import { Socials } from "./Socials";
import logoReact from "../assets/img/logos/react-logo.svg"

export const Footer = () => {
  return (
    <footer className="bg-primary py-12 items-center">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row space-y-4 items-center justify-between">
          <div className="flex space-x-6">
            <Socials />
          </div>
          <img className="w-1/12" src={logoReact} />
          <p className="text-white text-sm font-normal">
            Created by @doston.akasi
          </p>
        </div>
      </div>
    </footer>
  );
};
