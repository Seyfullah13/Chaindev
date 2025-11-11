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
        "Mise en ligne et configuration du nom de domaine"
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
        "CMS simplifié"
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
        "Formation"
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
        "Formation traduction"
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
        "Support prioritaire"
      ],
    },
  ];

  return (
    <section className="bg-base-200 py-12 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center animate-fade">
        Mes Prestations
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="
              card w-full sm:w-80 md:w-96 bg-base-100
              shadow-md transition-all duration-500
              hover:shadow-xl hover:-translate-y-2 hover:ring-2 hover:ring-primary/30
              animate-fade-up
            "
            style={{ animationDelay: `${idx * 120}ms` }}
          >
            <div className="card-body flex flex-col">
              <div className="flex justify-between items-center">
                <h3
                  className="
                    text-2xl font-bold transition-colors duration-300
                    hover:text-primary
                  "
                >
                  {card.title}
                </h3>
                <span className="text-lg font-semibold">{card.price}</span>
              </div>

              <ul className="mt-6 flex flex-col gap-2 text-sm">
                {card.features.map((feature, i) => (
                  <li
                    key={i}
                    className="
                      flex items-center gap-2
                      transition-all duration-300
                      hover:translate-x-1
                    "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="
                        w-4 h-4 text-success
                        transition-transform duration-300
                      "
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Link href="/contact">
                  <button
                    className="
                      btn btn-primary btn-block
                      hover:scale-105 hover:shadow-lg
                      active:scale-95
                      transition-all duration-300
                      animate-pulse hover:animate-none
                    "
                  >
                    {card.title === "Hébergement & Maintenance"
                      ? "En savoir plus"
                      : "Réservez votre projet"}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
