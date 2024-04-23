import React from "react";
import { RxGithubLogo, RxTwitterLogo, RxLinkedinLogo } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] flex flex-col items-center justify-end">
      <div className="mb-[20px] text-[15px] text-center">
        <p>bryanmunera@hotmail.com</p>
      </div>
      <div className="flex space-x-4 mb-[20px]">
        <a href="https://github.com/OpenSourceMeNow" target="_blank" rel="noopener noreferrer">
          <RxGithubLogo size={24} />
        </a>
        <a href="www.linkedin.com/in/bryanmunera" target="_blank" rel="noopener noreferrer">
          <RxLinkedinLogo size={24} />
        </a>
        <a href="https://twitter.com/EveryTeslaPro" target="_blank" rel="noopener noreferrer">
          <RxTwitterLogo size={24} />
        </a>
      </div>
      <div className="text-[15px] text-center">
        &copy; Bryan Munera 2024 Inc. All rights reserved
      </div>
    </div>
  );
};

export default Footer;