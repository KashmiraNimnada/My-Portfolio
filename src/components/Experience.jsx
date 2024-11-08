import React from 'react'
import reacts from "../assets/reacts.png"
import css from "../assets/css.png"
import html from "../assets/html.png"
import javascript from "../assets/javascript.png"
import javaFX from "../assets/javaFX.png"
import github from "../assets/github.png"
import mysql from "../assets/mysql.png"
import springboot from "../assets/springboot.png"
import tailwind from "../assets/tailwind.png"

const Experience = () => {

    const techs = [
        {
            id: 1,
            src: html,
            title: "HTML",
            style: "shadow-orange-500",
        },
        {
            id: 2,
            src: css,
            title: "CSS",
            style: "shadow-blue-500",
        },
        {
            id: 3,
            src: javascript,
            title: "JavaScript",
            style: "shadow-yellow-500",
        },
        {
            id: 4,
            src: reacts,
            title: "React",
            style: "shadow-blue-500",
        },
        {
            id: 5,
            src: javaFX,
            title: "JavaFX",
            style: "shadow-orange-500",
        },
        {
            id: 6,
            src: github,
            title: "GitHub",
            style: "shadow-gray-400",
        },
        {
            id: 7,
            src: mysql,
            title: "MySQL",
            style: "shadow-blue-800",
        },
        {
            id: 8,
            src: springboot,
            title: "SpringBoot",
            style: "shadow-lime-500",
        },
        {
            id: 9,
            src: tailwind,
            title: "Tailwind",
            style: "shadow-sky-400",
        },
    ];

  return (
    <div name="experience" className="h-screen w-full bg-gradient-to-b from-gray-800 to-black">
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl p-2 inline border-b-4 border-gray-500 font-bold">Experience</p>
                <p className="py-6">These are some technologies I've worked with</p>
            </div>

            <div className="w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
                {techs.map(({id,src,title,style})=> (
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                        <img src={src} alt="" className="w-20 mx-auto"/>
                        <p className="mt-4">{title}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Experience