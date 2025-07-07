import React from "react";
import { Typography } from "@material-tailwind/react";
import githubLogo from "../assets/images/logos/github.png";
import linkedinLogo from "../assets/images/logos/linkedin.png";
import { Link } from "@tanstack/react-router";

const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
  return (
    <footer className="bg-black text-white w-full sticky bottom-0 z-50 ">
      <div className="mx-auto w-full max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-blue-gray-100 pt-6">
          {/* Copyright */}
          <Typography
            variant="small"
            className="text-center sm:text-left text-sm"
          >
            &copy; {currentYear} Chaindev. Tous droits réservés.
          </Typography>

          {/* Liens et icônes */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            {/* GitHub */}
            <a
              href="https://github.com/Seyfullah13"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien vers GitHub"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src={githubLogo}
                alt="GitHub"
                className="w-6 md:w-8 aspect-square object-contain"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/seyfullah-ozdal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Lien vers LinkedIn"
              className="transition-opacity hover:opacity-80"
            >
              <img
                src={linkedinLogo}
                alt="LinkedIn"
                className="w-6 md:w-8 aspect-square object-contain"
              />
            </a>

            {/* Liens internes */}
            <Link
              to="/politique-de-confidentialite"
              className="hover:underline transition-colors"
            >
              Politique de confidentialité
            </Link>
            <Link
              to="/mentions-legales"
              className="hover:underline transition-colors"
            >
              Mentions légales
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterWithSocialLinks;
