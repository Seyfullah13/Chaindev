import React from "react";
import PropTypes from "prop-types"; // Import de PropTypes en haut du fichier
import image from "../../assets/images/Bacgroundimg.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "@tanstack/react-router";

// Composant CheckIcon
function CheckIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className="h-3 w-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 12.75l6 6 9-13.5"
      />
    </svg>
  );
}

// Données des offres
const plans = [
  {
    id: "vitrine",
    title: "Site Vitrine",
    price: "1080 € TTC",
    features: [
      "Pages : Accueil, À propos, Services, Contact",
      "Formulaire de contact, Google Maps, galerie d’images",
      "Accessibilité WCAG 2.1, mobile/tablette",
      "SEO on-page (balises, sitemap, meta)",
      "CI/CD GitLab, back-office simple",
    ],
  },
  {
    id: "ecommerce",
    title: "Site E-Commerce",
    price: "2160 € TTC",
    features: [
      "Catalogue produits, filtres dynamiques",
      "Paiement Stripe/PayPal, tunnel de commande",
      "Gestion des stocks & commandes via back-office",
      "Statistiques via Matomo ou Google Analytics",
    ],
  },
  {
    id: "traduction",
    title: "Traduction Web",
    price: "30 € TTC / page / langue",
    features: [
      "Traduction contenus, interface & navigation",
      "Intégration Symfony Translator",
      "Routage i18n, URL localisées & fallback",
      "Optimisation SEO Multilingue",
      "Ajout de langue possible à tout moment",
    ],
  },
  {
    id: "hebergement",
    title: "Hébergement & Maintenance",
    price: "300 € TTC / mois",
    features: [
      "Hébergement OVH cloud/VPS, SSL Let's Encrypt",
      "Déploiement CI/CD automatisé, tests unitaires & fonctionnels",
      "3 évolutions/corrections mensuelles",
      "Monitoring uptime & Core Web Vitals",
      "Mise à jour de sécurité Symfony",
    ],
  },
];

// Composant générique de carte
export function PlanCard({ title, price, features }) {
  return (
    <Card className="w-full max-w-[20rem] p-8 bg-black bg-opacity-90" shadow>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
      >
        <Typography variant="small" color="white" className="uppercase">
          {title}
        </Typography>
        <Typography
          variant="h1"
          color="white"
          className="mt-6 flex justify-center gap-1 text-7xl"
        >
          <span className="mt-2 text-4xl">{price}</span>
        </Typography>
      </CardHeader>
      <CardBody className="p-0">
        <ul className="flex flex-col gap-4">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-4 text-white">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal">{f}</Typography>
            </li>
          ))}
        </ul>
      </CardBody>
      <CardFooter className="mt-12 p-0">
        <Button size="lg" color="white" fullWidth className="p-4">
        <Link   to="/contact" prefetch="intent">
          
          Obtenir un devis
        </Link>
         </Button>
      </CardFooter>
    </Card>
  );
}

PlanCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// Composant latéral (side cards)
function SideCard({ caption, children }) {
  return (
    <div className="relative flex flex-col my-6 bg-black shadow-sm border border-slate-200 rounded-lg w-80 p-4">
      <div className="mx-3 mb-2 border-b border-slate-200 pt-3 pb-2 px-1">
        <span className="text-sm font-medium text-white">{caption}</span>
      </div>
      <div className="p-2 text-white">{children}</div>
    </div>
  );
}

SideCard.propTypes = {
  caption: PropTypes.string.isRequired,
  children: PropTypes.node,
};

function Services() {
  return (
    <main
      role="main"
      aria-label="Présentation Chaindev - Services"
      className="relative w-full min-h-screen bg-cover bg-right-top flex flex-col items-center justify-start px-4 pt-6 sm:pt-8 md:pt-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1
        id="about-title"
        className="text-center text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 bg-black rounded-lg p-2 sm:p-6 shadow-lg"
      >
        Services
      </h1>
      <h2 className="text-white text-xl mb-2 bg-black rounded-lg p-2 sm:p-6 shadow-lg">
        Chaindev - Développeur Freelance
      </h2>
      <h3 className="text-white mb-12 bg-black rounded-lg p-2 sm:p-6 shadow-lg">
        Accompagnement complet, de la création à la maintenance, pour un site
        web performant et évolutif.
      </h3>

      {/* Offres */}
      <div className="flex flex-wrap justify-center gap-10 w-full">
        {plans.map((plan) => (
          <PlanCard
            key={plan.id}
            title={plan.title}
            price={plan.price}
            features={plan.features}
          />
        ))}
      </div>

      {/* SideCards placées sous les offres */}
      <div className="flex flex-col items-center gap-6 mt-10 w-full md:flex-row md:justify-between md:px-4">
        <SideCard caption="Pourquoi Choisir Chaindev?">
          <ul className="list-disc list-inside gap-6">
            <li>Infrastructure OVH maîtrisée : fiabilité & performance</li>
            <li>Tarifs TTC transparents, compétitifs</li>
            <li>Accompagnement complet : analyse, développement, support</li>
            <li>Multilingue natif (FR/EN), autres langues sur demande</li>
            <li>Approche pédagogique : reporting clair & formation</li>
          </ul>
        </SideCard>

        <SideCard caption="Prêt à lancer votre projet?">
          <p>Contactez-moi pour un audit gratuit et un devis personnalisé.</p>
        </SideCard>
      </div>
    </main>
  );
}

// Export en pied de page
export default Services;
