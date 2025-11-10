import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <header>
       
          <h2> Développeur fullstack multilingue</h2>
        </header>

        <p>
          Un développeur freelance qui conçoit et déploie des sites et applications
          sur-mesure, traduits et optimisés pour la performance et la gestion simple.
        </p>

        <section aria-labelledby="services">
          <h3 id="services">Services proposés</h3>
          <ul>
            <li>Conception sur mesure : interface intuitive, design responsive, code propre.</li>
            <li>Multilingue : français + 5 langues (anglais, arabe, espagnol, turc, italien).</li>
            <li>Hébergement sécurisé : sauvegardes quotidiennes, SSL, disponibilité garantie.</li>
            <li>Maintenance optionnelle : mises à jour, sauvegardes, petites modifications.</li>
          </ul>
        </section>

        <section aria-labelledby="engagements">
          <ul>
            <li>Accompagnement complet : du cahier des charges au déploiement.</li>
            <li>Interlocuteur unique : suivi réactif et sans intermédiaire.</li>
            <li>Autonomie : formation et documentation pour gérer votre site facilement.</li>
            <li>Transparence : solutions claires, sans jargon.</li>
          </ul>

          <h3>Pour qui ?</h3>
          <p>
            Artisans, commerçants, indépendants et PME qui souhaitent gagner en visibilité
            et convertir plus de clients en ligne.
          </p>

          <p>
            Parlez-moi de votre projet via le formulaire, je vous propose une solution
            adaptée, rapide et sans jargon.
          </p>

          <button>Demandez un devis gratuit</button> <br />
          <button>Découvrez mes services</button>
        </section>
      </div>

      <Footer />
    </main>
  );
}
