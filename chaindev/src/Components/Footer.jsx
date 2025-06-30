import { Typography } from "@material-tailwind/react";
import githubLogo from "../assets/images/logos/github.png";
import linkedinLogo from "../assets/images/logos/linkedin.png";
import { Link } from "@tanstack/react-router";

const currentYear = new Date().getFullYear();

export function FooterWithSocialLinks() {
  return (
    <footer className="relative w-full z-50 ">
      <div className="mx-auto w-full  px-8 bg-black">
        <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 bg-black">
          <Typography
            variant="small"
            className="text-center font-normal text-white"
          >
            &copy; {currentYear} Chaindev. Tous droits résérvés.
          </Typography>
          <div className="flex items-center justify-center mt-2 space-x-4">
            <a
              href="https://github.com/Seyfullah13"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain"
                src={githubLogo}
                alt="GitHub"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/seyfullah-ozdal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto object-contain"
                src={linkedinLogo}
                alt="LinkedIn"
              />
            </a>
            <Link to="/politique-de-confidentialite">
              Politique de confidentialité
            </Link>
            <Link to="/mentions-legales">Mentions légales</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterWithSocialLinks;
