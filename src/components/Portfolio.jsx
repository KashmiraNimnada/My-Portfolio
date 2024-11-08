import React from 'react'
import myPortfolio from "../assets/myPortfolio.png"
import eCommerceWeb from "../assets/eCommerceWeb.png"
import standeloneApp from "../assets/standeloneApp.png"

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: myPortfolio,
      name: "My Portfolio",
      href: "https://github.com/KashmiraNimnada/My-Portfolio/tree/main",
    },
    {
      id: 2,
      src: eCommerceWeb,
      name: "E-Commerce Website Backend",
      href: "https://github.com/KashmiraNimnada/E-Commerce-Website-back-end.git",
    },
    {
      id: 3,
      src: eCommerceWeb,
      name: "E-Commerce Website Frontend",
      href: "https://github.com/KashmiraNimnada/E-Commerce-Website-front-end.git",
    },
    {
      id: 4,
      src: standeloneApp,
      name: "standelone app for supermarket",
      href: "https://github.com/KashmiraNimnada/standalone-application-for-a-supermarket.git",
    },
  ]

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-screen">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
                <p className="py-6">Check out some of my work right here</p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                {portfolios.map(({id,src,href,name}) => (
                  <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                    <a href={href} target="_blank" rel="noreferrer">
                      <img src={src} alt="" className="rounded-md duration-200 hover:scale-105"/>
                      <p className="text-center">{name}</p>
                    </a>
                  </div>
                ))}
            </div>

        </div>
    </div>
  );
};

export default Portfolio