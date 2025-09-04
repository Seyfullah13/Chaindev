import React, { useState, useEffect, useRef } from "react";
import { Link } from "@tanstack/react-router";
import {
  Bars3Icon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { useTranslation } from "react-i18next";

// Liens de navigation
const navLinks = [
  { key: "about", href: "/a-propos" },
  { key: "services", href: "/services" },
  { key: "portfolio", href: "https://www.seyfullah-ozdal.fr" },
  { key: "contact", href: "/contact" },
];

// Langues disponibles
const languages = [
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "tr", label: "Türkçe" },
  { code: "ar", label: "العربية" },
];

// Hook pour fermer au clic en dehors
function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      if (!ref.current || ref.current.contains(e.target)) return;
      handler();
    };
    document.addEventListener("mousedown", listener);
    return () => document.removeEventListener("mousedown", listener);
  }, [ref, handler]);
}

export default function Navbar() {
  const { i18n, t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[2]; // fallback FR

  // Fermer le menu mobile au resize desktop
  useEffect(() => {
    const onResize = () => window.innerWidth >= 1024 && setMobileOpen(false);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Mettre à jour la direction du texte selon la langue
  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  const langRef = useRef(null);
  useClickOutside(langRef, () => setLangOpen(false));

  return (
    <header className="bg-black text-white sticky top-0 z-50 w-full">
      <div className="flex items-center justify-between w-full px-2 lg:px-8 py-3 lg:py-4">
        {/* Logo */}
        <Link to="/" className="flex items-center mr-auto">
          <img
            src="chaindev.png"
            alt={t("navbar.brandAlt")}
            className="h-14 w-auto sm:h-16 md:h-20 lg:h-16 xl:h-20 transition-all"
          />
        </Link>

        {/* Desktop nav */}
        <div className="flex-1 flex items-center justify-end max-w-6xl mx-auto">
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map(({ key, href }) =>
              href.startsWith("http") ? (
                <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {t(`navbar.navLinks.${key}`)}
                </a>
              ) : (
                <Link key={key} to={href} className="hover:underline">
                  {t(`navbar.navLinks.${key}`)}
                </Link>
              )
            )}

            {/* Language dropdown desktop */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center gap-1 border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition"
                aria-haspopup="true"
                aria-expanded={langOpen}
                aria-label={t("navbar.aria.langDropdown")}
              >
                <span>{currentLang.flag}</span>
                <span className="hidden sm:inline">
                  {t(`navbar.languages.${currentLang.code}`)}
                </span>
                <ChevronDownIcon
                  className={`h-4 w-4 transition-transform ${
                    langOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {langOpen && (
                <ul className="absolute right-0 mt-2 w-32 bg-white text-black rounded shadow-lg overflow-hidden">
                  {languages.map((lang) => (
                    <li key={lang.code}>
                      <button
                        onClick={() => {
                          i18n.changeLanguage(lang.code);
                          setLangOpen(false);
                        }}
                        className="w-full text-left px-3 py-2 hover:bg-gray-200 flex items-center gap-2"
                      >
                        <span>{lang.flag}</span>
                        <span>{t(`navbar.languages.${lang.code}`)}</span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </nav>

          {/* Burger button mobile */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileOpen((o) => !o)}
            aria-label={
              mobileOpen
                ? t("navbar.aria.closeMenu")
                : t("navbar.aria.openMenu")
            }
          >
            {mobileOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-black px-4 pb-4 space-y-4">
          {navLinks.map(({ key, href }) =>
            href.startsWith("http") ? (
              <a
                key={key}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:underline"
                onClick={() => setMobileOpen(false)}
              >
                {t(`navbar.navLinks.${key}`)}
              </a>
            ) : (
              <Link
                key={key}
                to={href}
                className="block hover:underline"
                onClick={() => setMobileOpen(false)}
              >
                {t(`navbar.navLinks.${key}`)}
              </Link>
            )
          )}

          {/* Language dropdown mobile */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen((o) => !o)}
              className="flex items-center gap-1 w-full border border-white px-3 py-2 rounded hover:bg-white hover:text-black transition"
              aria-haspopup="true"
              aria-expanded={langOpen}
              aria-label={t("navbar.aria.langDropdown")}
            >
              <span>{currentLang.flag}</span>
              <span>{t(`navbar.languages.${currentLang.code}`)}</span>
              <ChevronDownIcon
                className={`h-4 w-4 transition-transform ${
                  langOpen ? "rotate-180" : ""
                }`}
              />
            </button>
            {langOpen && (
              <ul className="absolute left-0 mt-1 w-full bg-white text-black rounded shadow-lg overflow-hidden">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => {
                        i18n.changeLanguage(lang.code);
                        setLangOpen(false);
                        setMobileOpen(false);
                      }}
                      className="w-full text-left px-3 py-2 hover:bg-gray-200 flex items-center gap-2"
                    >
                      <span>{lang.flag}</span>
                      <span>{t(`navbar.languages.${lang.code}`)}</span>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
