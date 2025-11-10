import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content items-center p-4">
      <aside className="grid-flow-col items-center">
        <Image src="/icon.jpg" width={40} height={40} alt="logoChaindev" />
        <p>Copyright © {new Date().getFullYear()} - Tous droits réservés</p>
      </aside>

      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://github.com/Seyfullah13" aria-label="Github">
          <Image src="/github-icon.svg" width={24} height={24} alt="logoGithub" />
        </a>

        <a href="https://www.linkedin.com/in/seyfullah-ozdal/" aria-label="LinkedIn">
          <Image src="/linkedin-icon.svg" width={24} height={24} alt="logoLinkedin" />
        </a>

        <a href="https://www.instagram.com/chaindev13/" aria-label="Instagram">
          <Image src="/instagram-icon.svg" width={24} height={24} alt="logoInstagram" />
        </a>
      </nav>
    </footer>
  );
}
