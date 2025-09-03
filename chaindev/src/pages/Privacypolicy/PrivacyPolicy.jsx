import React from "react";
import image from "../../assets/images/Bacgroundimg.png";
import { useTranslation } from "react-i18next";

function DataCollectionSection() {
  const { t } = useTranslation();
  return (
    <section className="p-4 bg-white bg-opacity-80 rounded-xl shadow-lg">
      <h2> {t("privacyPolicy.dataCollection.title")}</h2>
      <h3>{t("privacyPolicy.dataCollection.directTitle")}</h3>
      <p>{t("privacyPolicy.dataCollection.directText")}</p>

      <p>{t("privacyPolicy.dataCollection.directItem")}</p>
      <ul>
        <li>{t("privacyPolicy.dataCollection.directItem1")}</li>
        <li>{t("privacyPolicy.dataCollection.directItem2")}</li>
        <li>{t("privacyPolicy.dataCollection.directItem3")}</li>
      </ul>

      <h3>{t("privacyPolicy.dataCollection.automaticTitle")}</h3>
      <p>{t("privacyPolicy.dataCollection.automaticText")}</p>
      <ul>
        <li> {t("privacyPolicy.dataCollection.automaticItem1")}</li>
        <li>{t("privacyPolicy.dataCollection.automaticItem2")}</li>
        <li>{t("privacyPolicy.dataCollection.automaticItem3")}</li>
        <li>{t("privacyPolicy.dataCollection.automaticItem4")}</li>
        <li>{t("privacyPolicy.dataCollection.automaticItem5")}</li>
        <li>{t("privacyPolicy.dataCollection.automaticItem6")}</li>
        <li>{t("privacyPolicy.dataCollection.automaticItem7")}</li>
      </ul>

      <h3>{t("privacyPolicy.dataCollection.cookiesTitle")}</h3>
      <p>{t("privacyPolicy.dataCollection.cookiesText")}</p>
      <p>{t("privacyPolicy.dataCollection.cookiesItem1")}</p>
      <ul>
        <li>{t("privacyPolicy.dataCollection.cookiesItem2")} </li>
        <li>{t("privacyPolicy.dataCollection.cookiesItem3")}</li>
      </ul>
      <p>{t("privacyPolicy.dataCollection.cookiesManagement")}</p>
    </section>
  );
}

export default function PrivacyPolicy() {
  const { t } = useTranslation();
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center flex flex-col items-center justify-start px-4 py-8"
      style={{ backgroundImage: `url(${image})` }}
    >
      <main className="bg-white bg-opacity-80 p-8 rounded-xl shadow-lg max-w-4xl w-full">
        <h1> {t("privacyPolicy.pageTitle")}</h1>
        <p>{t("privacyPolicy.lastUpdated")}</p>

        <h2> {t("privacyPolicy.introductionTitle")}</h2>
        <p>{t("privacyPolicy.introduction")}</p>
        <DataCollectionSection />

        <h2>{t("privacyPolicy.usage.title")}</h2>
        <ul>
          <li>{t("privacyPolicy.usage.item1")}</li>
          <li>{t("privacyPolicy.usage.item2")} </li>
          <li>{t("privacyPolicy.usage.item3")}</li>
          <li>{t("privacyPolicy.usage.item4")}</li>
        </ul>

        <h2>{t("privacyPolicy.sharing.title")}</h2>
        <h3>{t("privacyPolicy.sharing.serviceProvidersTitle")}</h3>
        <p>{t("privacyPolicy.sharing.serviceProvidersText")}</p>

        <h3>{t("privacyPolicy.sharing.legalObligationsTitle")}</h3>
        <p>{t("privacyPolicy.sharing.legalObligationsText")}</p>

        <h3>{t("privacyPolicy.sharing.protectionTitle")} </h3>
        <p>{t("privacyPolicy.sharing.protectionText")}</p>

        <h2>{t("privacyPolicy.retention.title")}</h2>
        <p>{t("privacyPolicy.retention.text")}</p>

        <h2> {t("privacyPolicy.security.title")}</h2>
        <p>{t("privacyPolicy.security.text")}</p>

        <h2>{t("privacyPolicy.rights.title")}</h2>
        <ul>
          <li>{t("privacyPolicy.rights.item1")}</li>
          <li> {t("privacyPolicy.rights.item2")}</li>
          <li>{t("privacyPolicy.rights.item3")}</li>
        </ul>
        <p>{t("privacyPolicy.rights.contactText")}</p>

        <h2>{t("privacyPolicy.transfers.title")}</h2>
        <p>{t("privacyPolicy.transfers.text")}</p>

        <h2>{t("privacyPolicy.externalLinks.title")}</h2>
        <p>{t("privacyPolicy.externalLinks.text")}</p>

        <h2>{t("privacyPolicy.changes.title")}</h2>
        <p>{t("privacyPolicy.changes.text")}</p>

        <h2> {t("privacyPolicy.contact.title")}</h2>
        <address>{t("privacyPolicy.contact.address")}</address>
      </main>
    </div>
  );
}
