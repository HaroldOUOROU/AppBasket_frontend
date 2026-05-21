import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

import {
  LocateIcon,
  CategoryIcon,
  SportBasketIcon,
  InfoIcon,
  ArrowIcon,
  ArrowBackIcon,
} from "../../icons";

import { Link } from "react-router-dom";

import { useState } from "react";

export default function AnnuaireClub() {
  const clubs = [
    {
      nom: "Élan Cotonou",
      ville: "Cotonou",
      annee: 1992,
      type: "Compétitif",
      badge: "COMPETITIF",
    },
    {
      nom: "ASPAC BC",
      ville: "Cotonou",
      annee: 2005,
      type: "Académie",
      badge: "ACADEMIE",
    },
    {
      nom: "Renaissance BC",
      ville: "Parakou",
      annee: 2018,
      type: "Académie",
      badge: "ACADEMIE",
    },
    {
      nom: "Énergie BBC",
      ville: "Porto-Novo",
      annee: 2008,
      type: "Compétitif",
      badge: "COMPETITIF",
    },
    {
      nom: "Bosco Stars",
      ville: "Cotonou",
      annee: 2015,
      type: "Académie",
      badge: "ACADEMIE",
    },
    {
      nom: "Calavi BC",
      ville: "Abomey-Calavi",
      annee: 2012,
      type: "Compétitif",
      badge: "COMPETITIF",
    },
  ];

  const villes = ["Cotonou", "Porto-Novo", "Parakou"];
  const categories = ["U14", "U16", "U18", "U20", "Sénior Amateur(D2)"];
  const types = ["Académie", "Compétitif"];

  const [showInfo, SetshowInfo] = useState(false);

  return (
    <div>
      <NavBar />

      {/* Le filtre */}
      <div className="flex max-w-7xl mx-auto px-4 py-8 gap-6">
        <aside className="w-64 shrink-0">
          <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5 sticky top-4">
            <h2 className="font-bold text-text-primary-light dark:text-text-primary-dark mb-1">
              Filtres
            </h2>
            <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-5">
              Affinez votre recherche
            </p>

            {/* Ville */}
            <div className="mb-5">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-blue-text dark:text-blue-400 mb-3 flex items-center gap-1">
                <LocateIcon className="text-red-500" /> Ville
              </h3>
              <ul className="flex flex-col gap-2">
                {villes.map((ville) => (
                  <li key={ville} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={ville}
                      className="accent-orange-basket w-4 h-4 cursor-pointer"
                    />
                    <label
                      htmlFor={ville}
                      className="text-sm text-text-primary-light dark:text-text-primary-dark cursor-pointer"
                    >
                      {ville}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* categories*/}
            <div className="mb-5">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-blue-text dark:text-blue-400 mb-3 flex items-center gap-1">
                <CategoryIcon className="text-blue-text" /> Catégorie
              </h3>
              <ul className="flex flex-col gap-2">
                {categories.map((categorie) => (
                  <li key={categorie} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={categorie}
                      className="accent-orange-basket w-4 h-4 cursor-pointer"
                    />
                    <label
                      htmlFor={categorie}
                      className="text-sm text-text-primary-light dark:text-text-primary-dark cursor-pointer"
                    >
                      {categorie}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {/* Type de club */}
            <div className="mb-5">
              <h3 className="text-[11px] font-bold uppercase tracking-widest text-blue-text dark:text-blue-400 mb-3 flex items-center gap-1">
                <SportBasketIcon className="text-blue-text" /> Type de Clubs
              </h3>
              <ul className="flex flex-col gap-2">
                {types.map((type) => (
                  <li key={type} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id={type}
                      className="accent-orange-basket w-4 h-4 cursor-pointer"
                    />
                    <label
                      htmlFor={type}
                      className="text-sm text-text-primary-light dark:text-text-primary-dark cursor-pointer"
                    >
                      {type}
                    </label>

                    {/* Icône infos avec bulle */}
                    <div className="relative group inline-flex items-center">
                      <InfoIcon className="w-3 h-3 text-gray-400 cursor-pointer" />
                      <div
                        className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 rounded-lg bg-gray-900 text-white text-xs
              opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50"
                      >
                        {type === "Académie"
                          ? "Club axé sur la formation et l'accompagnement des jeunes joueurs dans leur développement sportif et personnel."
                          : "Club participant au championnat national organisé par la Fédération de BasketBall Béninoise (FBBB)."}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900" />
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <button className="w-full py-2 rounded-lg border border-blue-text text-blue-text text-sm font-medium hover:bg-blue-text hover:text-white transition-all">
              Réinitialiser
            </button>

            <div className="flex flex-col gap-2 mt-5">
              <Link
                to=""
                className="text-xs text-text-secondary-light dark:text-text-secondary-dark hover:text-orange-basket flex items-center gap-1"
              >
                ❓ Aide
              </Link>
              <Link
                to=""
                className="text-xs text-text-secondary-light dark:text-text-secondary-dark hover:text-orange-basket flex items-center gap-1"
              >
                📞 Contact
              </Link>
            </div>
          </div>
        </aside>

        <main className="flex-1">
          <h2 className="text-2xl font-bold text-text-primary-light dark:text-text-primary-dark mb-">
            Annuaire des Clubs
          </h2>
          <div className="flex items-center gap-3 bg-white dark:bg-card-dark rounded-xl px-4 py-3 shadow-sm border border-border-light dark:border-border-dark w-full mb-4">
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
            <input
              type="text"
              placeholder="Rechercher un club (ex: Elan Cotonou, ASPAC...)"
              className="flex-1 outline-none text-sm text-gray-700 dark:text-text-primary-dark placeholder-gray-400 bg-transparent"
            />
            <button className="bg-blue-text text-white px-4 py-1.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity shrink-0">
              Rechercher
            </button>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark font-semibold uppercase">
              Actifs :
            </span>
          </div>

          <div className="grid grid-cols-2 xl:grif-cols-3 gap-4">
            {clubs.map((club) => (
              <div
                className="bg-white dark:bg-card-dark rounded-xl overflow-hidden border border-border-light dark:border-border-dark hover:-translate-y-1 transition-all cursor-pointer"
                key={club.nom}
              >
                <div className="relative h-60 bg-gray-100 dark:bg-bg-dark flex items-center justify-center">
                  <span
                    className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-white text-[10px] font-bold
                    ${club.type === "Compétitif" ? "bg-blue-500" : "bg-green-500"}`}
                  >
                    {club.badge}
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-text-primary-light dark:text-text-primary-dark mb-1">
                    {club.nom}
                  </h3>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1">
                    📅 Fondé en {club.annee}
                  </p>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                    📍 {club.ville}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2 mt-8">
            <button className="w-8 h-8 rounded-lg border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:border-orange-basket hover:text-orange-basket transition-all">
              <ArrowIcon />
            </button>
            {[1, 2].map((page) => (
              <button
                key={page}
                className={`w-8 h-8 rounded-lg text-sm font-medium transition-all
                  ${
                    page === 1
                      ? "bg-orange-basket text-white"
                      : "border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:border-orange-basket hover:text-orange-basket"
                  }`}
              >
                {page}
              </button>
            ))}
            <button className="w-8 h-8 rounded-lg border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:border-orange-basket hover:text-orange-basket transition-all">
              <ArrowBackIcon />
            </button>
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
}
