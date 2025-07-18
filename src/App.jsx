/* eslint-disable no-unused-vars */


import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import PortFolio from "./components/PortFolio";
import Experiance from "./components/Experiance";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import { Element } from "react-scroll";
import { BsMoon, BsSun } from "react-icons/bs";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  useEffect(() => {
    
    const storedDarkMode = localStorage.getItem("darkMode") === "true";
    setDarkMode(storedDarkMode);
    if (storedDarkMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);
  useEffect(() => {
    
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  return (
    <>
      <div>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <div className="pt-16"> {}
        <Element name="Home">
          <Home />
        </Element>
        <Element name="about"> <About /></Element>
        <Element name="about"> <PortFolio /></Element>
        <Element name="about"> <Experiance /></Element>
        <Element name="about"> <Contact/></Element>
        <Element name="about"> <Footer/></Element>
       
        </div>
      </div>
      <Toaster />
    </>
  );
}

export default App;
