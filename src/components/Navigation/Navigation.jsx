import React, { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants";
import { BusinessLogo } from "../../assets";
import { Link as ScrollLink } from "react-scroll";

const Navigation = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='flex justify-between items-center bg-white p-5 fixed top-0 z-20 w-full'>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={BusinessLogo}
            alt='logo'
            className='w-[7rem] h-[7rem] object-contain'
          />
          <p className='text-gray-900 font-bold cursor-pointer flex'>
            Chipmans Lawn & Snow Services
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-gray-900" : "text-gray-500"
              } group hover:text-[#00c45c] font-medium cursor-pointer relative`}
              style={{
                "--tw-shadow": "inset 0 -2px 0 0 #00c45c",
                transition: "box-shadow 0.3s ease-in-out",
                boxShadow: active === link.title ? "var(--tw-shadow)" : "",
              }}
              onClick={() => setActive(link.title)}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow = "inset 0 -2px 0 0 #00c45c")
              }
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "")}
            >
              <ScrollLink
                to={link.id} // Change this line
                spy={true}
                smooth={true}
                offset={-150}
                duration={500}
              >
                {link.title}
              </ScrollLink>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <svg
            className='fill-current text-gray-900 w-7 h-7 cursor-pointer'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            onClick={() => setToggle(!toggle)}
          >
            <title>menu</title>
            <path d='M0 3.5A1.5 1.5 0 011.5 2h17a1.5 1.5 0 110 3h-17A1.5 1.5 0 010 3.5zM1.5 9a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 110 3h-17A1.5 1.5 0 011.5 9zm0 5a1.5 1.5 0 011.5-1.5h17a1.5 1.5 0 110 3h-17A1.5 1.5 0 011.5 14z' />
          </svg>
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gray-900 text-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-gray-300"
                  } font-medium cursor-pointer`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <ScrollLink
                    to={link.id} // Change this line
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className='border border-[#029c15] text-[#029c15] px-2 py-1 rounded hover:bg-[#029c15] hover:text-white transition-colors duration-300' // add button style here
                  >
                    {link.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
