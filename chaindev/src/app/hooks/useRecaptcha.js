"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";

/**
 * Hook utilitaire pour charger et (re)rendre le reCAPTCHA V2 à chaque navigation.
 * @param {string} siteKey - La clé publique reCAPTCHA (NEXT_PUBLIC_RECAPTCHA_SITE_KEY)
 * @param {string} containerId - L'ID du conteneur <div> où sera affiché le reCAPTCHA
 */
export function useRecaptcha(siteKey, containerId = "recaptcha-container") {
  const [loaded, setLoaded] = useState(false);
  const [blocked, setBlocked] = useState(false);
  const widgetIdRef = useRef(null);
  const pathname = usePathname();

  // Charger le script global
  useEffect(() => {
    if (!siteKey) {
      console.error("❌ Clé reCAPTCHA manquante : NEXT_PUBLIC_RECAPTCHA_SITE_KEY");
      return;
    }

    const existingScript = document.getElementById("recaptcha-script");
    if (!existingScript) {
      const script = document.createElement("script");
      script.id = "recaptcha-script";
      script.src = "https://www.google.com/recaptcha/api.js?render=explicit";
      script.async = true;
      script.defer = true;

      script.onload = () => setLoaded(true);
      script.onerror = () => setBlocked(true);

      document.head.appendChild(script);
    } else {
      setLoaded(true);
    }
  }, [siteKey]);

  // Rendu du widget (réexécuté à chaque navigation)
  useEffect(() => {
    if (!loaded || typeof window.grecaptcha === "undefined") return;

    const container = document.getElementById(containerId);
    if (!container || container.children.length > 0) return;

    try {
      widgetIdRef.current = window.grecaptcha.render(container, {
        sitekey: siteKey,
        theme: "light",
      });
      setBlocked(false);
    } catch (err) {
      console.error("Erreur reCAPTCHA render :", err);
      setBlocked(true);
    }
  }, [loaded, pathname, containerId, siteKey]);

  // API exposée
  return {
    recaptchaLoaded: loaded,
    recaptchaBlocked: blocked,
    getResponse: () => window.grecaptcha?.getResponse(widgetIdRef.current),
    reset: () => window.grecaptcha?.reset(widgetIdRef.current),
  };
}
