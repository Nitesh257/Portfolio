/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import pic from "../../public/photo.avif";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark"); // Adds the dark mode class to html
    } else {
      document.documentElement.classList.remove("dark"); // Removes the dark mode class
    }
  };

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
    {
      id: 6,
      text: "Resume",
      external: true,
      link: "https://drive.google.com/file/d/1wRrt01VUX9YYdbm2PfRZ4F6W_s0CYdJN/view?usp=sharing",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2 items-center">
            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer text-black dark:text-white">
                Nitesh
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Web Developer
              </p>
            </div>
          </div>

          {/* desktop navbar */}
          <div className="flex items-center space-x-4">
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text, external, link }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer text-black dark:text-white"
                >
                  {external ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {text}
                    </a>
                  ) : (
                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            {/* Dark mode toggle visible on desktop */}
            <button
              onClick={toggleDarkMode}
              className="hidden md:block text-black dark:text-white"
            >
              {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
            </button>

            {/* Mobile menu icon */}
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* mobile navbar */}
        {menu && (
          <div className="bg-white dark:bg-gray-900">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text, external, link }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 cursor-pointer text-black dark:text-white"
                >
                  {external ? (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {text}
                    </a>
                  ) : (
                    <Link
                      to={text}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      activeClass="active"
                    >
                      {text}
                    </Link>
                  )}
                </li>
              ))}
              {/* Dark mode toggle for mobile */}
              <button
                onClick={toggleDarkMode}
                className="mt-4 text-black dark:text-white"
              >
                {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
              </button>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
