import React from "react";
import image from "../assets/images/Bacgroundimg.png";
import profilImg from "../assets/images/profil-img.png";
import flagsImg from "../assets/images/multilingue.png";

function About() {
  return (
    <main
      role="main"
      aria-label="Présentation Chaindev - À propos"
      className="relative w-full min-h-screen bg-cover bg-right-top flex flex-col items-center justify-start px-4 pt-6 sm:pt-8 md:pt-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      {/* Titre principal */}
      <h1
        id="about-title"
        className="text-center text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-16"
      >
        À propos
      </h1>

      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row md:justify-between items-start gap-8">
        {/* Colonne de gauche - texte + images mobile */}
        <section
          aria-labelledby="about-title"
          className="flex-1 w-full bg-black bg-opacity-75 rounded-lg p-4 sm:p-6 flex flex-row md:flex-col gap-4 md:max-w-2xl items-start text-white"
        >
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base md:text-lg leading-relaxed mb-4">
              Passionné par la tech et les langues, j’ai opéré une reconversion
              en développement web, alliant vision business et ouverture
              internationale.
            </p>

            <h2 className="font-semibold mb-4 text-lg">Mon approche :</h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed">
              <li>
                <strong>Précision :</strong> un code soigné, performant et
                pérenne.
              </li>
              <li>
                <strong>Agilité :</strong> interactions courtes pour ajuster en
                temps réel.
              </li>
              <li>
                <strong>Impact :</strong> chaque fonctionnalité vise un résultat
                concret.
              </li>
              <li>
                <strong>Clarté :</strong> communication transparente et jalons
                affichés.
              </li>
              <li>
                <strong>Évolutivité :</strong> architectures qui grandissent
                avec votre projet.
              </li>
              <li>
                <strong>Multilingue intégré :</strong> turc, anglais, espagnol,
                italien, arabe, français.
              </li>
            </ul>

            <p className="mt-6 text-base md:text-lg leading-relaxed mb-6">
              Choisissez un freelance qui code, localise et maximise votre
              présence web internationale.
            </p>
          </div>

          {/* Images mobile à droite du texte */}
          <div className="flex flex-col items-center gap-20 ml-4 md:hidden">
            <img
              src={profilImg}
              alt="Chaindev, développeur full-stack multilingue"
              className="w-24 sm:w-32 h-auto rounded-full object-cover border-4 border-white"
            />
            <img
              src={flagsImg}
              alt="Icônes des langues : turc, anglais, espagnol, italien, arabe, français"
              className="w-24 sm:w-32 h-auto object-contain"
            />
          </div>
        </section>

        {/* Colonne de droite - images desktop/tablette */}
        <div className="hidden md:flex flex-col items-center gap-24 lg:gap-32 mt-6 md:mt-0 md:ml-24 lg:ml-32 xl:ml-40">
          <img
            src={profilImg}
            alt="Chaindev, développeur full-stack multilingue"
            className="w-32 sm:w-40 md:w-48 h-auto rounded-full object-cover border-4 border-white"
          />
          <img
            src={flagsImg}
            alt="Icônes des langues : turc, anglais, espagnol, italien, arabe, français"
            className="w-28 sm:w-36 md:w-40 h-auto object-contain"
          />
        </div>
      </div>
    </main>
  );
}

export default About;
