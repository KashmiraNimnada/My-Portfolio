import React from 'react'
import { FaBars,FaTimes } from 'react-icons/fa';

const NavBar = () => {

    const links = [
        {
            id : 1,
            link : 'home',
        },
        {
            id : 2,
            link : 'about',
        },
        {
            id : 3,
            link : 'portfolio',
        },
        {
            id : 4,
            link : 'experience',
        },
        {
            id : 5,
            link : 'contact',
        },
    ]

  return (
  <div className="bg-black text-white h-20 px-4 items-center flex justify-between w-full fixed">
    <div>
        <h1 className="font-signature text-5xl py-3 ml-2">Kashmira De Silva</h1>
    </div>
    <ul className="flex">
        {links.map(({id,link}) => (
            <li key={link.id} className="capitalize cursor-pointer text-gray-500 px-4 font-medium hover:scale-105 duration-200" >{link}</li>
        ))}
    </ul>

  </div>
  );
};

export default NavBar