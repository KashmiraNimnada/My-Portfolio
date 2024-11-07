import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen text-white bg-gradient-to-b from-gray-800 to-black">
        <div className="max-w-screen-lg h-full w-full p-4 mx-auto justify-center">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-20">
            Hello, I'm Kashmira Nimnada De Silva, an Engineering graduate with a strong passion for software development. I am proficient in Java and Python programming, and I have developed a solid foundation in building efficient and scalable software solutions.               
            </p>

            <br />

            <p className="text-xl">
            Currently, I focus on creating web applications using technologies such as React, Spring Boot, MySQL, and Tailwind. You can reach me at "+94767659089" or email me at "kashmiranimnada98@gmail.com".
            </p>
        </div>
    </div>
  );
};

export default About