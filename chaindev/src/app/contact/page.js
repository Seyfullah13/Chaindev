// pages/contact.jsx or components/ContactPage.jsx
"use client";

import { useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    setStatus(null);

    const form = e.target;
    const data = {
      email: form.email.value.trim(),
      subject: form.subject.value.trim(),
      message: form.message.value.trim()
    };

    if (!data.email || !data.subject || !data.message) {
      setStatus("error");
      setSubmitting(false);
      return;
    }

    // TODO: remplacer par fetch réel vers ton API
    await new Promise((r) => setTimeout(r, 700));
    setStatus("success");
    setSubmitting(false);
    form.reset();
  }

  return (
    <main className="min-h-screen bg-base-200 text-base-content transition-colors duration-300">
      <div className="flex flex-col items-center px-4 pt-8 pb-12">
        <div className="w-full max-w-screen-lg">
          <h2 className="mb-4 text-4xl sm:text-5xl font-extrabold text-center">
            Contactez-moi
          </h2>

          <p className="mb-8 font-medium text-center sm:text-xl max-w-2xl mx-auto">
            Une question technique ? Un projet multilingue ? Décrivez votre besoin et je reviens vers vous.
          </p>

          {/* feedback pour screen readers */}
          <div role="status" aria-live="polite" className="sr-only">
            {status === "success" ? "Message envoyé avec succès." : status === "error" ? "Erreur : veuillez remplir tous les champs." : ""}
          </div>

          <div className="mx-auto w-full px-4">
            <form onSubmit={handleSubmit} className="mx-auto w-full max-w-3xl space-y-8" noValidate>
              <div>
                <label htmlFor="email" className="block mb-2 text-base font-semibold">
                  Votre email <span aria-hidden="true" className="text-red-600">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="name@example.com"
                  required
                  aria-required="true"
                  className="input input-bordered w-full text-base py-3 focus:ring-2 focus:ring-primary focus:outline-none transition duration-300 bg-base-100"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-2 text-base font-semibold">
                  Objet <span aria-hidden="true" className="text-red-600">*</span>
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Comment puis-je vous aider ?"
                  required
                  aria-required="true"
                  className="input input-bordered w-full text-base py-3 focus:ring-2 focus:ring-primary focus:outline-none transition duration-300 bg-base-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 text-base font-semibold">
                  Votre message <span aria-hidden="true" className="text-red-600">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  placeholder="Décrivez votre projet..."
                  required
                  aria-required="true"
                  className="textarea textarea-bordered w-full text-base py-3 focus:ring-2 focus:ring-primary focus:outline-none transition duration-300 bg-base-100"
                />
              </div>

              <div className="flex justify-center">
                <button
                  type="submit"
                  className="btn btn-primary w-full max-w-xs text-lg py-3 hover:scale-105 hover:shadow-lg transition-transform duration-300"
                  disabled={submitting}
                  aria-disabled={submitting}
                >
                  {submitting ? "Envoi..." : "Envoyer"}
                </button>
              </div>

              <div className="text-center">
                {status === "success" && <p className="text-green-700 font-medium">Merci — votre message a été envoyé.</p>}
                {status === "error" && <p className="text-red-700 font-medium">Veuillez remplir tous les champs requis.</p>}
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
