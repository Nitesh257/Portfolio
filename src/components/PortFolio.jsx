import React from "react";
import java from "../../public/java.png";
import python from "../../public/python.webp";
import currencyConverter from "../../public/currencyConverter.png"
import passwordGenerator from "../../public/passwordGenerator.png"
import Todo from "../../public/Todo.png"
import blog from "../../public/blog.png"


function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: currencyConverter,
      name: "Currency Converter",
      source: "https://github.com/Nitesh3423/React_Projects/tree/main/currencyConverter/my-project"
    },
    {
      id: 2,
      logo: passwordGenerator,
      name: "Password Generator",
      source: "https://github.com/Nitesh3423/React_Projects/tree/main/PasswordGenerator/05passwordGenerator"
    },
    {
      id: 3,
      logo: Todo,
      name: "To do List",
      source: "https://github.com/Nitesh257/Todo_list"
    },
    {
      id: 4,
      logo: blog,
      name: "Blog App",
      source: "https://github.com/Nitesh3423/Youtube_Backend"
    }
  ];
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">PortFolio</h1>
        <span className=" underline font-semibold">Featured Projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name ,source}) => (
            <div
              className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px]"
                alt=""
              />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  Simple {name} 
                </p>
              </div>
              <div className=" px-6 py-4 space-x-3 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                  Video
                </button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                  <a href={source}>Source Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PortFolio;
