import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Données statiques
const navLinks = [
  { label: "A propos", href: "#" },
  { label: "Services", href: "#" },
  { label: "Portfolio", href: "#" },
  { label: "Contact", href: "#" },
];

const countries = [
  { flag: "🇺🇸", name: "English" },
  { flag: "🇪🇸", name: "Spain" },
  { flag: "🇫🇷", name: "France" },
  { flag: "🇹🇷", name: "Turkish" },
  { flag: "🇸🇦", name: "Arabic" },
];

// Sous-composant pour les liens de navigation
import PropTypes from "prop-types";

function NavLinks({ links, direction = "row" }) {
  return (
    <ul
      className={`flex items-center gap-6 ${
        direction === "col" ? "flex-col gap-2" : ""
      }`}
    >
      {links.map((link) => (
        <Typography
          key={link.label}
          as="li"
          variant="small"
          color="blue-gray"
          className="p-1 font-medium"
        >
          <a href={link.href}>{link.label}</a>
        </Typography>
      ))}
    </ul>
  );
}

NavLinks.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      href: PropTypes.string.isRequired,
    })
  ).isRequired,
  direction: PropTypes.oneOf(["row", "col"]),
};

// Sous-composant pour le sélecteur de langue
function LanguageSelector({
  open,
  setOpen,
  lang,
  setLang,
  countries,
  buttonProps = {},
  menuListClass = "",
}) {
  return (
    <Menu open={open} handler={setOpen}>
      <MenuHandler>
        <Button
          size="sm"
          variant="outlined"
          className={`flex items-center gap-2 ${
            buttonProps.fullWidth ? "w-full justify-center" : ""
          }`}
          {...buttonProps}
        >
          <span>{countries.find((c) => c.name === lang)?.flag}</span>
          {lang}
          <ChevronDownIcon
            strokeWidth={2.5}
            className={open ? "transform rotate-180 h-4 w-4" : "h-4 w-4"}
          />
        </Button>
      </MenuHandler>
      <MenuList className={`max-h-72 ${menuListClass}`}>
        {countries.map(({ name, flag }) => (
          <MenuItem
            key={name}
            className="flex gap-2"
            onClick={() => {
              setLang(name);
              setOpen(false);
            }}
          >
            {flag} {name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

LanguageSelector.propTypes = {
  open: PropTypes.bool.isRequired,
  setOpen: PropTypes.func.isRequired,
  lang: PropTypes.string.isRequired,
  setLang: PropTypes.func.isRequired,
  countries: PropTypes.arrayOf(
    PropTypes.shape({
      flag: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  buttonProps: PropTypes.object,
  menuListClass: PropTypes.string,
};

export function NavbarForDropdownWithMultipleLanguages() {
  const [openLangMenuDesktop, setOpenLangMenuDesktop] = React.useState(false);
  const [openLangMenuMobile, setOpenLangMenuMobile] = React.useState(false);
  const [openNav, setOpenNav] = React.useState(false);
  const [lang, setLang] = React.useState("English");

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar className="bg-black mx-auto -xl px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img
            className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 w-auto-24 h-24"
            src="chaindev.png"
            alt="logo chaindev"
          />
        </Typography>

        {/* Liens de navigation desktop */}
        <div className="hidden lg:block">
          <NavLinks links={navLinks} />
        </div>

        {/* Sélecteur de langue desktop */}
        <div className="hidden lg:flex items-center gap-2">
          <LanguageSelector
            open={openLangMenuDesktop}
            setOpen={setOpenLangMenuDesktop}
            lang={lang}
            setLang={setLang}
            countries={countries}
            menuListClass="w-24"
          />
        </div>

        {/* Bouton menu mobile */}
        <IconButton
          className="lg:hidden relative z-50 flex items-center justify-center"
          variant="text"
          onClick={() => setOpenNav((prev) => !prev)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </IconButton>
      </div>

      {/* Menu mobile */}
      {openNav && (
        <Collapse open={openNav} className="lg:hidden">
          <div className="flex flex-col gap-4 mt-2">
            <NavLinks links={navLinks} direction="col" />
            <LanguageSelector
              open={openLangMenuMobile}
              setOpen={setOpenLangMenuMobile}
              lang={lang}
              setLang={setLang}
              countries={countries}
              buttonProps={{ fullWidth: true }}
              menuListClass="w-full"
            />
          </div>
        </Collapse>
      )}
    </Navbar>
  );
}

export default NavbarForDropdownWithMultipleLanguages;
