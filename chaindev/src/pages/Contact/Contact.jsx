import React, { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const ContactForm = () => {
  const [phone, setPhone] = useState("");
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    objet: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form action="https://formspree.io/f/your_form_id" method="POST">
      <label>
        Nom *
        <input
          type="text"
          name="nom"
          required
          placeholder="Entrer Nom"
          value={formData.nom}
          onChange={handleChange}
        />
      </label>

      <label>
        Prénom *
        <input
          type="text"
          name="prenom"
          required
          placeholder="Entrer Prénom"
          value={formData.prenom}
          onChange={handleChange}
        />
      </label>

      <label>
        Email *
        <input
          type="email"
          name="email"
          required
          placeholder="Entrer E-mail"
          value={formData.email}
          onChange={handleChange}
        />
      </label>

      <label>
        Téléphone *
        <PhoneInput
          defaultCountry="fr"
          value={phone}
          onChange={(phone) => setPhone(phone)}
          placeholder="+33 6 12 34 56 78"
        />
        <input type="hidden" name="telephone" value={phone} required />
      </label>

      <label>
        Objet de la demande *
        <select
          name="objet"
          required
          value={formData.objet}
          onChange={handleChange}
        >
          <option value="">Sélectionnez un service</option>
          <option value="Service 1">Service 1</option>
          <option value="Service 2">Service 2</option>
          <option value="Autre">Autre</option>
        </select>
      </label>

      <label>
        Message *
        <textarea
          name="message"
          required
          placeholder="Votre message ici"
          value={formData.message}
          onChange={handleChange}
        />
      </label>

      <button type="submit">Envoyer</button>
    </form>
  );
};

export default ContactForm;
