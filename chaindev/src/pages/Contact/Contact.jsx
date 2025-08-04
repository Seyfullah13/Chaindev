import React, { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import image from "../../assets/images/Bacgroundimg.png";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

import "../../styles/index.css";

function Contact() {
  const [state, handleSubmit] = useForm("xpwlpvjo");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [messageLength, setMessageLength] = useState(0);
  const [showSuccess, setShowSuccess] = useState(false);
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Validation du téléphone avant soumission
    if (!isValidPhoneNumber(phone)) {
      setPhoneError(true);
      return;
    } else {
      setPhoneError(false);
    }

    setIsSubmitting(true);
    try {
      const response = await handleSubmit(e);
      if (response.ok) {
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleBeforeUnload = (e) => {
      const form = document.querySelector("form");
      if (form && !form.checkValidity()) {
        const message =
          "Êtes-vous sûr de vouloir quitter ? Vos modifications seront perdues.";
        e.returnValue = message;
        return message;
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  if (state.succeeded) {
    return (
      <main
        className="relative w-full min-h-screen bg-cover bg-right-top flex flex-col items-center justify-center px-4"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="bg-white p-8 rounded shadow-md max-w-lg mx-auto text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">
            Merci pour votre message !
          </h1>
          <p className="text-slate-700 mb-4">
            Je vous répondrai dans les plus brefs délais.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-slate-900 text-white px-6 py-2 rounded hover:bg-slate-800 transition-colors"
          >
            Envoyer un autre message
          </button>
        </div>
      </main>
    );
  }

  return (
    <main
      role="main"
      aria-label="Présentation Chaindev - Contact"
      className="relative w-full min-h-screen bg-cover bg-right-top flex flex-col items-center justify-start px-4 pt-6 pb-16 sm:pt-8 md:pt-10"
      style={{ backgroundImage: `url(${image})` }}
    >
      <h1 className="text-center text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-16">
        Contact
      </h1>

      {showSuccess && (
        <div className="fixed top-4 right-4 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded shadow-lg">
          Message envoyé avec succès !
        </div>
      )}

      <div className="p-4 mx-auto max-w-xl bg-white mb-16 rounded shadow-md w-full">
        <h2 className="text-3xl text-slate-900 font-bold">Contactez moi !</h2>
        <h3>
          Développeur freelance, je crée votre site web responsive en présentiel
          ou à distance.
        </h3>
        <h4 className="mb-4">
          Remplissez le formulaire ci-dessous pour démarrer :
        </h4>
        <p className="text-sm text-gray-500 mb-4">
          Les champs marqués d'un * sont obligatoires
        </p>

        <form onSubmit={handleFormSubmit} className="mt-4 space-y-5" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Nom */}
            <div>
              <label
                htmlFor="nom"
                className="text-sm font-medium text-slate-900 mb-1 block"
              >
                Nom *
              </label>
              <input
                id="nom"
                type="text"
                name="nom"
                required
                pattern="[A-Za-zÀ-ÿ\s]{2,50}"
                placeholder="Entrer Nom"
                title="2 à 50 caractères, lettres uniquement"
                className={`w-full py-2.5 px-4 bg-gray-100 border ${
                  state.errors?.nom ? "border-red-500" : "border-gray-200"
                } text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all`}
              />
              <ValidationError
                prefix="Nom"
                field="nom"
                errors={state.errors}
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span
                      key={type}
                      className="text-xs text-red-500 mt-1 block"
                    >
                      {message}
                    </span>
                  ))
                }
              />
            </div>

            {/* Prénom */}
            <div>
              <label
                htmlFor="prenom"
                className="text-sm font-medium text-slate-900 mb-1 block"
              >
                Prénom *
              </label>
              <input
                id="prenom"
                type="text"
                name="prenom"
                required
                pattern="[A-Za-zÀ-ÿ\s]{2,50}"
                placeholder="Entrer Prénom"
                title="2 à 50 caractères, lettres uniquement"
                className={`w-full py-2.5 px-4 bg-gray-100 border ${
                  state.errors?.prenom ? "border-red-500" : "border-gray-200"
                } text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all`}
              />
              <ValidationError
                prefix="Prénom"
                field="prenom"
                errors={state.errors}
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span
                      key={type}
                      className="text-xs text-red-500 mt-1 block"
                    >
                      {message}
                    </span>
                  ))
                }
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-900 mb-1 block"
            >
              Email *
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="Entrer E-mail"
              className={`w-full py-2.5 px-4 bg-gray-100 border ${
                state.errors?.email ? "border-red-500" : "border-gray-200"
              } text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all`}
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <span key={type} className="text-xs text-red-500 mt-1 block">
                    {message}
                  </span>
                ))
              }
            />
          </div>

          {/* Téléphone */}
          <div>
            <label
              htmlFor="telephone"
              className="text-sm font-medium text-slate-900 mb-1 block"
            >
              Téléphone *
            </label>
            <PhoneInput
              id="telephone"
              name="telephone"
              international
              defaultCountry="FR"
              value={phone}
              onChange={setPhone}
              className={`bg-gray-100 border rounded text-sm px-3 py-2 ${
                phoneError ? "border-red-500" : "border-gray-300"
              }`}
            />
            {phoneError && (
              <span className="text-xs text-red-500 mt-1 block">
                Numéro de téléphone invalide
              </span>
            )}
            <p className="text-xs text-gray-500 mt-1">
              * Format international requis (ex. : +33 6 12 34 56 78)
            </p>
          </div>

          {/* Objet de la demande */}
          <div>
            <label
              htmlFor="objet"
              className="text-sm font-medium text-slate-900 mb-1 block"
            >
              Objet de la demande *
            </label>
            <select
              id="objet"
              name="objet"
              required
              defaultValue=""
              className={`w-full py-2.5 px-4 bg-gray-100 border ${
                state.errors?.objet ? "border-red-500" : "border-gray-200"
              } text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all`}
            >
              <option value="" disabled hidden>
                Sélectionnez un service
              </option>
              <option value="Site Vitrine">Site Vitrine – 1080 €</option>
              <option value="Site E-Commerce">Site E-Commerce – 2160 €</option>
              <option value="Traduction Web">Traduction Web – 30 €/page</option>
              <option value="Maintenance">
                Hébergement & Maintenance – 300 €/mois
              </option>
              <option value="Autre">Autre (à préciser dans le message)</option>
            </select>
            <ValidationError
              prefix="Objet"
              field="objet"
              errors={state.errors}
              render={({ messages }) =>
                messages &&
                Object.entries(messages).map(([type, message]) => (
                  <span key={type} className="text-xs text-red-500 mt-1 block">
                    {message}
                  </span>
                ))
              }
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-900 mb-1 block"
            >
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              maxLength={1000}
              placeholder="Décrivez votre besoin ici..."
              onChange={(e) => setMessageLength(e.target.value.length)}
              className={`w-full px-4 pt-3 bg-gray-100 border ${
                state.errors?.message ? "border-red-500" : "border-gray-200"
              } text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all`}
            />
            <div className="flex justify-between items-center mt-1">
              <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                render={({ messages }) =>
                  messages &&
                  Object.entries(messages).map(([type, message]) => (
                    <span
                      key={type}
                      className="text-xs text-red-500 mt-1 block"
                    >
                      {message}
                    </span>
                  ))
                }
              />
              <span className="text-xs text-gray-500">
                {messageLength}/1000 caractères
              </span>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2.5 px-4 text-white ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-slate-900 hover:bg-slate-800 cursor-pointer"
            } text-sm font-medium tracking-wide border-0 outline-none transition-all relative`}
          >
            {isSubmitting ? (
              <>
                <span className="opacity-0">Envoyer Message</span>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                </div>
              </>
            ) : (
              "Envoyer Message"
            )}
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
