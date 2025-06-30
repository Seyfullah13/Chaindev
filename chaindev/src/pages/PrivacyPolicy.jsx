import React from "react";
import image from "../assets/images/Bacgroundimg.png";

function DataCollectionSection() {
  return (
    <section className="p-4 bg-white bg-opacity-80 rounded-xl shadow-lg">
      <h2>2. COLLECTE DES DONNÉES PERSONNELLES</h2>
      <h3>2.1 DONNÉES QUE VOUS NOUS FOURNISSEZ DIRECTEMENT</h3>
      <p>
        Nous collectons les données personnelles que vous nous fournissez
        volontairement, notamment lorsque vous :
      </p>
      <ul>
        <li>Remplissez notre formulaire de contact</li>
        <li>Nous contactez par e-mail</li>
      </ul>
      <p>Ces informations peuvent inclure :</p>
      <ul>
        <li>Vos nom et prénom</li>
        <li>Votre adresse e-mail</li>
        <li>Votre numéro de téléphone (facultatif)</li>
      </ul>

      <h3>2.2 DONNÉES COLLECTÉES AUTOMATIQUEMENT</h3>
      <p>
        Lorsque vous naviguez sur notre site, nous pouvons collecter
        automatiquement certaines informations techniques, notamment :
      </p>
      <ul>
        <li>Votre adresse IP</li>
        <li>Le type et la version de votre navigateur</li>
        <li>Votre système d’exploitation</li>
        <li>Les pages consultées sur notre site</li>
        <li>La date et l’heure de votre visite</li>
        <li>Les temps de consultation des pages</li>
        <li>Les erreurs de téléchargement</li>
      </ul>

      <h3>2.3 COOKIES ET TECHNOLOGIES SIMILAIRES</h3>
      <p>
        Notre site utilise des cookies et d’autres technologies similaires pour
        améliorer votre expérience de navigation et analyser l’utilisation du
        site.
      </p>
      <p>Types de cookies utilisés :</p>
      <ul>
        <li>Cookies essentiels : nécessaires au fonctionnement du site</li>
        <li>
          Cookies d’analyse/performance : nous utilisons Google Analytics pour
          comprendre comment les visiteurs interagissent avec le site
        </li>
      </ul>
      <p>
        Vous pouvez gérer vos préférences en matière de cookies via les
        paramètres de votre navigateur.
      </p>
    </section>
  );
}

export default function PrivacyPolicy() {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start px-4 py-8"
      style={{ backgroundImage: `url(${image})` }}
    >
      <main className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg max-w-4xl w-full">
        <h1>POLITIQUE DE CONFIDENTIALITÉ</h1>
        <p>
          <strong>Dernière mise à jour :</strong> 30 juin 2025
        </p>

        <h2>1. INTRODUCTION</h2>
        <p>
          Chaindev s’engage à protéger la vie privée des visiteurs et
          utilisateurs de son site web{" "}
          <a
            href="https://chaindev.fr"
            target="_blank"
            rel="noopener noreferrer"
          >
            chaindev.fr
          </a>
          . La présente politique de confidentialité explique comment nous
          collectons, utilisons, partageons et protégeons vos informations
          personnelles. En utilisant notre site, vous acceptez les pratiques
          décrites dans la présente politique de confidentialité.
        </p>

        <DataCollectionSection />

        <h2>3. UTILISATION DES DONNÉES PERSONNELLES</h2>
        <ul>
          <li>Répondre à vos demandes de contact</li>
          <li>Améliorer, personnaliser et développer notre site</li>
          <li>Comprendre et analyser comment vous utilisez notre site</li>
          <li>Détecter, prévenir et résoudre les problèmes techniques</li>
        </ul>

        <h2>4. PARTAGE DES DONNÉES PERSONNELLES</h2>
        <h3>4.1 PRESTATAIRES DE SERVICES</h3>
        <p>
          Nous pouvons partager vos données avec des prestataires tiers pour
          assurer le fonctionnement du site. Ces prestataires n’ont accès aux
          données que pour exécuter ces tâches.
        </p>

        <h3>4.2 OBLIGATIONS LÉGALES</h3>
        <p>
          Nous pouvons divulguer vos informations si la loi l’exige ou en
          réponse à des demandes légales valides.
        </p>

        <h3>4.3 PROTECTION DE NOS DROITS</h3>
        <p>
          Nous pouvons divulguer vos informations en cas de suspicion
          d’activités illégales, fraude, ou pour protéger la sécurité de toute
          personne.
        </p>

        <h2>5. CONSERVATION DES DONNÉES</h2>
        <p>
          Les données sont conservées le temps nécessaire aux finalités prévues,
          sauf obligation légale contraire.
        </p>

        <h2>6. SÉCURITÉ DES DONNÉES</h2>
        <p>
          Nous appliquons des mesures de sécurité techniques et
          organisationnelles, mais aucune méthode n’est totalement sécurisée.
        </p>

        <h2>7. VOS DROITS</h2>
        <ul>
          <li>
            Droit d’accès, rectification, effacement, limitation, portabilité
          </li>
          <li>Droit d’opposition</li>
          <li>Droit de retirer votre consentement à tout moment</li>
        </ul>
        <p>
          Contactez-nous à{" "}
          <a href="mailto:chaindev13@proton.me">chaindev13@proton.me</a> pour
          exercer vos droits.
        </p>

        <h2>8. TRANSFERTS INTERNATIONAUX DE DONNÉES</h2>
        <p>
          Vos données peuvent être transférées hors UE, notamment via Google
          Analytics, avec des garanties conformes au RGPD.
        </p>

        <h2>9. LIENS VERS D'AUTRES SITES</h2>
        <p>
          Nous déclinons toute responsabilité concernant les politiques des
          sites tiers accessibles via des liens externes.
        </p>

        <h2>10. MODIFICATIONS DE LA POLITIQUE DE CONFIDENTIALITÉ</h2>
        <p>
          Nous pouvons modifier cette politique. Consultez-la régulièrement.
        </p>

        <h2>11. CONTACTEZ-NOUS</h2>
        <address>
          Chaindev
          <br />
          20 rue du 11 novembre, Résidence de Gandaillat
          <br />
          63370 Lempdes
          <br />
          Email : <a href="mailto:chaindev13@proton.me">chaindev13@proton.me</a>
        </address>
      </main>
    </div>
  );
}
