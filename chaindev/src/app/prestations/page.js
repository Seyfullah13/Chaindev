// components/Prestations.jsx
"use client";

import Link from "next/link";

export default function Prestations() {
  const cards = [
    {
      title: "Site One Page",
      price: "à partir de 1000 €",
      features: [
        "Design personnalisé aux couleurs de votre marque",
        "Responsive (mobile & tablette)",
        "Contenu structuré pour une navigation fluide sur une seule page",
        "Formulaire de contact intégré",
        "SEO de base (méta, performance)",
        "Mise en ligne et configuration du nom de domaine",
      ],
    },
    {
      title: "Site Multi-pages",
      price: "à partir de 2000 €",
      features: [
        "Architecture claire",
        "Design professionnel",
        "Navigation intuitive optimisée",
        "Intégration médias",
        "Formulaire contact",
        "Responsive multi-device",
        "CMS simplifié",
      ],
    },
    {
      title: "Refonte de site",
      price: "à partir de 2500 €",
      features: [
        "Audit complet",
        "Nouveau design ergonomique",
        "Réorganisation UX",
        "Performance renforcée",
        "Mise à jour contenus",
        "SEO technique",
        "Formation",
      ],
    },
    {
      title: "Site multilingue",
      price: "à partir de 2500 €",
      features: [
        "Installation multi-langue",
        "2 langues incluses",
        "Traduction clé",
        "SEO hreflang",
        "Menus/formulaires par langue",
        "Tests par version",
        "Formation traduction",
      ],
    },
    {
      title: "Hébergement & Maintenance",
      price: "à partir de 50 €/mois",
      features: [
        "Sauvegardes automatiques",
        "SSL inclus",
        "Mises à jour CMS",
        "Monitoring 24/7",
        "Optimisation cache",
        "Support prioritaire",
      ],
    },
  ];

  return (
    <section className="bg-base-200 py-12 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center text-base-content">
        Mes Prestations
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-7xl px-4">
        {cards.map((card, idx) => {
          const cardId = `prestation-${idx}`;
          const descId = `${cardId}-desc`;

          return (
            <article
              key={cardId}
              id={cardId}
              role="group"
              tabIndex={0}
              aria-labelledby={`${cardId}-title`}
              aria-describedby={descId}
              className="
                bg-base-100 rounded-lg p-6
                shadow-md transition-transform transition-shadow duration-300
                hover:shadow-2xl hover:-translate-y-2 hover:ring-4 hover:ring-primary/40
                hover:bg-gradient-to-br hover:from-primary/5 hover:to-primary/10
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2
                active:scale-95
                w-full
              "
            >
              <header className="flex justify-between items-start gap-4">
                <h3
                  id={`${cardId}-title`}
                  className="text-2xl font-bold text-base-content"
                >
                  {card.title}
                </h3>
                <span className="text-lg font-semibold text-base-content">
                  {card.price}
                </span>
              </header>

              <ul
                id={descId}
                className="mt-4 space-y-2 text-sm text-base-content"
                aria-label={`${card.title} - caractéristiques`}
              >
                {card.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <svg
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 text-success mt-1 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-base-content">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link
                  href="/contact"
                  aria-label={`${card.title} - contacter`}
                  className="inline-block w-full"
                >
                  <button
                    type="button"
                    className="btn btn-primary w-full text-center focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                  >
                    {card.title === "Hébergement & Maintenance" ? "En savoir plus" : "Réservez votre projet"}
                  </button>
                </Link>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
