import React from "react";
import image from "../../assets/images/Bacgroundimg.png";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

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

export function PricingCard() {
  return (
    <>
      <Card
        className="w-full max-w-[20rem] p-8 bg-black bg-opacity-90 "
        shadow={true}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            Site Vitrine
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl"> Forfait :1080 € TTC </span>{" "}
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                Pages : Accueil, A propos, Services, Contact
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                Formulaire de contact, Google Maps, galerie d'images
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                Accessibilité WCAG 2.1, mobile/tablette
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                {" "}
                SEO on-page (balises,sitemap,meta)
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                {" "}
                CI/CD Gitlab, back-office simple
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="white"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Obtenir un devis
          </Button>
        </CardFooter>
      </Card>
      <Card
        className="w-full max-w-[20rem] p-8 bg-black bg-opacity-90"
        shadow={true}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            Site E-Commerce
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl"> Forfait :2160 € TTC </span>{" "}
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                Catalogue produits, filtres dynamiques
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                Paiement Stripe/Paypal, tunnel de commande
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                Gestion des stocks & commandes via back-office
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                {" "}
                Statistiques via Matomo ou Google Analytics
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="white"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Obtenir un devis
          </Button>
        </CardFooter>
      </Card>
      <Card
        className="w-full max-w-[20rem] p-8 bg-black bg-opacity-90"
        shadow={true}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase"
          >
            Traduction Web
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl"> 30 € TTC /page /langue </span>{" "}
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                Traduction contenus,interface & navigation
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                Integration Symfony Translator
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                Routage i18n, URL localisées & fallback
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                {" "}
                Optimisation SEO Multilingue
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                {" "}
                Ajout de langue possible à tout moment
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="white"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Obtenir un devis
          </Button>
        </CardFooter>
      </Card>
      <Card
        className="w-full max-w-[20rem] p-8 bg-black bg-opacity-90"
        shadow={true}
      >
        <CardHeader
          floated={false}
          shadow={false}
          color="transparent"
          className="m-0 mb-8 rounded-none border-b border-white/10 pb-8 text-center"
        >
          <Typography
            variant="small"
            color="white"
            className="font-normal uppercase text-white"
          >
            Hébergement & Maintenance
          </Typography>
          <Typography
            variant="h1"
            color="white"
            className="mt-6 flex justify-center gap-1 text-7xl font-normal"
          >
            <span className="mt-2 text-4xl "> Forfait 300€ TTC /mois</span>{" "}
          </Typography>
        </CardHeader>
        <CardBody className="p-0">
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                Hébergement OVH cloud/VPS, SSL Let's Encrypt
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                Déploiement CI/CD automatisé ,tests unitaires & fonctionnels
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                3 évolutuions/corrections mensuelles
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                {" "}
                Monitoring uptime & Core Web Vitals
              </Typography>
            </li>
            <li className="flex items-center gap-4">
              <span className="rounded-full border border-white/20 bg-white/20 p-1">
                <CheckIcon />
              </span>
              <Typography className="font-normal text-white">
                {" "}
                Mise à jour de sécurité Symfony
              </Typography>
            </li>
          </ul>
        </CardBody>
        <CardFooter className="mt-12 p-0">
          <Button
            size="lg"
            color="white"
            className="hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
            ripple={false}
            fullWidth={true}
          >
            Obtenir un devis
          </Button>
        </CardFooter>
      </Card>

      <div className="relative flex flex-col my-6 bg-black shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
          <span className="text-sm font-medium text-slate-600 text-white">
            Pourquoi Choisir Chaindev?
          </span>
        </div>

        <div className="p-4">
          <ul>
            <li className="text-white">
              {" "}
              Infrastructure OVH maîtrisée : fiabilité & performance garanties
            </li>
            <li className="text-white">
              {" "}
              Tarifs TTC transparents, compétitifs
            </li>
            <li className="text-white">
              {" "}
              Accompagnement complet : analyse, développement, déploiement,
              support
            </li>
            <li className="text-white">
              {" "}
              Multilingues natif( FR/EN), autres langues sur demande
            </li>
            <li className="text-white">
              {" "}
              Approche pédagogique: reporting clair & formation utilisateur
            </li>
          </ul>
        </div>
      </div>
      <div className="relative flex flex-col my-6 bg-black shadow-sm border border-slate-200 rounded-lg w-96">
        <div className="mx-3 mb-0 border-b border-slate-200 pt-3 pb-2 px-1">
          <span className="text-sm font-medium text-slate-600 text-white">
            Pret à lancer votre projet multilingue?
          </span>
        </div>

        <div className="p-4">
          <p className="text-white">
            {" "}
            Contactez-moi pour un audit gratuit et un devis personnalisé.
          </p>
        </div>
      </div>
    </>
  );
}

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
        className="text-center text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8"
      >
        Services
      </h1>
      <h2 className="text-white text-xl mb-2">
        Chaindev-Developpeur Freelance
      </h2>
      <h3 className="text-white mb-12">
        Accompagnement complet, de la création à la maintenance, pour un site
        web performant et évolutif.
      </h3>
      <div className="flex justify-center items-center w-full gap-12">
        <PricingCard />
      </div>
    </main>
  );
}

export default Services;
