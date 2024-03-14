// import { Link } from "react-router-dom";
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const TheNavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="relative">
      <nav className="bg-primary-blue px-5 sm:px-20 py-10 fixed top-0 left-0 right-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center flex-col">
            <NavLink
              to={"/"}
              className="flex-1 text-main-heading-color text-xl sm:text-3xl font-semibold"
            >
              Mohamed Mushkir
            </NavLink>
          </div>

          <ul
            className={`hidden lg:flex items-center text-xl ${
              isOpen ? "block" : "hidden"
            }`}
          >
            <li>
              <a
                href="#about"
                className="text-main-heading-color px-5 py-2 hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#stacks"
                className="text-main-heading-color px-5 py-2  hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Tech Stacks
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="text-main-heading-color px-5 py-2  hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#works"
                className="text-main-heading-color px-5 py-2  hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Works
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-main-heading-color px-5 py-2  hover:text-aqua-color hover:transition 500 hover:rounded-md"
              >
                Contact
              </a>
            </li>
            <li>
              <Link
                to={"/hi"}
                className=" text-aqua-color border border-aqua-color px-5 py-2 rounded-md hover:bg-aqua-color hover:transition 500 hover:text-primary-blue sm:hover:font-semibold"
              >
                Resume
              </Link>
            </li>
          </ul>

          <div className="lg:hidden">
            <button
              className="focus:outline-none text-main-heading-color"
              onClick={toggleMenu}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={` text-main-heading-color lg:hidden mt-4 ${
            isOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col space-y-2">
            <li>
              <a
                href="#about"
                className="text-main-heading-color hover:text-aqua-color hover:transition 500"
              >
                About
              </a>
            </li>
            <li>
              <NavLink
                to={"exp"}
                className="text-main-heading-color hover:text-aqua-color hover:transition 500"
              >
                Tech Stacks
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/services"}
                className="text-main-heading-color hover:text-aqua-color hover:transition 500"
              >
                Services
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/contact"}
                className="text-main-heading-color hover:text-aqua-color hover:transition 500"
              >
                Contact
              </NavLink>
            </li>
            <li>
              <Link
                to={"/hi"}
                className=" text-aqua-color border border-aqua-color px-5 py-2 rounded-md hover:bg-aqua-color hover:transition 500 hover:text-primary-blue sm:hover:font-semibold"
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default TheNavBar;
