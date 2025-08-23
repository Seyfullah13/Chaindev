import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useTranslation } from "react-i18next";
import image from "../../assets/images/Bacgroundimg.png";

function Contact() {
  const [state, handleSubmit] = useForm("xpwlpvjo");
  const [phone, setPhone] = useState("");
  const { t } = useTranslation();

  if (state.succeeded) {
    return (
      <main
        className="relative w-full min-h-screen bg-cover bg-right-top flex flex-col items-center justify-center px-4"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-white p-8 rounded shadow-md max-w-lg mx-auto text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            {t("thankyou.title")}
          </h1>
          <p className="text-slate-700">{t("thankyou.content")}</p>
        </div>
      </main>
    );
  }

  return (
    <main
      role="main"
      aria-label="Présentation Chaindev - Contact"
      className="relative w-full min-h-screen bg-cover bg-right-top flex flex-col items-center justify-start px-4 pt-6 sm:pt-8 md:pt-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-16">
        {t("contact.pageTitle")}
      </h1>

      <div className="p-4 mx-auto max-w-xl bg-white mb-16 rounded shadow-md w-full">
        <h2 className="text-3xl text-slate-900 font-bold">
          {t("contact.heading")}
        </h2>
        <h3>{t("contact.subtitle")}</h3>
        <h4 className="mb-4">{t("contact.instruction")}</h4>

        <form onSubmit={handleSubmit} className="mt-4 space-y-5">
          {/* Nom & Prénom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="nom"
                className="text-sm font-medium text-slate-900 mb-1 block"
              >
                {t("form.fields.lastName")}
              </label>
              <input
                id="nom"
                type="text"
                name="nom"
                placeholder={t("form.fields.lastNamePlaceholder")}
                className="w-full py-2.5 px-4 bg-gray-100 border border-gray-200 text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all"
              />
              <ValidationError
                prefix={t("form.fields.lastName")}
                field="nom"
                errors={state.errors}
              />
            </div>
            <div>
              <label
                htmlFor="prenom"
                className="text-sm font-medium text-slate-900 mb-1 block"
              >
                {t("form.fields.firstName")}
              </label>
              <input
                id="prenom"
                type="text"
                name="prenom"
                placeholder={t("form.fields.firstNamePlaceholder")}
                className="w-full py-2.5 px-4 bg-gray-100 border border-gray-200 text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all"
              />
              <ValidationError
                prefix={t("form.fields.firstName")}
                field="prenom"
                errors={state.errors}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-900 mb-1 block"
            >
              {t("form.fields.email")}
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder={t("form.fields.emailPlaceholder")}
              className="w-full py-2.5 px-4 bg-gray-100 border border-gray-200 text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all"
            />
            <ValidationError
              prefix={t("form.fields.email")}
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Téléphone */}
          <div>
            <label
              htmlFor="phone"
              className="text-sm font-medium text-slate-900 mb-1 block"
            >
              {t("form.fields.phone")}
            </label>
            <PhoneInput
              defaultCountry="fr"
              value={phone}
              onChange={setPhone}
              inputClassName="w-full py-2.5 px-4 bg-gray-100 border border-gray-200 text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all"
              placeholder={t("form.fields.phonePlaceholder")}
            />
            <input type="hidden" name="phone" value={phone} />
            <ValidationError
              prefix={t("form.fields.phone")}
              field="phone"
              errors={state.errors}
            />
          </div>

          {/* Objet de la demande */}
          <div>
            <label
              htmlFor="objet"
              className="text-sm font-medium text-slate-900 mb-1 block"
            >
              {t("form.fields.subject")}
            </label>
            <select
              id="objet"
              name="objet"
              defaultValue=""
              className="w-full py-2.5 px-4 bg-gray-100 border border-gray-200 text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all"
            >
              <option value="" disabled hidden>
                {t("form.fields.subjectPlaceholder")}
              </option>
              <option value="Site Vitrine">
                {t("form.options.siteVitrine")}
              </option>
              <option value="Site E-Commerce">
                {t("form.options.siteECommerce")}
              </option>
              <option value="Traduction Web">
                {t("form.options.translationWeb")}
              </option>
              <option value="Maintenance">
                {t("form.options.maintenance")}
              </option>
              <option value="Autre">{t("form.options.other")}</option>
            </select>
            <ValidationError
              prefix={t("form.fields.subject")}
              field="objet"
              errors={state.errors}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-900 mb-1 block"
            >
              {t("form.fields.message")}
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder={t("form.fields.messagePlaceholder")}
              className="w-full px-4 pt-3 bg-gray-100 border border-gray-200 text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all"
            />
            <ValidationError
              prefix={t("form.fields.message")}
              field="message"
              errors={state.errors}
            />
          </div>

          {/* Bouton d'envoi */}
          <button
            type="submit"
            disabled={state.submitting}
            className="w-full py-2.5 px-4 text-white bg-slate-900 hover:bg-slate-800 text-sm font-medium tracking-wide border-0 outline-none cursor-pointer"
          >
            {t("form.submitButton")}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
