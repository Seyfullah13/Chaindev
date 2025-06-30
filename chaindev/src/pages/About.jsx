import React from "react";
import image from "../assets/images/Bacgroundimg.png";
import profilImg from "../assets/images/profil-img.png";

function About() {
  return (
    <main
      className="min-h-screen w-full bg-cover bg-center flex items-center justify-center px-6 py-12 md:py-24"
      style={{ backgroundImage: `url(${image})` }}
      aria-label="Présentation Chaindev - À propos"
    >
      <div className="max-w-6xl w-full space-y-8">
        {/* Titre hors encadré */}
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          À propos de Chaindev
        </h1>

        <div className="flex flex-col md:flex-row items-center w-full gap-8">
          {/* Encadré texte */}
          <section className="flex-1 bg-black/60 rounded-lg p-6 text-white text-base md:text-lg leading-relaxed">
            <header className="mb-6">
              <p className="text-lg md:text-2xl font-semibold max-w-xl leading-relaxed">
                Passionné par la technologie et les langues, j’ai choisi de me
                reconvertir dans le développement web pour offrir des solutions
                personnalisées adaptées à un public international.
              </p>
            </header>

            <div>
              <p className="font-semibold mb-4">Mon approche :</p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Précision :</strong> un code propre, performant et
                  durable.
                </li>
                <li>
                  <strong>Agilité :</strong> ajustements rapides et flexibles
                  selon vos besoins.
                </li>
                <li>
                  <strong>Impact :</strong> chaque fonctionnalité est pensée
                  pour un résultat concret.
                </li>
                <li>
                  <strong>Clarté :</strong> communication transparente avec des
                  étapes bien définies.
                </li>
                <li>
                  <strong>Évolutivité :</strong> une architecture qui grandit
                  avec votre projet.
                </li>
              </ul>

              <p className="mt-6">
                Multilingue, je travaille en turc, anglais, espagnol, italien,
                arabe et français pour vous accompagner partout dans le monde.
              </p>
              <p className="mt-4">
                Choisissez un freelance qui combine développement et
                localisation pour maximiser votre présence web internationale.
              </p>
            </div>
          </section>

          {/* Image de profil */}
          <img
            src={profilImg}
            className="h-auto w-56 rounded-[5px]"
            alt="Profile"
            aria-label="Profile image"
          />
        </div>
      </div>
    </main>
  );
}

export default About;
