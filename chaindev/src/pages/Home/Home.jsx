import React from "react";
import image from "../../assets/images/Bacgroundimg.png";
import { useTranslation } from "react-i18next";
import { Link } from "@tanstack/react-router";
function Home() {
  const { t } = useTranslation();
  return (
    <main
      role="main"
      aria-label="Présentation Chaindev"
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start px-4 py-8"
      style={{ backgroundImage: `url(${image})` }}
    >
      <header className="w-full max-w-4xl text-center mt-6 px-2">
        <h1 className="text-white text-3xl md:text-5xl font-bold mb-4">
          {t("home.pageTitle")}
        </h1>
        <h2 className="text-white text-lg md:text-2xl font-semibold mb-2 bg-black rounded-lg p-2 sm:p-6 shadow-lg">
          {" "}
          {t("home.tagline")}
        </h2>
      </header>

      <section className="w-full max-w-4xl bg-black rounded-lg p-4 sm:p-6 mt-4 mb-4 shadow-lg">
        <p className="text-white text-base sm:text-lg mb-2">
          {t("home.intro")}
        </p>
      </section>

      <section
        className="w-full max-w-4xl bg-black rounded-lg p-4 sm:p-6 mb-6 shadow-lg"
        aria-labelledby="home-who-title"
      >
        <h3
          id="home-who-title"
          className="text-white text-xl sm:text-2xl font-semibold mb-2"
        >
          {t("home.who.title")}
        </h3>
        <p className="text-white text-base sm:text-lg leading-relaxed">
          {t("home.who.description")}
        </p>
      </section>

      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mb-6">
        <button
          type="button"
          className="
    px-6 py-2
    bg-[#A8F6FF] hover:bg-[#5ED4E8]
    text-[#121212] font-bold
    rounded-full
    transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#5ED4E8]
  "
          aria-label={t("home.cta.ariaLabel")}
          onClick={() => {}}
        >
          <Link
            to="/contact"
            prefetch="intent"
            className="hover transition-colors"
          >
            {t("home.cta.button")}
          </Link>
        </button>
      </div>
    </main>
  );
}

export default Home;
