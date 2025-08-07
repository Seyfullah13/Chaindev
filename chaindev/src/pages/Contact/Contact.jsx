import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import image from "../../assets/images/Bacgroundimg.png";

function Contact() {
  const [state, handleSubmit] = useForm("xpwlpvjo");
  const [phone, setPhone] = useState("");

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
          <p className="text-slate-700">
            Je vous répondrai dans les plus brefs délais.
          </p>
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
        Contact
      </h1>

      <div className="p-4 mx-auto max-w-xl bg-white mb-16 rounded shadow-md w-full">
        <h2 className="text-3xl text-slate-900 font-bold">Contactez moi !</h2>
        <h3>
          Développeur freelance, je crée votre site web responsive en présentiel
          ou à distance.
        </h3>
        <h4 className="mb-4">
          Remplissez le formulaire ci-dessous pour démarrer :
        </h4>

        <form onSubmit={handleSubmit} className="mt-4 space-y-5">
          {/* Nom & Prénom */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="nom"
                className="text-sm font-medium text-slate-900 mb-1 block"
              >
                Nom
              </label>
              <input
                id="nom"
                type="text"
                name="nom"
                placeholder="Entrer Nom"
                className="w-full py-2.5 px-4 bg-gray-100 border border-gray-200 text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all"
              />
              <ValidationError prefix="Nom" field="nom" errors={state.errors} />
            </div>
            <div>
              <label
                htmlFor="prenom"
                className="text-sm font-medium text-slate-900 mb-1 block"
              >
                Prénom
              </label>
              <input
                id="prenom"
                type="text"
                name="prenom"
                placeholder="Entrer Prénom"
                className="w-full py-2.5 px-4 bg-gray-100 border border-gray-200 text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all"
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
            <label
              htmlFor="email"
              className="text-sm font-medium text-slate-900 mb-1 block"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Entrer E-mail"
              className="w-full py-2.5 px-4 bg-gray-100 border border-gray-200 text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all"
            />
            <ValidationError
              prefix="Email"
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
              Téléphone
            </label>
            <PhoneInput
              defaultCountry="fr"
              value={phone}
              onChange={(phone) => setPhone(phone)}
              inputClassName="w-full py-2.5 px-4 bg-gray-100 border border-gray-200 text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all"
            />
            {/* Champ masqué pour envoyer le téléphone */}
            <input type="hidden" name="phone" value={phone} />
            <ValidationError
              prefix="Téléphone"
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
              Objet de la demande
            </label>
            <select
              id="objet"
              name="objet"
              defaultValue=""
              className="w-full py-2.5 px-4 bg-gray-100 border border-gray-200 text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all"
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
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="message"
              className="text-sm font-medium text-slate-900 mb-1 block"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Décrivez votre besoin ici..."
              className="w-full px-4 pt-3 bg-gray-100 border border-gray-200 text-sm text-slate-800 focus:border-slate-900 focus:bg-transparent outline-none transition-all"
            ></textarea>
            <ValidationError
              prefix="Message"
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
            Envoyer Message
          </button>
        </form>
      </div>
    </main>
  );
}

export default Contact;
