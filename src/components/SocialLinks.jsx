import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {

  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30}/>
        </>
      ),
      href: "https://www.linkedin.com/in/kashmira-de-silva-025577245/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30}/>
        </>
      ),
      href: "https://github.com/KashmiraNimnada",
    },
    {
      id: 3,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30}/>
        </>
      ),
      href: "/KashmiraNimnada_CV.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id,child,href,style,download})=> (
          <li className={"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:rounded-md duration-300"+" "+style}>
          <a type={id} href={href} className="text-white flex justify-between items-center w-full" download={download}
              target="_blank"
              rel="noreferrer">
            {child}
          </a>
        </li>
        ))}
        
      </ul>
    </div>
  );
};

export default SocialLinks