import React from "react";
import PropTypes from "prop-types";
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
import { useTranslation } from "react-i18next";

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

// Données des offres (on conserve uniquement les ids et clés de traduction)
const plans = [
  {
    id: "vitrine",
    titleKey: "services.plans.vitrine.title",
    priceKey: "services.plans.vitrine.price",
    featuresKey: "services.plans.vitrine.features",
  },
  {
    id: "ecommerce",
    titleKey: "services.plans.ecommerce.title",
    priceKey: "services.plans.ecommerce.price",
    featuresKey: "services.plans.ecommerce.features",
  },
  {
    id: "traduction",
    titleKey: "services.plans.traduction.title",
    priceKey: "services.plans.traduction.price",
    featuresKey: "services.plans.traduction.features",
  },
  {
    id: "hebergement",
    titleKey: "services.plans.hebergement.title",
    priceKey: "services.plans.hebergement.price",
    featuresKey: "services.plans.hebergement.features",
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
          <Link to="/contact" prefetch="intent">
            {/** Traduction du CTA */}
            {title /* ou t("services.cta.button") si vous préférez */}
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

// Composant principal
export default function Services() {
  const { t } = useTranslation();

  return (
    <main
      role="main"
      aria-label={t("services.pageTitle")}
      className="relative w-full min-h-screen bg-cover bg-right-top flex flex-col items-center justify-start px-4 pt-6 sm:pt-8 md:pt-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1
        id="services-title"
        className="text-center text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-8 bg-black rounded-lg p-2 sm:p-6 shadow-lg"
      >
        {t("services.pageTitle")}
      </h1>
      <h2 className="text-white text-xl mb-2 bg-black rounded-lg p-2 sm:p-6 shadow-lg">
        {t("services.subtitle")}
      </h2>
      <h3 className="text-white mb-12 bg-black rounded-lg p-2 sm:p-6 shadow-lg">
        {t("services.description")}
      </h3>

      {/* Offres */}
      <div className="flex flex-wrap justify-center gap-10 w-full">
        {plans.map(({ id, titleKey, priceKey, featuresKey }) => (
          <PlanCard
            key={id}
            title={t(titleKey)}
            price={t(priceKey)}
            features={t(featuresKey, { returnObjects: true })}
          />
        ))}
      </div>

      {/* SideCards */}
      <div className="flex flex-col items-center gap-6 mt-10 w-full md:flex-row md:justify-between md:px-4">
        <SideCard caption={t("services.cards.whyChoose.caption")}>
          <ul className="list-disc list-inside gap-6">
            {t("services.cards.whyChoose.items", { returnObjects: true }).map(
              (item) => (
                <li key={item}>{item}</li>
              )
            )}
          </ul>
        </SideCard>

        <SideCard caption={t("services.cards.ready.caption")}>
          <p>{t("services.cards.ready.text")}</p>
        </SideCard>
      </div>
    </main>
  );
}
