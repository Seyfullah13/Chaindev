// src/components/LegalNotice.js
import React from "react";
import image from "../../assets/images/Bacgroundimg.png";
import { Trans, useTranslation } from "react-i18next";

export default function LegalNotice({ lastUpdated = new Date("2025-06-30") }) {
  const { t, i18n } = useTranslation();

  // utilitaire : format localisé de la date
  function formatLocalDate(date, locale) {
    try {
      return new Intl.DateTimeFormat(locale, {
        day: "numeric",
        month: "long",
        year: "numeric",
      }).format(date);
    } catch (e) {
      // fallback simple si Intl échoue
      return date instanceof Date
        ? date.toLocaleDateString(locale)
        : String(date);
    }
  }

  // normaliser / valider la date source
  const resolvedDate =
    lastUpdated instanceof Date ? lastUpdated : new Date(lastUpdated);
  const isValidDate =
    resolvedDate instanceof Date && !Number.isNaN(resolvedDate.getTime());

  const formattedDate = isValidDate
    ? formatLocalDate(resolvedDate, i18n.language)
    : ""; // ou affiche un placeholder comme "—"
  const dateTimeAttr = isValidDate ? resolvedDate.toISOString() : undefined;

  return (
    <main
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start px-4 py-8 overflow-auto"
      style={{ backgroundImage: `url(${image})` }}
      aria-label="Mentions légales Chaindev"
    >
      <section className="legal-notice bg-white bg-opacity-90 p-6 max-w-4xl mx-auto rounded-lg shadow-md">
        <h1>{t("legalNotice.pageTitle")}</h1>

        {/* Ligne localisée, réordonnable par traducteur via Trans */}
        <p lang={i18n.language} dir={i18n.dir(i18n.language)}>
          <Trans
            i18nKey="legalNotice.lastUpdated"
            components={[
              <strong key="s" />,
              <time key="t" dateTime={dateTimeAttr} />,
            ]}
            values={{ date: formattedDate }}
          />
        </p>

        <h2>{t("legalNotice.sections.presentationSite.title")}</h2>
        <h3>{t("legalNotice.sections.presentationSite.legalInfoTitle")}</h3>
        <ul>
          <li>
            {t("legalNotice.sections.presentationSite.legalInfoItems.company")}
          </li>
          <li>
            {t(
              "legalNotice.sections.presentationSite.legalInfoItems.structure"
            )}
          </li>
          <li>
            {t("legalNotice.sections.presentationSite.legalInfoItems.address")}
          </li>
          <li>
            {t("legalNotice.sections.presentationSite.legalInfoItems.siret")}
          </li>
          <li>
            {t("legalNotice.sections.presentationSite.legalInfoItems.director")}
          </li>
          <li>
            {t(
              "legalNotice.sections.presentationSite.legalInfoItems.contactEmail"
            )}
          </li>
        </ul>

        <h3>{t("legalNotice.sections.presentationSite.hostingTitle")}</h3>
        <ul>
          <li>
            {t("legalNotice.sections.presentationSite.hostingItems.provider")}
          </li>
          <li>
            {t(
              "legalNotice.sections.presentationSite.hostingItems.providerAddress"
            )}
          </li>
        </ul>

        <h2>{t("legalNotice.sections.terms.title")}</h2>
        <p>{t("legalNotice.sections.terms.text")}</p>

        <h3> {t("legalNotice.sections.terms.accessTitle")}</h3>
        <p>{t("legalNotice.sections.terms.accessText1")}</p>
        <p>{t("legalNotice.sections.terms.accessText2")}</p>

        <h3>{t("legalNotice.sections.terms.contentTitle")}</h3>
        <p>{t("legalNotice.sections.terms.contentText")}</p>

        <h3>{t("legalNotice.sections.terms.managementTitle")}</h3>
        <ul>
          <li>{t("legalNotice.sections.terms.managementItems")}</li>
          <li> {t("legalNotice.sections.terms.managementItem2")}</li>
          <li> {t("legalNotice.sections.terms.managementItem3")}</li>
        </ul>

        <h3>{t("legalNotice.sections.terms.liabilityTitle")}</h3>
        <p>{t("legalNotice.sections.terms.liabilityText1")}</p>
        <p>{t("legalNotice.sections.terms.liabilityText2")}</p>

        <h3>{t("legalNotice.sections.terms.linksTitle")}</h3>
        <p>{t("legalNotice.sections.terms.linksText")}</p>

        <h2>{t("legalNotice.sections.services.title")} </h2>
        <p>{t("legalNotice.sections.services.text")}</p>

        <h2>{t("legalNotice.sections.law.title")}</h2>
        <p>{t("legalNotice.sections.law.text")}</p>

        <h2> {t("legalNotice.sections.contact.title")}</h2>
        <p>{t("legalNotice.sections.contact.text")}</p>
      </section>
    </main>
  );
}
