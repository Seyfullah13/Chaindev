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
    <div className="navbar bg-base-100 shadow-sm px-6 py-3 flex items-center">

      {/* Logo */}
      <div className="navbar-start flex items-center">
        <a href="./" aria-label="Accueil" className="inline-flex items-center ml-2">
          <Image src={logo} alt="logoChaindev" width={42} height={42} />
        </a>
      </div>

      {/* Liens desktop */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base-content transition-colors duration-200 flex items-center space-x-1">
          <li><a className={linkCommonClasses} href="../whoami">Qui suis-je?</a></li>
          <li><a className={linkCommonClasses} href="../prestations">Prestations</a></li>
          <li><a className={linkCommonClasses} href="https://www.seyfullah-ozdal.fr">Portfolio</a></li>
          <li><a className={linkCommonClasses} href="../contact">Contact</a></li>
        </ul>
      </div>

      {/* Partie droite */}
      <div className="navbar-end flex items-center space-x-4 mr-2">

        {/* Switch de thème */}
        <label className="toggle text-base-content flex items-center cursor-pointer transition-transform duration-150 hover:scale-105 active:scale-95">
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

        {/* Menu mobile */}
        <div className="dropdown dropdown-end lg:hidden" ref={dropdownRef}>
          <button
            type="button"
            aria-haspopup="true"
            aria-expanded={isDropdownOpen}
            onClick={() => setIsDropdownOpen((s) => !s)}
            className="btn btn-ghost p-2 flex items-center"
            aria-label={isDropdownOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {!isDropdownOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transition-transform duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 transform transition-transform duration-150" viewBox="0 0 20 20" fill="currentColor">
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
            <li><a role="menuitem" className={linkCommonClasses} href="../whoami">Qui suis-je?</a></li>
            <li><a role="menuitem" className={linkCommonClasses} href="../prestations">Prestations</a></li>
            <li><a role="menuitem" className={linkCommonClasses} href="https://www.seyfullah-ozdal.fr">Portfolio</a></li>
            <li><a role="menuitem" className={linkCommonClasses} href="../contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
