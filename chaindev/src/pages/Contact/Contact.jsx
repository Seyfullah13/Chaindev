import React, { useState, useEffect, useRef } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { useTranslation } from "react-i18next";
import image from "../../assets/images/Bacgroundimg.png";
import ReCAPTCHA from "react-google-recaptcha";

function Contact() {
  const [state, handleSubmit] = useForm("mwpnwzrz"); // Remplacer par ton ID Formspree
  const [phone, setPhone] = useState("");
  const [captchaValue, setCaptchaValue] = useState(null);
  const [errors, setErrors] = useState({});
  const errorSummaryRef = useRef(null);
  const successRef = useRef(null);
  const { t } = useTranslation();

  // Regex email simple mais robuste
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation captcha + inputs avant envoi
  const handleSubmitWithCaptcha = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const newErrors = {};

    if (!captchaValue) {
      newErrors.captcha = "⚠️ Merci de valider le reCAPTCHA.";
    }
    if (!emailRegex.test(form.email.value)) {
      newErrors.email = "Adresse email invalide.";
    }
    if (form.message.value.trim().length < 10) {
      newErrors.message = "Le message doit contenir au moins 10 caractères.";
    }
    if (phone.replace(/\D/g, "").length < 8) {
      newErrors.phone = "Numéro de téléphone invalide.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      errorSummaryRef.current?.focus();
      return;
    }

    handleSubmit(e); // délègue à Formspree
  };

  // focus sur message de succès
  useEffect(() => {
    if (state.succeeded) {
      successRef.current?.focus();
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <main
        className="relative w-full min-h-screen bg-cover bg-right-top flex flex-col items-center justify-center px-4"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          ref={successRef}
          role="status"
          tabIndex={-1}
          className="bg-white p-8 rounded shadow-md max-w-lg mx-auto text-center"
        >
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

        {/* Résumé des erreurs */}
        {Object.keys(errors).length > 0 && (
          <div
            id="errorSummary"
            ref={errorSummaryRef}
            tabIndex={-1}
            role="alert"
            className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded"
          >
            <p>Le formulaire contient des erreurs :</p>
            <ul className="list-disc ml-6">
              {Object.entries(errors).map(([field, msg]) => (
                <li key={field}>
                  <a href={`#${field}`} role="link">
                    Corriger {field} : {msg}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Formulaire Formspree */}
        <form onSubmit={handleSubmitWithCaptcha} className="mt-4 space-y-5">
          {/* Honeypot anti-bot */}
          <input
            type="text"
            name="_gotcha"
            style={{ display: "none" }}
            tabIndex={-1}
            autoComplete="off"
          />

          {/* Nom & Prénom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="nom">{t("form.fields.lastName")}</label>
              <input
                id="nom"
                type="text"
                name="nom"
                autoComplete="family-name"
                aria-required="true"
                required
                maxLength={100}
                className="w-full py-2.5 px-4 bg-gray-100 border"
              />
              <ValidationError prefix="Nom" field="nom" errors={state.errors} />
            </div>
            <div>
              <label htmlFor="prenom">{t("form.fields.firstName")}</label>
              <input
                id="prenom"
                type="text"
                name="prenom"
                autoComplete="given-name"
                aria-required="true"
                required
                maxLength={100}
                className="w-full py-2.5 px-4 bg-gray-100 border"
              />
              <ValidationError
                prefix="Prénom"
                field="prenom"
                errors={state.errors}
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email">{t("form.fields.email")}</label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              aria-required="true"
              required
              maxLength={320}
              aria-invalid={!!errors.email}
              aria-describedby={
                errors.email ? "emailError emailHelp" : "emailHelp"
              }
              className="w-full py-2.5 px-4 bg-gray-100 border"
            />
            <p id="emailHelp" className="sr-only">
              L’adresse email doit être valide (exemple : nom@domaine.fr).
            </p>
            {errors.email && (
              <p id="emailError" role="alert" className="text-red-600 text-sm">
                {errors.email}
              </p>
            )}
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>

          {/* Téléphone */}
          <div>
            <label htmlFor="phone">{t("form.fields.phone")}</label>
            <PhoneInput
              defaultCountry="fr"
              value={phone}
              onChange={setPhone}
              inputClassName="w-full py-2.5 px-4 bg-gray-100 border"
              autoComplete="tel"
              aria-required="true"
              required
            />
            <input type="hidden" name="phone" value={phone} />
            {errors.phone && (
              <p id="phoneError" role="alert" className="text-red-600 text-sm">
                {errors.phone}
              </p>
            )}
          </div>

          {/* Objet */}
          <div>
            <label htmlFor="objet">{t("form.fields.subject")}</label>
            <select
              id="objet"
              name="objet"
              defaultValue=""
              aria-required="true"
              required
              className="w-full py-2.5 px-4 bg-gray-100 border"
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
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message">{t("form.fields.message")}</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              maxLength={2000}
              aria-required="true"
              aria-invalid={!!errors.message}
              aria-describedby={
                errors.message ? "messageError messageHelp" : "messageHelp"
              }
              placeholder={t("form.fields.messagePlaceholder")}
              className="w-full px-4 pt-3 bg-gray-100 border"
            />
            <p id="messageHelp" className="sr-only">
              Votre message doit contenir au moins 10 caractères et ne pas
              dépasser 2000.
            </p>
            {errors.message && (
              <p
                id="messageError"
                role="alert"
                className="text-red-600 text-sm"
              >
                {errors.message}
              </p>
            )}
          </div>

          {/* Champ caché pour reCAPTCHA */}
          <input
            type="hidden"
            name="g-recaptcha-response"
            value={captchaValue || ""}
          />

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
            className="w-full py-2.5 px-4 text-white bg-slate-900 hover:bg-slate-800"
          >
            {state.submitting ? "Envoi en cours…" : t("form.submitButton")}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
