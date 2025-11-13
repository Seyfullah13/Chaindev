"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function WhoAmI() {
  useEffect(() => {
    const cards = document.querySelectorAll(".fade-card");
    if (!cards || cards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-index") || 0);
            setTimeout(() => {
              entry.target.classList.add("opacity-100", "translate-y-0");
            }, index * 150);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card, i) => {
      card.setAttribute("data-index", i.toString());
      observer.observe(card);
    });

    return () => {
      try {
        observer.disconnect();
      } catch (e) {
        /* ignore */
      }
    };
  }, []);

  const fadeCardClasses =
    "fade-card opacity-0 translate-y-4 transition-all duration-700 ease-out";

  return (
    <section
      className="w-full min-h-screen bg-base-200 flex items-center py-12"
      aria-labelledby="whoami-title"
    >
      <div className="max-w-7xl w-full mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative">
          {/* Texte gauche */}
          <article className="lg:col-span-8 w-full">
            <div className="px-0 md:px-0 max-w-3xl">
              <header className="mb-8">
                <h1
                  id="whoami-title"
                  className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-base-content"
                >
                  Qui suis-je ?
                </h1>
                <p className={`${fadeCardClasses} text-lg md:text-xl leading-7 text-base-content`}>
                  Développeur web freelance basé à <strong>Clermont-Ferrand</strong>, je conçois des{" "}
                  <strong>sites vitrines</strong> et <strong>applications sur-mesure</strong>, performants et
                  faciles à gérer. Ancien professionnel de la logistique et de la grande distribution,
                  je combine <strong>rigueur opérationnelle</strong> et <strong>sens du service</strong> pour livrer
                  des solutions concrètes et durables.
                </p>
              </header>

              {/* Compétences clés */}
              <section className="mb-8" aria-labelledby="competences-title">
                <h2
                  id="competences-title"
                  className={`${fadeCardClasses} text-2xl md:text-3xl font-semibold mb-4 text-base-content`}
                >
                  Compétences clés
                </h2>
                <ul className="grid gap-3">
                  {[
                    "Développement fullstack : code propre, sécurisé et maintenable.",
                    "Multilingue : français, anglais, espagnol, italien et turc.",
                    "SEO & performance : sites rapides, optimisés pour la visibilité.",
                    "Hébergement & maintenance : disponibilité, sauvegardes quotidiennes et SSL."
                  ].map((item, i) => (
                    <li
                      key={i}
                      tabIndex={0}
                      className={`${fadeCardClasses} card card-compact bg-base-100 p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:shadow-md transition-shadow cursor-pointer`}
                    >
                      <p className="text-base leading-7 m-0 text-base-content">{item}</p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Parcours */}
              <section className="mb-8" aria-labelledby="parcours-title">
                <h2
                  id="parcours-title"
                  className={`${fadeCardClasses} text-2xl md:text-3xl font-semibold mb-4 text-base-content`}
                >
                  Parcours en bref
                </h2>
                <p className={`${fadeCardClasses} text-lg leading-7 text-base-content`}>
                  Immersion en <strong>agence web (2022)</strong>, formation{" "}
                  <strong>Développeur Web et Web Mobile (AFPA, 2024)</strong>. Expériences passées en
                  logistique, vente et maintenance renforçant mon <strong>organisation</strong> et ma{" "}
                  <strong>réactivité</strong>.
                </p>
              </section>

              {/* Valeurs */}
              <section className="mb-8" aria-labelledby="valeurs-title">
                <h2
                  id="valeurs-title"
                  className={`${fadeCardClasses} text-2xl md:text-3xl font-semibold mb-4 text-base-content`}
                >
                  Valeurs
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { title: "Rigueur", desc: "Respect des délais et qualité technique." },
                    { title: "Transparence", desc: "Communication claire à chaque étape." },
                    { title: "Adaptabilité", desc: "Solutions sur-mesure et itérations rapides." },
                    { title: "Collaboration", desc: "Travail conjoint pour un résultat utile et durable." }
                  ].map((val, i) => (
                    <div
                      key={i}
                      tabIndex={0}
                      className={`${fadeCardClasses} card bg-base-100 p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 hover:shadow-md transition-shadow cursor-pointer`}
                    >
                      <h3 className="font-semibold mb-1 text-lg text-base-content">{val.title}</h3>
                      <p className="text-base leading-7 m-0 text-base-content">{val.desc}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>
          </article>

          {/* Ligne verticale */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-[66.6667%] w-px bg-base-content/30"></div>

          {/* Images droite */}
          <aside
            aria-label="Images illustratives"
            className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center gap-8"
          >
            <div className={`${fadeCardClasses} card bg-base-100 shadow-xl overflow-hidden rounded-2xl max-w-[360px] w-full`}>
              <figure className="relative aspect-[4/5] w-full">
                <Image
                  src="/Seyfullah.png"
                  alt="Portrait du développeur web freelance"
                  fill
                  sizes="(max-width: 1024px) 50vw, 360px"
                  className="object-cover"
                  priority
                />
              </figure>
            </div>

            <div className={`${fadeCardClasses} card bg-base-100 shadow-md overflow-hidden rounded-xl max-w-[360px] w-full`}>
              <figure className="relative aspect-video w-full">
                <Image
                  src="/flags.png"
                  alt="Illustration du multilinguisme"
                  fill
                  sizes="(max-width: 1024px) 50vw, 360px"
                  className="object-cover"
                />
              </figure>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
