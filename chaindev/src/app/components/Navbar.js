"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../icon.jpg";

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}

export default function Navbar() {
  const mounted = useMounted();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [theme, setTheme] = useState(() => {
    try {
      if (typeof window === "undefined") return "light";
      const saved = localStorage.getItem("theme");
      const prefersDark =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      return saved === "dark" || (!saved && prefersDark) ? "dark" : "light";
    } catch (e) {
      return "light";
    }
  });

  const dropdownRef = useRef(null);
  const menuId = "mobile-menu";

  function applyTheme(value) {
    if (typeof document === "undefined") return;
    if (value === "dark") {
      document.documentElement.classList.add("dark");
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.setAttribute("data-theme", "light");
    }
  }

  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    }
    function handleKeyDown(e) {
      if (e.key === "Escape") setIsDropdownOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const linkCommonClasses =
    "px-3 py-2 rounded-md transition transform duration-150 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-neutral";

  return (
    <header>
      <nav
        className="navbar bg-base-100 shadow-sm px-6 py-3 flex items-center transition-colors duration-300"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="navbar-start flex items-center">
          <Link href="/" aria-label="Accueil" className="inline-flex items-center ml-2">
            <Image src={logo} alt="Logo Chaindev" width={42} height={42} loading="eager" priority />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul
            className="menu menu-horizontal px-1 text-base-content flex items-center space-x-1"
            role="menubar"
            aria-label="Menu principal"
          >
            <li role="none"><Link role="menuitem" className={linkCommonClasses} href="/whoami">Qui suis-je?</Link></li>
            <li role="none"><Link role="menuitem" className={linkCommonClasses} href="/prestations">Prestations</Link></li>
            <li role="none"><a role="menuitem" className={linkCommonClasses} href="https://www.seyfullah-ozdal.fr" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
            <li role="none"><Link role="menuitem" className={linkCommonClasses} href="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="navbar-end flex items-center space-x-4 mr-2">
          {!mounted ? (
            <button aria-hidden="true" className="relative inline-flex items-center opacity-0 pointer-events-none w-12 h-7" />
          ) : (
            <button
              type="button"
              onClick={toggleTheme}
              aria-pressed={theme === "dark"}
              aria-label={theme === "dark" ? "Activer thème clair" : "Activer thème sombre"}
              className="relative inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary"
            >
              <span className="sr-only">Basculer thème</span>
              <span className={`inline-block w-12 h-7 rounded-full transition-colors duration-300 ${theme === "dark" ? "bg-primary" : "bg-gray-300"}`} aria-hidden="true" />
              <span className={`absolute left-0 top-0.5 w-6 h-6 rounded-full bg-white shadow transform transition-transform duration-300 ${theme === "dark" ? "translate-x-5" : "translate-x-0"}`} aria-hidden="true" style={{ marginLeft: 2 }} />
            </button>
          )}

          <div className="dropdown dropdown-end lg:hidden" ref={dropdownRef}>
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={isDropdownOpen}
              aria-controls={menuId}
              onClick={() => setIsDropdownOpen((s) => !s)}
              className="btn btn-ghost p-2"
            >
              <span className="sr-only">{isDropdownOpen ? "Fermer le menu" : "Ouvrir le menu"}</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                {isDropdownOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            <ul
              id={menuId}
              role="menu"
              className={`menu menu-sm dropdown-content bg-base-100 rounded-box mt-1 w-52 p-2 shadow text-base-content transition-all duration-150 origin-top-right ${isDropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0 pointer-events-none"}`}
            >
              <li role="none"><Link role="menuitem" className={linkCommonClasses} href="/whoami">Qui suis-je?</Link></li>
              <li role="none"><Link role="menuitem" className={linkCommonClasses} href="/prestations">Prestations</Link></li>
              <li role="none"><a role="menuitem" className={linkCommonClasses} href="https://www.seyfullah-ozdal.fr" target="_blank" rel="noopener noreferrer">Portfolio</a></li>
              <li role="none"><Link role="menuitem" className={linkCommonClasses} href="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
