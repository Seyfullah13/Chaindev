import React from "react";
import image from "../assets/images/Bacgroundimg.png";

function Home() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start px-4 py-8"
      style={{ backgroundImage: `url(${image})` }}
      aria-label="Présentation Chaindev"
    >
      <header className="w-full max-w-2xl text-center mt-6">
        <h1
          className="text-white text-3xl md:text-5xl font-bold mb-4"
          tabIndex={0}
        >
          Chaindev
        </h1>
        <h2
          className="text-white text-lg md:text-2xl font-semibold mb-2"
          tabIndex={0}
        >
          « Chaindev : de l'idée à la réalisation web adaptée à tous »
        </h2>
      </header>

      <section className="w-full max-w-2xl bg-black/60 rounded-lg p-4 mt-4 mb-4">
        <p className="text-white text-base md:text-lg mb-2" tabIndex={0}>
          Solutions web sur mesure incluant développement, infrastructure
          sécurisée et assistance technique permanente.
        </p>
      </section>

      <section className="w-full max-w-2xl bg-black/60 rounded-lg p-4 mb-4">
        <h3 className="text-white text-xl font-semibold mb-2" tabIndex={0}>
          Qui suis-je ?
        </h3>
        <p className="text-white text-base md:text-lg" tabIndex={0}>
          Développeur Fullstack Freelance et multilingue React,Symfony,
          PHP,Docker, je crée des sites web sur mesure prêts pour
          l'international. Un seul prestataire pour le développement et la
          traduction:EN,AR,ES,TR,IT. Organisation claire, livrables fiables,
          méthode orientée résultats. Gagnez du temps et de la clarté sur vos
          projets web multilingues.
        </p>
      </section>
      <div className="flex flex-col sm:flex-row gap-4 sm:gap-16 mt-6">
        <button
          type="button"
          className="
      w-full sm:w-auto
      px-6 py-2
      bg-[#A8F6FF] hover:bg-[#5ED4E8]
      text-[#121212] font-bold
      rounded-full
      transition-colors transition-shadow duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5ED4E8]
    "
          onClick={() => {}}
        >
          Obtenir un devis
        </button>

        <button
          type="button"
          className="
      w-full sm:w-auto
      px-6 py-2
      bg-[#A8F6FF] hover:bg-[#5ED4E8]
      text-[#121212] font-bold
      rounded-full
      transition-colors transition-shadow duration-200
      focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5ED4E8]
    "
          onClick={() => {}}
        >
          Discutons du projet
        </button>
      </div>
    </main>
  );
}

export default Home;
