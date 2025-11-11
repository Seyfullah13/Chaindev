
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
 

      <div className="flex-grow px-6 py-8 max-w-6xl mx-auto">
        <header className="mb-6">
          <h1 className="text-xl font-semibold leading-snug mb-4">
            Élargissez votre présence numérique à l’international.<br />
            Votre savoir-faire mérite d’être compris dans plusieurs langues.<br />
            Profitez d’un site web multilingue, fidèle à votre identité, optimisé pour accroître votre visibilité sur chaque marché et simple à gérer au quotidien.
          </h1>

          
        </header>

        
       

        <section aria-labelledby="engagements" className="mb-6">
          <h3 id="engagements" className="text-lg font-semibold mb-4">Engagements</h3>

          <div className="flex flex-col sm:flex-row flex-wrap gap-4 mb-6">
            <div className="card card-border bg-base-100 w-full sm:w-96">
              <div className="card-body">
                <h4 className="card-title">Accompagnement complet</h4>
                <p>Du cahier des charges au déploiement.</p>
              </div>
            </div>

            <div className="card card-border bg-base-100 w-full sm:w-96">
              <div className="card-body">
                <h4 className="card-title">Interlocuteur unique</h4>
                <p>Suivi réactif et sans intermédiaire.</p>
              </div>
            </div>

            <div className="card card-border bg-base-100 w-full sm:w-96">
              <div className="card-body">
                <h4 className="card-title">Autonomie</h4>
                <p>Formation et documentation pour gérer votre site facilement.</p>
              </div>
            </div>

            <div className="card card-border bg-base-100 w-full sm:w-96">
              <div className="card-body">
                <h4 className="card-title">Transparence</h4>
                <p>Solutions claires, sans jargon.</p>
              </div>
            </div>
          </div>
          <p className="mb-6">
          Des sites et applications
          sur-mesure, traduits et optimisés pour la performance et la gestion simple.
        </p>

          <section aria-labelledby="services" className="mb-6">
         
          <div className="card card-border bg-base-100 w-full sm:w-96">
              <div className="card-body">
                <h4 className="card-title">Conception sur mesure</h4>
                <p>Interface intuitive, design responsive, code propre.</p>
              </div>
            </div>
            <div className="card card-border bg-base-100 w-full sm:w-96">
              <div className="card-body">
                <h4 className="card-title">Multilingue</h4>
                <p>Français + 5 langues (Anglais, Arabe, Espagnol, Turc, Italien).</p>
              </div>
            </div>
            <div className="card card-border bg-base-100 w-full sm:w-96">
              <div className="card-body">
                <h4 className="card-title">Hébergement sécurisé</h4>
                <p>Sauvegardes quotidiennes, SSL, disponibilité garantie.</p>
              </div>
            </div>
            <div className="card card-border bg-base-100 w-full sm:w-96">
              <div className="card-body">
                <h4 className="card-title">Maintenance optionnelle </h4>
                <p>Mises à jour, Sauvegardes, Petites modifications.</p>
              </div>
            </div>
        
        </section>
          <h3 className="text-lg font-semibold mb-2">Pour qui ?</h3>
          <p className="mb-4">
            Artisans, commerçants, indépendants et PME qui souhaitent gagner en visibilité
            et convertir plus de clients en ligne.
          </p>

          <p className="mb-6">
            Parlez-moi de votre projet via le formulaire, je vous propose une solution
            adaptée, rapide et sans jargon.
          </p>

          <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact" className="btn btn-soft btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
  Demandez un devis gratuit
</Link>

<Link href="/prestations" className="btn btn-soft btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl">
  Découvrez mes services
</Link>

          </div>
        </section>
      </div>

  
    </main>
  );
}
