"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { isValidPhoneNumber } from "react-phone-number-input";
import { useRecaptcha } from "../hooks/useRecaptcha"; // ✅ importe ton hook
import "react-phone-number-input/style.css";

const PhoneInput = dynamic(() => import("react-phone-number-input"), { ssr: false });

export default function ContactPage() {
  const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  const FORM_ID = process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID;
  const FORMSPREE_ENDPOINT = `https://formspree.io/f/${FORM_ID}`;

  const { recaptchaLoaded, recaptchaBlocked, getResponse, reset } = useRecaptcha(SITE_KEY);

  const [mounted, setMounted] = useState(false);
  const [status, setStatus] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");

  useEffect(() => setMounted(true), []);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const form = e.target;
    const email = form.email.value.trim();
    const subject = form.subject.value;
    const message = form.message.value.trim();
    const gotcha = form._gotcha?.value || "";

    if (!firstName || !lastName || !email || !subject || !message) {
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

    const token = getResponse();
    if (!token) {
      alert("⚠️ Merci de cocher le reCAPTCHA avant d’envoyer le formulaire.");
      setSubmitting(false);
      return;
    }

    const payload = {
      firstName,
      lastName,
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
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error("Erreur d’envoi");

      setStatus("success");
      form.reset();
      reset();
      setFirstName("");
      setLastName("");
      setPhone("");
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="min-h-screen bg-base-200 text-base-content">
      <div className="max-w-3xl mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Contactez-moi</h1>

        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="firstName" className="font-semibold">Prénom *</label>
              <input id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} className="input input-bordered w-full" required />
            </div>
            <div>
              <label htmlFor="lastName" className="font-semibold">Nom *</label>
              <input id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} className="input input-bordered w-full" required />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="font-semibold">Email *</label>
            <input id="email" type="email" className="input input-bordered w-full" required />
          </div>

          <div>
            <label htmlFor="phone" className="font-semibold">Téléphone *</label>
            {mounted ? (
              <PhoneInput value={phone} onChange={setPhone} defaultCountry="FR" international className="w-full" />
            ) : (
              <input id="phone" className="input input-bordered w-full" />
            )}
            {phoneError && <p className="text-red-600 text-sm">{phoneError}</p>}
          </div>

          <div>
            <label htmlFor="subject" className="font-semibold">Objet *</label>
            <select id="subject" defaultValue="" className="select select-bordered w-full" required>
              <option value="" disabled>— Sélectionnez un objet —</option>
              <option value="creation_de_site_web">Création de site web</option>
              <option value="refonte">Refonte</option>
              <option value="traduction">Traduction</option>
              <option value="maintenance">Maintenance</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="font-semibold">Message *</label>
            <textarea id="message" rows={6} className="textarea textarea-bordered w-full" required />
          </div>

          <div style={{ display: "none" }}>
            <input type="text" name="_gotcha" autoComplete="off" />
          </div>

          <div className="flex justify-center my-4">
            {recaptchaBlocked ? (
              <p className="text-yellow-700 bg-yellow-100 p-3 rounded">⚠️ Le reCAPTCHA est bloqué. Autorisez les scripts Google.</p>
            ) : (
              <div id="recaptcha-container" className="g-recaptcha" data-sitekey={SITE_KEY}></div>
            )}
          </div>

          <button type="submit" disabled={submitting} className="btn btn-primary w-full max-w-xs mx-auto block">
            {submitting ? "Envoi..." : "Envoyer"}
          </button>

          <div className="text-center">
            {status === "success" && <p className="text-green-700">✅ Message envoyé avec succès.</p>}
            {status === "error" && <p className="text-red-700">⚠️ Erreur, vérifiez le formulaire.</p>}
          </div>
        </form>
      </div>
    </main>
  );
}
