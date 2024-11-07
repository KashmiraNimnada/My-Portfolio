import React from 'react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import me from "../assets/me.png"

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800">
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">I'm a Software Developer</h2>
                <p className="text-gray-500 py-4 max-w-md">
                    I'm an Engineering graduate with a strong interest in software
                    development, skilled in Java and Python programming. 
                    Currently, I love to work on web application using technologies like React,Spring boot,MySQL,Tailwind.
                </p>
                <div>
                    <button className="text-white group flex py-3 px-6 my-2 items-center cursor-pointer rounded-md bg-gradient-to-r from-cyan-500 to-blue-500">
                        portfolio
                        <span className="pt-0.3 group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={me} alt="my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
            </div>
        </div>
    </div>

  );
};

export default Home