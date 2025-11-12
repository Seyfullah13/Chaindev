"use client";

import { useEffect, useRef, useState } from "react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";

/**
 * CONTACT PAGE — reCAPTCHA v2 (checkbox) robust loader
 * - Assure render explicite via onload callback
 * - Re-essaie si grecaptcha n'est pas encore prêt
 * - Vérifie NEXT_PUBLIC_RECAPTCHA_SITE_KEY à l'exécution
 */

export default function ContactPage() {
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORM_ID}`;

  const captchaContainerId = "g-recaptcha-container";
  const widgetIdRef = useRef(null);
  const loadAttemptsRef = useRef(0);

  useEffect(() => {
    if (!SITE_KEY) {
      console.warn("reCAPTCHA SITE_KEY missing: verify NEXT_PUBLIC_RECAPTCHA_SITE_KEY");
      return;
    }

    // inject script only once
    const scriptId = "recaptcha-v2-script";
    if (!document.getElementById(scriptId)) {
      // We request render=explicit and set onload callback name
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = "https://www.google.com/recaptcha/api.js?onload=__reCaptchaOnLoadCallback&render=explicit";
      s.async = true;
      s.defer = true;
      document.head.appendChild(s);
    }

    // define a global callback used by the script query param onload
    // keep it idempotent
    window.__reCaptchaOnLoadCallback = function () {
      // try to render right away
      tryRenderWidget();
    };

    // try render function with retries
    function tryRenderWidget() {
      loadAttemptsRef.current += 1;
      if (typeof window.grecaptcha !== "undefined" && document.getElementById(captchaContainerId)) {
        try {
          // render once
          if (widgetIdRef.current == null) {
            widgetIdRef.current = window.grecaptcha.render(captchaContainerId, {
              sitekey: SITE_KEY,
              theme: "light",
            });
            console.log("reCAPTCHA rendered, widgetId:", widgetIdRef.current);
          }
        } catch (err) {
          console.warn("reCAPTCHA render attempt failed, will retry:", err);
          retry();
        }
      } else {
        // not ready yet -> retry a few times
        retry();
      }
    }

    function retry() {
      if (loadAttemptsRef.current >= 10) {
        console.error("reCAPTCHA failed to initialize after multiple attempts");
        return;
      }
      setTimeout(() => {
        tryRenderWidget();
      }, 700 * loadAttemptsRef.current); // backoff
    }

    // try initial render in case script already loaded
    tryRenderWidget();

    return () => {
      // cleanup: remove global callback to avoid leaks
      try {
        delete window.__reCaptchaOnLoadCallback;
      } catch (e) {}
    };
  }, [SITE_KEY]);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);
    setPhoneError("");

    const form = e.target;
    const email = form.email.value.trim();
    const subject = form.subject.value;
    const message = form.message.value.trim();
    const gotcha = form._gotcha?.value || "";

    if (!firstName.trim() || !lastName.trim() || !email || !subject || !message) {
      setStatus("error");
      setSubmitting(false);
      return;
    }

    if (!phone || !isValidPhoneNumber(phone)) {
      setPhoneError("Numéro de téléphone invalide.");
      setStatus("error");
      setSubmitting(false);
      return;
    }

    // récupère token du widget (g-recaptcha-response)
    let token = null;
    try {
      if (typeof window !== "undefined" && window.grecaptcha && widgetIdRef.current != null) {
        token = window.grecaptcha.getResponse(widgetIdRef.current);
      }
    } catch (err) {
      console.error("Erreur getResponse reCAPTCHA:", err);
      token = null;
    }

    if (!token) {
      console.warn("Aucun token reCAPTCHA — vérifie que l'utilisateur a coché la case.");
      setStatus("error");
      setSubmitting(false);
      return;
    }

    const payload = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email,
      phone,
      subject,
      message,
      "g-recaptcha-response": token,
      _gotcha: gotcha,
    };

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        console.error("Formspree error:", data);
        setStatus("error");
      } else {
        setStatus("success");
        form.reset();
        setFirstName("");
        setLastName("");
        setPhone("");
        // reset widget
        try {
          if (typeof window !== "undefined" && window.grecaptcha && widgetIdRef.current != null) {
            window.grecaptcha.reset(widgetIdRef.current);
          }
        } catch (err) {}
      }
    } catch (err) {
      console.error("Submit failed:", err);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-base-200 text-base-content transition-colors duration-300">
      <div className="flex flex-col items-center px-4 pt-8 pb-12">
        <div className="w-full max-w-screen-lg">
          <h2 className="mb-4 text-4xl sm:text-5xl font-extrabold text-center">Contactez-moi</h2>

          <p className="mb-8 font-medium text-center sm:text-xl max-w-2xl mx-auto">
            Une question technique ? Un projet multilingue ? Décrivez votre besoin et je reviens vers vous.
          </p>

          <div role="status" aria-live="polite" className="sr-only">
            {status === "success" ? "Message envoyé avec succès." : status === "error" ? "Erreur : veuillez vérifier le formulaire et réessayer." : ""}
          </div>

          <div className="mx-auto w-full px-4">
            <form onSubmit={handleSubmit} className="mx-auto w-full max-w-3xl space-y-6" noValidate>
              {/* noms */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block mb-2 text-base font-semibold">Prénom <span aria-hidden="true" className="text-red-600">*</span></label>
                  <input id="firstName" name="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder="Jean" required className="input input-bordered w-full text-base py-3" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block mb-2 text-base font-semibold">Nom <span aria-hidden="true" className="text-red-600">*</span></label>
                  <input id="lastName" name="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder="Dupont" required className="input input-bordered w-full text-base py-3" />
                </div>
              </div>

              {/* email */}
              <div>
                <label htmlFor="email" className="block mb-2 text-base font-semibold">Votre email <span aria-hidden="true" className="text-red-600">*</span></label>
                <input type="email" id="email" name="email" placeholder="name@example.com" required className="input input-bordered w-full text-base py-3" />
              </div>

              {/* phone */}
              <div>
                <label htmlFor="phone" className="block mb-2 text-base font-semibold">Téléphone <span aria-hidden="true" className="text-red-600">*</span></label>
                <PhoneInput id="phone" name="phone" placeholder="Entrez votre numéro" value={phone} onChange={setPhone} defaultCountry="FR" international countryCallingCodeEditable={false} className="w-full" />
                {phoneError && <p className="text-red-700 mt-1 text-sm">{phoneError}</p>}
              </div>

              {/* subject */}
              <div>
                <label htmlFor="subject" className="block mb-2 text-base font-semibold">Objet <span aria-hidden="true" className="text-red-600">*</span></label>
                <select id="subject" name="subject" required defaultValue="" className="select select-bordered w-full text-base py-3">
                  <option value="" disabled>— Sélectionnez un objet —</option>
                  <option value="creation_de_site_web">Création de site web</option>
                  <option value="refonte">Refonte</option>
                  <option value="traduction">Traduction</option>
                  <option value="maintenance">Maintenance</option>
                </select>
              </div>

              {/* message */}
              <div>
                <label htmlFor="message" className="block mb-2 text-base font-semibold">Votre message <span aria-hidden="true" className="text-red-600">*</span></label>
                <textarea id="message" name="message" rows={6} placeholder="Décrivez votre projet..." required className="textarea textarea-bordered w-full text-base py-3" />
              </div>

              {/* honeypot hidden */}
              <div style={{ display: "none" }} aria-hidden="true">
                <label>Ne pas remplir</label>
                <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" />
              </div>

              {/* reCAPTCHA container (must be visible) */}
              <div className="flex justify-center">
                <div id={captchaContainerId} />
              </div>

              <div className="flex justify-center">
                <button type="submit" className="btn btn-primary w-full max-w-xs text-lg py-3" disabled={submitting} aria-disabled={submitting}>
                  {submitting ? "Envoi..." : "Envoyer"}
                </button>
              </div>

              <div className="text-center">
                {status === "success" && <p className="text-green-700 font-medium">Merci — votre message a été envoyé.</p>}
                {status === "error" && <p className="text-red-700 font-medium">Veuillez vérifier le formulaire et réessayer.</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
