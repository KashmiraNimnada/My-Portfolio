import React from 'react'
import myPortfolio from "../assets/myPortfolio.png"
import eCommerceWeb from "../assets/eCommerceWeb.png"

const Portfolio = () => {
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">

              <div className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300">
                <a href="https://github.com/KashmiraNimnada/My-Portfolio/tree/main" target="blank">
                  <img src={myPortfolio} alt="" className="rounded-t-xl"/>
                  <p className="text-center">My portfolio</p>
                </a>
              </div>
              <div className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300">
                <a href="https://github.com/KashmiraNimnada/E-Commerce-Website-back-end.git" target="blank">
                  <img src={eCommerceWeb} alt="" className="rounded-t-xl"/>
                  <p className="text-center">Backend of an E-Commerce Website</p>
                </a>
              </div>
              <div className="shadow-md shadow-gray-600 rounded-lg hover:scale-105 duration-300">
                <a href="https://github.com/KashmiraNimnada/E-Commerce-Website-front-end.git" target="blank">
                  <img src={eCommerceWeb} alt="" className="rounded-t-xl"/>
                  <p className="text-center">Frontend of an E-Commerce Website</p>
                </a>
              </div>
            </div>

        </div>
    </div>
  );
};

export default Portfolio