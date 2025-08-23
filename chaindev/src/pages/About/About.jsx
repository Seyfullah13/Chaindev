import React from "react";
import image from "../../assets/images/Bacgroundimg.png";
import profilImg from "../../assets/images/profil-img.png";
import flagsImg from "../../assets/images/multilingue.png";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
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
        {t("about.pageTitle")}
      </h1>

      <div className="max-w-[90%] mx-auto flex flex-col md:flex-row md:justify-between items-start gap-8">
        {/* Colonne de gauche - texte + images mobile */}
        <section
          aria-labelledby="about-title"
          className="flex-1 w-full bg-black bg-opacity-75 rounded-lg p-4 sm:p-6 flex flex-row md:flex-col gap-4 md:max-w-2xl items-start text-white"
        >
          <div className="flex-1 flex flex-col gap-4">
            <p className="text-base md:text-lg leading-relaxed mb-4">
              {t("about.introduction")}
            </p>

            <h2 className="font-semibold mb-4 text-lg">
              {t("about.approachTitle")}
            </h2>
            <ul className="list-disc list-inside space-y-2 text-base md:text-lg leading-relaxed">
              <li>{t("about.approachList.precision")} </li>
              <li>{t("about.approachList.agility")}</li>
              <li>{t("about.approachList.impact")}</li>
              <li>{t("about.approachList.clarity")}</li>
              <li>{t("about.approachList.scalability")}</li>
              <li>{t("about.approachList.multilingual")}</li>
            </ul>

            <p className="mt-6 text-base md:text-lg leading-relaxed mb-6">
              {t("about.conclusion")}
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
