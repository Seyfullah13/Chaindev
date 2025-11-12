"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const cards = document.querySelectorAll(".fade-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(
              "opacity-100",
              "translate-y-0",
              "scale-100"
            );
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex-grow px-6 py-8 max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-xl font-semibold leading-snug mb-4">
            Élargissez votre présence numérique à l’international.<br />
            Votre savoir-faire mérite d’être compris dans plusieurs langues.<br />
            Profitez d’un site web multilingue, fidèle à votre identité, optimisé pour accroître votre visibilité sur chaque marché et simple à gérer au quotidien.
          </h1>
        </header>

        <section aria-labelledby="engagements" className="mb-6">
          <h2 id="engagements" className="text-lg font-semibold mb-4">
            Mes engagements
          </h2>

          <div className="flex flex-col sm:flex-row gap-6 mb-6 items-stretch flex-wrap justify-between">
            {["Accompagnement complet", "Interlocuteur unique", "Autonomie", "Transparence"].map((title, index) => (
              <div
                key={index}
                className="card fade-card card-border bg-base-100 w-full sm:w-1/2 md:w-1/4 
                           flex flex-col transition-all duration-700 ease-out 
                           opacity-0 translate-y-4 scale-95 shadow-md"
              >
                <div className="card-body flex-1">
                  <h3 className="card-title">{title}</h3>
                  <p>
                    {index === 0 && "Du cahier des charges au déploiement."}
                    {index === 1 && "Suivi réactif et sans intermédiaire."}
                    {index === 2 && "Formation et documentation pour gérer votre site facilement."}
                    {index === 3 && "Solutions claires, sans jargon."}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-6">
            Des sites et applications sur-mesure, traduits et optimisés pour la performance et la gestion simple.
          </p>

          <section aria-labelledby="services" className="mb-6 flex flex-wrap justify-between gap-6">
            {[
              { title: "Conception sur mesure", desc: "Interface intuitive, design responsive, code propre." },
              { title: "Multilingue", desc: "Français + 5 langues (Anglais, Arabe, Espagnol, Turc, Italien)." },
              { title: "Hébergement sécurisé", desc: "Sauvegardes quotidiennes, SSL, disponibilité garantie." },
              { title: "Maintenance optionnelle", desc: "Mises à jour, Sauvegardes, Petites modifications." }
            ].map((service, index) => (
              <div
                key={index}
                className="card fade-card card-border bg-base-100 w-full sm:w-1/2 md:w-1/4 
                           flex flex-col transition-all duration-700 ease-out 
                           opacity-0 translate-y-4 scale-95 shadow-md"
              >
                <div className="card-body flex-1">
                  <h4 className="card-title">{service.title}</h4>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </section>

          <h3 className="text-lg font-semibold mb-2">Pour qui ?</h3>
          <p className="mb-4">
            Artisans, commerçants, indépendants et PME qui souhaitent gagner en visibilité et convertir plus de clients en ligne.
          </p>
          <p className="mb-6">
            Parlez-moi de votre projet via le formulaire, je vous propose une solution adaptée, rapide et sans jargon.
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <Link
              href="/contact"
              className="btn btn-soft btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-full"
            >
              Demandez un devis gratuit
            </Link>
            <Link
              href="/prestations"
              className="btn btn-soft btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl rounded-full"
            >
              Découvrez mes services
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
