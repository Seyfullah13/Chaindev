"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import logo from "../icon.jpg";

export default function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const linkCommonClasses =
  "px-3 py-2 rounded-md transition transform duration-150 ease-in-out " +
  "hover:bg-neutral hover:text-neutral-content hover:scale-102 hover:shadow-sm " +
  "hover:underline hover:underline-offset-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral";


  return (
    <div className="navbar bg-base-100 shadow-sm px-4">
      <div className="navbar-start">
        <a href="../home" aria-label="Accueil" className="inline-flex items-center">
          <Image src={logo} alt="logoChaindev" width={40} height={40} />
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base-content transition-colors duration-200">
          <li><a className={linkCommonClasses}>Qui suis-je?</a></li>
          <li><a className={linkCommonClasses}>Prestations</a></li>
          <li><a className={linkCommonClasses}>Portfolio</a></li>
          <li><a className={linkCommonClasses}>Contact</a></li>
        </ul>
      </div>

      <label className="toggle text-base-content mx-2">
        <input type="checkbox" value="dark" className="theme-controller" aria-label="Basculer thème" />
        <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
          <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </g>
        </svg>

        <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
          <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor">
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </g>
        </svg>
      </label>

      <div className="dropdown dropdown-end lg:hidden" ref={dropdownRef}>
        <button
          type="button"
          aria-haspopup="true"
          aria-expanded={isDropdownOpen}
          onClick={() => setIsDropdownOpen((s) => !s)}
          className="btn btn-ghost p-2"
          aria-label={isDropdownOpen ? "Fermer le menu" : "Ouvrir le menu"}
        >
          {!isDropdownOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform transition-transform duration-150" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M12.293 16.293a1 1 0 010-1.414L15.586 11H4a1 1 0 110-2h11.586l-3.293-3.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </button>

        <ul
          className={`menu menu-sm dropdown-content bg-base-100 rounded-box mt-1 w-52 p-2 shadow text-base-content transition-all duration-150 origin-top-right ${
            isDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"
          }`}
          role="menu"
        >
          <li><a role="menuitem" className={linkCommonClasses}>Qui suis-je?</a></li>
          <li><a role="menuitem" className={linkCommonClasses}>Prestations</a></li>
          <li><a role="menuitem" className={linkCommonClasses}>Portfolio</a></li>
          <li><a role="menuitem" className={linkCommonClasses}>Contact</a></li>
        </ul>
      </div>
    </div>
  );
}
