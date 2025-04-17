/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";

function About() {
  return (
    <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
  <div className="bg-white dark:bg-gray-900 shadow-lg p-8 rounded-2xl">
    <h1 className="text-4xl font-extrabold text-gray-800 dark:text-white mb-6 border-b-2 border-green-400 inline-block">About Me</h1>
    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
      Hello, I'm <span className="text-green-500 font-semibold">Nitesh</span>, a passionate web developer with a focus on the <span className="text-green-400 font-medium">MERN Stack</span>.
    </p>
    <br />
    <h2 className="text-green-400 text-2xl font-bold mt-4">Education</h2>
    <p className="text-gray-600 dark:text-gray-400">B.Tech in CSE from NIT Raipur, graduating in 2026</p>

    <h2 className="text-green-400 text-2xl font-bold mt-6">Skills & Expertise</h2>
    <ul className="list-disc ml-6 text-gray-600 dark:text-gray-400">
      <li>React, JavaScript, MongoDB, Express, Node.js</li>
      <li>Problem-solving in C++</li>
      <li>Experience with Git, Tailwind, Vercel</li>
    </ul>
  </div>
</div>

  );
}

export default About;
