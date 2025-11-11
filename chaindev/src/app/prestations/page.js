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
      unavailable: []
    },
    {
      title: "Site Multi‑pages",
      price: "à partir de 2000 €",
      features: [
        "Architecture claire : pages dédiées (Accueil, À propos, Services, Contact, etc.)",
        "Design professionnel et cohérent avec votre identité",
        "Navigation intuitive et maillage interne optimisé",
        "Intégration médias (photos, vidéos) et contenus fournis",
        "Formulaire de contact et liens réseaux sociaux",
        "Responsive (mobile, tablette, desktop)",
        "CMS simple pour gérer vos contenus en autonomie"
      ],
      unavailable: []
    },
    {
      title: "Refonte de site",
      price: "à partir de 2500 €",
      features: [
        "Audit complet : design, ergonomie, SEO",
        "Nouveau design ergonomique et conforme à votre charte",
        "Réorganisation de l’architecture et du parcours utilisateur",
        "Optimisation performance et responsive (mobile revu)",
        "Mise à jour des contenus (textes et visuels)",
        "SEO on‑site renforcé : balises, titres, SEO technique",
        "Formation ou documentation pour gérer le site en autonomie"
      ],
      unavailable: []
    },
    {
      title: "Site multilingue",
      price: "à partir de 2500 €",
      features: [
        "Installation multilingue (plugin ou config adaptée)",
        "2 langues (français + 1 langue, extensions possibles)",
        "Traduction professionnelle ou guide de traduction pour les contenus clés",
        "SEO multilingue : URL, balises, meta et hreflang optimisés",
        "Menus et formulaires adaptés par langue ",
        "Tests qualité sur chaque version",
        "Formation pour gérer traductions et mises à jour"


      ],
      unavailable: []
    },
    {
      title: "Hébergement & Maintenance",
      price: " à partir de 50 €/mois",
      features: [
        "Hébergement performant avec sauvegardes automatiques",
        "SSL installé pour sécuriser les échanges",
        "Maintenance technique : mises à jour CMS, plugins et correctifs",
        "Monitoring 24/7 et interventions en cas de problème",
        "Optimisation performance (cache, temps de chargement)",
        "Support prioritaire pour corrections et petites évolutions"
      ],
      unavailable: []

      

    }
  ];

  return (
    <section className="bg-base-200 py-12 flex flex-col items-center">
      <h2 className="text-3xl sm:text-4xl font-extrabold mb-10 text-center">Mes Prestations</h2>
      <div className="flex flex-wrap justify-center gap-6">
        {cards.map((card, idx) => (
          <div
            key={idx}
            className="card w-full sm:w-80 md:w-96 bg-base-100 shadow-md hover:shadow-lg hover:scale-105 transition-transform duration-300 flex flex-col"
          >
            <div className="card-body flex flex-col">
              <span className="badge badge-xs badge-warning mb-2">Most Popular</span>
              <div className="flex justify-between items-center">
                <h3 className="text-3xl font-bold">{card.title}</h3>
                <span className="text-xl font-semibold">{card.price}</span>
              </div>
              <ul role="list" className="mt-6 flex flex-col gap-2 text-sm">
                {card.features.map((feature, i) => (
                  <li
                    key={i}
                    className={`flex items-center gap-2 ${
                      card.unavailable.includes(i) ? "opacity-50 line-through text-base-content/50" : ""
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`w-4 h-4 ${card.unavailable.includes(i) ? "text-base-content/50" : "text-success"}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <button className="btn btn-primary btn-block hover:scale-105 transition-transform duration-300">
                  {card.price === "Contact us" ? "En savoir plus" : "Reservez votre projet"}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
