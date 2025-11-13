"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Footer() {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="footer sm:footer-horizontal bg-base-100 text-base-content items-center p-4" role="contentinfo" aria-label="Pied de page">
      <div className="flex items-center gap-3">
        <Image src="/icon.jpg" alt="Logo Chaindev" width={40} height={40} />
        <p className="text-sm">© {year ?? "…"} Chaindev. Tous droits réservés.</p>
      </div>

      <nav className="flex gap-4 md:place-self-center md:justify-self-end" aria-label="Liens réseaux sociaux">
        <a href="https://github.com/Seyfullah13" aria-label="Voir mon profil GitHub (ouvre dans un nouvel onglet)" target="_blank" rel="noopener noreferrer" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded">
          <span className="sr-only">GitHub</span>
          <Image src="/github-icon.svg" width={24} height={24} alt="Logo GitHub" />
        </a>

        <a href="https://www.linkedin.com/in/seyfullah-ozdal/" aria-label="Voir mon profil LinkedIn (ouvre dans un nouvel onglet)" target="_blank" rel="noopener noreferrer" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded">
          <span className="sr-only">LinkedIn</span>
          <Image src="/linkedin-icon.svg" width={24} height={24} alt="Logo LinkedIn" />
        </a>

        <a href="https://www.instagram.com/chaindev13/" aria-label="Voir mon profil Instagram (ouvre dans un nouvel onglet)" target="_blank" rel="noopener noreferrer" className="focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded">
          <span className="sr-only">Instagram</span>
          <Image src="/instagram-icon.svg" width={24} height={24} alt="Logo Instagram" />
        </a>
      </nav>
    </footer>
  );
}
