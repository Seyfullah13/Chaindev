import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useTranslation } from "react-i18next";
import image from "../../assets/images/Bacgroundimg.png";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [state, handleSubmit] = useForm("xpwlpvjo"); // ID Formspree
  const [phone, setPhone] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [captchaError, setCaptchaError] = useState("");
  const { t } = useTranslation();

  // fonction wrapper pour valider captcha avant submit
  const handleSubmitWithCaptcha = async (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setCaptchaError("⚠️ Merci de valider le reCAPTCHA avant d’envoyer.");
      return;
    }

    setCaptchaError(""); // reset message
    handleSubmit(e);
  };

  // Effet pour faire disparaître le toast après 3 secondes
  useEffect(() => {
    if (captchaError) {
      const timer = setTimeout(() => setCaptchaError(""), 3000);
      return () => clearTimeout(timer);
    }
  }, [captchaError]);

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

      <div className="p-4 mx-auto max-w-xl bg-white mb-16 rounded shadow-md w-full relative">
        <h2 className="text-3xl text-slate-900 font-bold">
          {t("contact.heading")}
        </h2>
        <h3>{t("contact.subtitle")}</h3>
        <h4 className="mb-4">{t("contact.instruction")}</h4>

        {/* Toast d'erreur captcha */}
        {captchaError && (
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded shadow-md flex items-center animate-slideDown z-50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 flex-shrink-0"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.366-.446.957-.446 1.323 0l7 8.5a1 1 0 01-.86 1.6H2.117a1 1 0 01-.86-1.6l7-8.5zM11 13a1 1 0 10-2 0 1 1 0 002 0zm-1-2a.75.75 0 01-.75-.75v-3.5a.75.75 0 011.5 0v3.5A.75.75 0 0110 11z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-sm">{captchaError}</span>
          </div>
        )}

        <form onSubmit={handleSubmitWithCaptcha} className="mt-4 space-y-5">
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

          {/* Objet */}
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

          {/* reCAPTCHA */}
          <div className="flex justify-center">
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={(value) => setCaptchaValue(value)}
            />
          </div>

          {/* Bouton d’envoi */}
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
