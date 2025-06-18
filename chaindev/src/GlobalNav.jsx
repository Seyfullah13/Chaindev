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

export function NavbarForDropdownWithMultipleLanguages() {
  const [openLangMenu, setOpenLangMenu] = React.useState(false);
  const [openNav, setOpenNav] = React.useState(false);
  const [lang, setLang] = React.useState("English");

  React.useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { label: "Accueil", href: "#" },
    { label: "A propos", href: "#" },
    { label: "Services", href: "#" },
    { label: "Portfolio", href: "#" },
    { label: "Contact", href: "#" },
  ];

  const countries = [
    { flag: "🇺🇸", name: "English" },
    { flag: "🇪🇸", name: "Spain" },
    { flag: "🇫🇷", name: "France" },
    { flag: "🇩🇪", name: "Germany" },
  ];

  return (
    <Navbar className="bg-black mx-auto  px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as="a"
          href="#"
          className="mr-4 cursor-pointer py-1.5 font-medium"
        >
          <img className="w-10 h-10" src="chaindev.png" alt="logo chaindev" />
        </Typography>

        {/* Desktop nav links */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
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
        </div>

        {/* Language selector desktop */}
        <div className="hidden lg:flex items-center gap-2">
          <Menu open={openLangMenu} handler={setOpenLangMenu}>
            <MenuHandler>
              <Button
                size="sm"
                variant="outlined"
                className="flex items-center gap-2"
              >
                <span>{countries.find((c) => c.name === lang)?.flag}</span>
                {lang}
                <ChevronDownIcon
                  strokeWidth={2.5}
                  className={
                    openLangMenu ? "transform rotate-180 h-4 w-4" : "h-4 w-4"
                  }
                />
              </Button>
            </MenuHandler>
            <MenuList className="max-h-72 w-24">
              {countries.map(({ name, flag }) => (
                <MenuItem
                  key={name}
                  className="flex gap-2"
                  onClick={() => setLang(name)}
                >
                  {flag} {name}
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </div>

        {/* Mobile menu toggle */}
        {/* Mobile menu toggle with higher z-index */}
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

      {/* Conditionally render mobile collapse */}
      {openNav && (
        <Collapse open={openNav} className="lg:hidden">
          <div className="flex flex-col gap-4 mt-2">
            {/* Mobile nav links */}
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
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

            {/* Mobile language selector */}
            <Menu
              open={openLangMenu}
              handler={setOpenLangMenu}
              placement="bottom"
            >
              <MenuHandler>
                <Button
                  fullWidth
                  size="sm"
                  variant="outlined"
                  className="flex items-center justify-center gap-2"
                >
                  <span>{countries.find((c) => c.name === lang)?.flag}</span>
                  {lang}
                  <ChevronDownIcon
                    strokeWidth={2.5}
                    className={
                      openLangMenu ? "transform rotate-180 h-4 w-4" : "h-4 w-4"
                    }
                  />
                </Button>
              </MenuHandler>
              <MenuList className="max-h-72 w-full">
                {countries.map(({ name, flag }) => (
                  <MenuItem
                    key={name}
                    className="flex gap-2"
                    onClick={() => setLang(name)}
                  >
                    {flag} {name}
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>
          </div>
        </Collapse>
      )}
    </Navbar>
  );
}

export default NavbarForDropdownWithMultipleLanguages;
