"use client";
import React, { useState } from "react";
import { BiMenu, BiX } from "react-icons/bi";
import { BsFacebook, BsGithub, BsLinkedin, BsTwitterX } from "react-icons/bs";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <nav className="fixed top-0 z-10 flex items-center w-full border-b justify-between px-16 py-6 text-white backdrop-blur-md md:justify-evenly border-gray-700 bg-black/70">
      <a
        href="#home"
        className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent opacity-80 hover:opacity-100 duration-300 transition-all text-3xl font-semibold"
      >
        Zawad
      </a>

      <ul className="hidden md:flex gap-10">
        <a
          href="#home"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Home</li>
        </a>
        <a
          href="#tech"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Tech</li>
        </a>
        <a
          href="#projects"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Projects</li>
        </a>
        <a
          href="#contact"
          className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
        >
          <li>Contact</li>
        </a>
      </ul>

      <ul className="hidden md:flex gap-5">
        <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-500 text-xl">
          <a href="https://www.linkedin.com/in/zahin-zawad/" target="_blank">
            <BsLinkedin />
          </a>
        </li>
        <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-500 text-xl">
          <a href="https://www.github.com/zahin-zawad/" target="_blank">
            <BsGithub />
          </a>
        </li>
        <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-500 text-xl">
          <a href="https://www.facebook.com/zahin.zawad.19/" target="_blank">
            <BsFacebook />
          </a>
        </li>
        <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-sky-500 text-xl">
          <a href="https://www.twitter.com/zahin__zawad/" target="_blank">
            <BsTwitterX />
          </a>
        </li>
      </ul>

      {isOpen ? (
        <BiX className="block md:hidden text-4xl" onClick={openMenu} />
      ) : (
        <BiMenu className="block md:hidden text-4xl" onClick={openMenu} />
      )}

      {isOpen && (
        <div className={`fixed  right-0 top-[84px] flex h-screen w-1/2 flex-col items-start gap-10 border-l border-gray-800 bg-black/90 p-12 ${ isOpen ? "block" : "hidden"}`}>
          <ul className="flex flex-col gap-8">
            <a
              href="#home"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Home</li>
            </a>
            <a
              href="#tech"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Tech</li>
            </a>
            <a
              href="#projects"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Projects</li>
            </a>
            <a
              href="#contact"
              className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100"
            >
              <li>Contact</li>
            </a>
          </ul>


          <ul className="flex flex-wrap gap-5">
        <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-500 text-xl">
          <a href="https://www.linkedin.com/in/zahin-zawad/" target="_blank">
            <BsLinkedin />
          </a>
        </li>
        <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-orange-500 text-xl">
          <a href="https://www.github.com/zahin-zawad/" target="_blank">
            <BsGithub />
          </a>
        </li>
        <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-blue-500 text-xl">
          <a href="https://www.facebook.com/zahin.zawad.19/" target="_blank">
            <BsFacebook />
          </a>
        </li>
        <li className="cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 hover:text-sky-500 text-xl">
          <a href="https://www.twitter.com/zahin__zawad/" target="_blank">
            <BsTwitterX />
          </a>
        </li>
      </ul>



        </div>
      )}
    </nav>
  );
}
