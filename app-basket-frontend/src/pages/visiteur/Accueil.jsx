import { CampIcon, FilterIcon } from "../../icons";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Accueil() {
  const [sectionClubs, setSectionClubs] = useState([
    {
      nom: "Elan Coton BBC",
      ville: "Cotonou",
      categorie: "Compétition",
      badge: "ÉLITE 1",
    },
    {
      nom: "ASPAC BBC",
      ville: "Cotonou",
      categorie: "Compétition",
      badge: "ÉLITE 1",
    },
    {
      nom: "Renaissance",
      ville: "Porto-Novo",
      categorie: "Formation",
      badge: "ESPOIR",
    },
    {
      nom: "Eternel BBC",
      ville: "Cotonou",
      categorie: "Formation",
      badge: "LIGUE RÉGIONALE",
    },
  ]);

  return (
    <div>
      <NavBar />
      <main>
        <section
          className="relative rounded-2xl overflow-hidden mx-4 mt-4"
          style={{ backgroundImage: `url("/images/Modern court.jpg")` }}
        >
          <div className="absolute inset-0 bg-black/40" />

          <div className="relative z-10 flex flex-col items-center justify-center min-h-125 px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
              Bienvenue sur BasketScoop <br />
            </h1>

            <p className="mt-4 text-gray-200 max-w-lg text-base">
              Découvrez les clubs de basketball au Bénin et restez informé des
              dernières actualités du basketball dans votre pays.........
            </p>

            <div className="flex items-center gap-3 bg-white dark:bg-card-dark rounded-xl px-4 py-3 shadow-md w-full max-w-lg mt-8">
              <svg
                className="w-5 h-5 text-gray-400 shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z"
                />
              </svg>
              <div className="w-px h-5 bg-border-light" />
              <input
                type="text"
                placeholder="Nom du club, ville..."
                className="flex-1 outline-none text-sm text-gray-700 placeholder-gray-400 bg-transparent"
              />
              <button className="bg-orange-basket text-white px-6 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shrink-0">
                Rechercher
              </button>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 h-1.5 flex">
            <div className="flex-1 bg-bg-benin-green" />
            <div className="flex-1 bg-bg-benin-yellow" />
            <div className="flex-1 bg-bg-benin-red" />
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Colonne de gauche  */}

          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
                  Clubs en Vedette
                </h2>
              </div>
              <FilterIcon className="text-text-secondary-light dark:text-text-secondary-dark" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              {sectionClubs.map((club) => (
                <div
                  key={club.nom}
                  className="bg-white dark:bg-card-dark rounded-xl overflow-hidden shadow-sm border border-border-light dark:border-border-dark hover:-translate-y-1 transition-all"
                >
                  <div className="relative h-36 bg-gray-100 dark:bg-bg-dark">
                    <span className="absolute top-2 right-2 px-2 py-0.5 rounded-full bg-orange-basket text-white text-[10px] font-bold">
                      {club.badge}
                    </span>
                  </div>
                  <div className="p-3">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-bold text-sm text-text-primary-light dark:text-text-primary-dark">
                        {club.nom}
                      </h3>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-text/10 text-blue-text font-medium">
                        {club.categorie}
                      </span>
                    </div>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-3">
                      📍 {club.ville}
                    </p>
                    <button className="text-xs text-orange-basket font-semibold hover:underline">
                      Voir Profil →
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <Link to="/clubs" className="px-6 py-2 rounded-xl border border-border-light dark:border-border-dark text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:border-orange-basket hover:text-orange-basket transition-all">
                Charger plus de clubs
              </Link>
            </div>
          </div>



          {/* Colonne de droite pour les actuaités */}

          <div className="lg:col-span-1 flex flex-col gap-6">
            <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4">
              <h2 className="text-base font-bold text-text-primary-light dark:text-text-primary-dark mb-4 flex items-center gap-2">
                <CampIcon className="w-5 h-5 text-orange-basket" />À la une
              </h2>

              <div className="flex flex-col gap-4">
                <div className="border-b border-border-light dark:border-border-dark pb-4">
                  <span className="text-[10px] font-semibold text-blue-text uppercase">
                    Formation · 5 jours
                  </span>
                  <h2 className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark mt-1">
                    🏀 Camp de basket BasketBall Coach Q
                  </h2>
                  <p className="text-xs text-gray-500 mt-1">
                    Un programme intensif pour les jeunes de 8 à 18 ans
                  </p>

                  <ul className="list-disc list-inside text-xs mt-2 space-y-1 text-text-secondary-light dark:text-text-secondary-dark">
                    <li>
                      Entraînements intensifs sur les fondamentaux et la
                      technique
                    </li>
                    <li>
                      Ateliers de discipline, esprit d'équipe et confiance en
                      soi
                    </li>
                    <li>
                      Encadrement professionnel pour progresser rapidement
                    </li>
                  </ul>
                </div>

                <div className="border-b border-border-light dark:border-border-dark pb-4">
                  <span className="text-[10px] font-semibold text-green-600 uppercase">
                    Résultat · Hier
                  </span>
                  <p className="text-sm font-semibold text-text-primary-light dark:text-text-primary-dark mt-1">
                    Playoffs Élite 1
                  </p>
                  <div className="flex items-center justify-between mt-2 bg-bg-light dark:bg-bg-dark rounded-lg px-4 py-2">
                    <div className="text-center">
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                        Elan
                      </p>
                      <p className="text-2xl font-black text-text-primary-light dark:text-text-primary-dark">
                        78
                      </p>
                    </div>
                    <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                      VS
                    </span>
                    <div className="text-center">
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                        ASPAC
                      </p>
                      <p className="text-2xl font-black text-text-primary-light dark:text-text-primary-dark">
                        74
                      </p>
                    </div>
                  </div>
                </div>

                {/* Actu 3 */}
              </div>
            </div>

            <div className="bg-blue-text rounded-xl p-4">
              <h3 className="text-white font-bold text-sm mb-1">
                Ne manquez rien !
              </h3>
              <p className="text-gray-300 text-xs mb-4">
                Recevez les alertes résultats et actualités des clubs chaque
                semaine.
              </p>
              {/* <div className="flex items-center gap-2">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 rounded-lg text-sm outline-none bg-white/10 text-white placeholder-gray-400 border border-white/20 focus:border-orange-basket"
                />
                <button className="p-2 rounded-lg bg-orange-basket text-white hover:opacity-90 transition-opacity">
                  →
                </button>
              </div> */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}




