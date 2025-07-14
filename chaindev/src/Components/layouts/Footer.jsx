import React from "react";
import { Typography } from "@material-tailwind/react";
import githubLogo from "../../assets/images/logos/github.png";
import linkedinLogo from "../../assets/images/logos/linkedin.png";
import InstagramLogo from "../../assets/images/logos/instagram.png";
import { Link } from "@tanstack/react-router";

const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
  return (
    <footer className="relative w-screen bg-black text-white min-h-[180px]">
      <div className="mx-auto w-full max-w-7xl px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Titre et copyright */}
          <div>
            <Typography variant="h5" className="mb-4 text-white">
              Chaindev
            </Typography>
            <Typography
              variant="small"
              className="mb-4 text-center md:text-left font-normal text-gray-300"
            >
              &copy; {currentYear} Chaindev. Tous droits réservés.
            </Typography>
          </div>
          {/* Liens sociaux et légaux */}
          <div className="flex flex-col md:flex-row md:justify-end gap-6 items-center">
            <div className="flex gap-4">
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
                  className="w-8 aspect-square object-contain"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/seyfullah-ozdal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lien vers LinkedIn"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src={linkedinLogo}
                  alt="Linkedin"
                  className="w-8 aspect-square object-contain"
                />
              </a>
              <a
                href="https://www.instagram.com/chaindev13/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Lien vers Instagram"
                className="transition-opacity hover:opacity-80"
              >
                <img
                  src={InstagramLogo}
                  alt="LinkedIn"
                  className="w-8 aspect-square object-contain"
                />
              </a>
            </div>
            <div className="flex gap-4 text-sm">
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
      </div>
    </footer>
  );
}

export default FooterWithSocialLinks;
