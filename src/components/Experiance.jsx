/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import c from "../../public/c.png";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "MongoDB",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: c,
      name: "C++",
    },
    {
      id: 4,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 5,
      logo: oracle,
      name: "Oracle",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Technology</h1>
        <p className="  ">I've experience in below technologies.</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-10">
          {cardItem.map(({ id, logo, name }) => (
            <div
              key={id}
              className="bg-white dark:bg-gray-900 p-4 rounded-2xl shadow-lg flex flex-col items-center hover:scale-105 transition duration-300"
            >
              <img src={logo} alt={name} className="w-20 h-20 object-contain" />
              <p className="mt-3 font-semibold text-gray-700 dark:text-gray-200">
                {name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
