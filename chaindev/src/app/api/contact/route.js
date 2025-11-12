// app/api/contact/route.js
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, subject, message, token, _gotcha } = body;

    // Honeypot -> simuler succès si rempli
    if (_gotcha) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    if (!firstName || !lastName || !email || !phone || !subject || !message || !token) {
      return NextResponse.json({ error: "missing_fields" }, { status: 400 });
    }

    const secret = process.env.RECAPTCHA_SECRET_KEY;
    if (!secret) {
      return NextResponse.json({ error: "recaptcha_secret_missing" }, { status: 500 });
    }

    // Vérif reCAPTCHA v2
    const verifyBody = new URLSearchParams({
      secret,
      response: token,
    });

    const verifyRes = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: verifyBody.toString(),
    });

    const verifyJson = await verifyRes.json();

    if (!verifyJson.success) {
      return NextResponse.json({ error: "recaptcha_failed", details: verifyJson }, { status: 400 });
    }

    // Validation simple du téléphone (E.164) côté serveur
    // Format attendu : +{countrycode}{number}, ex: +33123456789
    const e164Regex = /^\+[1-9]\d{1,14}$/;
    if (!e164Regex.test(phone)) {
      return NextResponse.json({ error: "invalid_phone" }, { status: 400 });
    }

    // Forward to Formspree
    const FORM_ID = process.env.FORMSPREE_FORM_ID || "YOUR_FORM_ID";
    const payload = {
      firstName,
      lastName,
      email,
      phone,
      subject,
      message,
    };

    const fsRes = await fetch(`https://formspree.io/f/${FORM_ID}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const fsJson = await fsRes.json();

    if (!fsRes.ok) {
      console.error("Formspree error", fsJson);
      return NextResponse.json({ error: "formspree_failed", details: fsJson }, { status: 500 });
    }

    return NextResponse.json({ ok: true, result: fsJson }, { status: 200 });
  } catch (err) {
    console.error("API error", err);
    return NextResponse.json({ error: "server_error" }, { status: 500 });
  }
}
