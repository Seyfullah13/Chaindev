import React from "react";
import image from "../assets/images/Bacgroundimg.png";

export default function LegalNotice() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start px-4 py-8 overflow-auto"
      style={{ backgroundImage: `url(${image})` }}
      aria-label="Mentions légales Chaindev"
    >
      <section className="legal-notice bg-white bg-opacity-90 p-6 max-w-4xl mx-auto rounded-lg shadow-md">
        <h1>Mentions Légales</h1>
        <p>
          <strong>Dernière mise à jour :</strong> 30 juin 2025
        </p>

        <h2>1. Présentation du site</h2>
        <h3>1.1 Informations légales</h3>
        <ul>
          <li>
            <strong>Dénomination sociale :</strong> Chaindev
          </li>
          <li>
            <strong>Forme juridique :</strong> Entreprise Individuelle
          </li>
          <li>
            <strong>Adresse du siège social :</strong> 20 rue du 11 novembre,
            Résidence de Gandaillat, 63370 Lempdes
          </li>
          <li>
            <strong>SIRET :</strong> 943 744 482 00010
          </li>
          <li>
            <strong>Directeur de la publication :</strong> Mr Ozdal Seyfullah
          </li>
          <li>
            <strong>Email de contact :</strong>{" "}
            <a href="mailto:chaindev13@proton.me">chaindev13@proton.me</a>
          </li>
        </ul>

        <h3>1.2 Hébergement</h3>
        <ul>
          <li>
            <strong>Hébergeur du site :</strong> OVH
          </li>
          <li>
            <strong>Adresse :</strong> 2 rue Kellermann, 59100 Roubaix, France
          </li>
        </ul>

        <h2>2. Conditions générales d'utilisation</h2>
        <p>
          L’utilisation du site{" "}
          <a
            href="https://chaindev.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            chaindev.fr
          </a>{" "}
          implique l’acceptation pleine et entière des présentes conditions
          générales d’utilisation. Ces conditions peuvent être modifiées à tout
          moment, sans préavis. Les utilisateurs sont invités à les consulter
          régulièrement.
        </p>

        <h3>2.1 Accès au site</h3>
        <p>
          Le site est accessible gratuitement à tout utilisateur disposant d’un
          accès à Internet. Tous les frais afférents à cet accès (matériel,
          connexion, etc.) sont à la charge de l’utilisateur.
        </p>
        <p>
          L’accès au site peut être interrompu par l’éditeur pour des raisons de
          maintenance ou de force majeure, sans obligation de préavis.
        </p>

        <h3>2.2 Contenu du site</h3>
        <p>
          Tous les éléments du site (marques, textes, images, sons, vidéos,
          etc.) sont protégés par les lois sur la propriété intellectuelle.
          Toute reproduction ou exploitation sans autorisation écrite est
          strictement interdite.
        </p>

        <h3>2.3 Gestion du site</h3>
        <ul>
          <li>
            Suspension, interruption ou limitation de l’accès à tout ou partie
            du site
          </li>
          <li>
            Suppression de toute information pouvant perturber le fonctionnement
          </li>
          <li>Suspension temporaire du site pour des mises à jour</li>
        </ul>

        <h3>2.4 Responsabilités</h3>
        <p>
          L’éditeur ne saurait être tenu responsable en cas de défaillance
          technique empêchant l’accès au site ou à ses fonctionnalités.
        </p>
        <p>
          L’utilisateur est seul responsable de la protection de son matériel et
          de ses données lors de sa navigation.
        </p>

        <h3>2.5 Liens hypertextes</h3>
        <p>
          Le site peut contenir des liens vers d’autres sites. L’éditeur
          n’assume aucune responsabilité concernant le contenu de ces sites
          tiers.
        </p>

        <h2>3. Services fournis</h2>
        <p>
          Le site{" "}
          <a
            href="https://chaindev.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            chaindev.fr
          </a>{" "}
          propose des services de développement web, de création de sites
          internet, de maintenance et d’hébergement. Ces informations sont non
          contractuelles sauf mention contraire explicite.
        </p>

        <h2>4. Droit applicable et juridiction compétente</h2>
        <p>
          Tout litige lié à l’utilisation du site est soumis au droit français.
          Les tribunaux compétents de Clermont-Ferrand seront seuls compétents.
        </p>

        <h2>5. Contact</h2>
        <p>
          Pour toute question relative aux présentes mentions légales, vous
          pouvez nous contacter par email :{" "}
          <a href="mailto:chaindev13@proton.me">chaindev13@proton.me</a>
        </p>
      </section>
    </main>
  );
}
