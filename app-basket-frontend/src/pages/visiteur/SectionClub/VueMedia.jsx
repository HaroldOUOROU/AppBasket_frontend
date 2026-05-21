import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import HeaderClub from "../../../components/HeaderClub";
import OngletsClub from "../../../components/OngletsClub";
import { useState } from "react";

const categories = [
  "Tous",
  "Matchs",
  "Entraînements",
  "Événements",
  "Portraits",
];
const sexes = ["Tous", "Garçons", "Filles", "Mixte"];

const medias = [
  {
    id: 1,
    titre: "Finale U18",
    categorie: "Matchs",
    sexe: "Garçons",
    format: "photo",
    date: "12 Mai 2024",
  },
  {
    id: 2,
    titre: "Séance physique",
    categorie: "Entraînements",
    sexe: "Filles",
    format: "video",
    date: "10 Mai 2024",
  },
  {
    id: 3,
    titre: "Cérémonie des titres",
    categorie: "Événements",
    sexe: "Mixte",
    format: "photo",
    date: "1 Mai 2024",
  },
  {
    id: 4,
    titre: "Portrait Coach Koffi",
    categorie: "Portraits",
    sexe: "Garçons",
    format: "photo",
    date: "5 Mai 2024",
  },
];

const club = {
  nom: "Héritier 2A2B",
  initiale: "H",
  statut: "COMPÉTITIF",
  ville: "Cotonou",
  ligue: "Ligue Professionnelle A",
  followers: "1.2k",
  titres: "15",
};

export default function MediasClub() {
  const [categorieActive, setCategorieActive] = useState("Tous");
  const [sexeActif, setSexeActif] = useState("Tous");

  const mediasFiltres = medias.filter((m) => {
    const matchCat =
      categorieActive === "Tous" || m.categorie === categorieActive;
    const matchSexe = sexeActif === "Tous" || m.sexe === sexeActif;
    return matchCat && matchSexe;
  });

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <HeaderClub club={club} />
        <OngletsClub baseUrl="/clubs/1" />

        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">
            Médiathèque du Club
          </h2>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Parcourez la galerie : utilisez les filtres pour afficher uniquement
            les médias qui vous intéressent (matchs, entraînements, événements
            ou portraits).
          </p>
        </div>

        <div className="flex flex-col gap-8 py-4">
          {/* Filtres */}
          <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4 flex flex-col gap-6">
            <div>
              <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-widest mb-2 ">
                Catégorie
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setCategorieActive(cat)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all
                      ${
                        categorieActive === cat
                          ? "bg-orange-basket text-white"
                          : "border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:border-orange-basket hover:text-orange-basket"
                      }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-widest mb-2">
                Sexe
              </p>
              <div className="flex items-center gap-2">
                {sexes.map((sexe) => (
                  <button
                    key={sexe}
                    onClick={() => setSexeActif(sexe)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all
                      ${
                        sexeActif === sexe
                          ? "bg-blue-text text-white"
                          : "border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:border-blue-text hover:text-blue-text"
                      }`}
                  >
                    {sexe}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Grille */}
          <div className="grid grid-cols-3 gap-4">
            {mediasFiltres.map((media) => (
              <div
                key={media.id}
                className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden hover:-translate-y-1 transition-all cursor-pointer group"
              >
                <div className="relative h-40 bg-gray-100 dark:bg-bg-dark flex items-center justify-center">
                  <span className="text-4xl">
                    {media.format === "video" ? "🎥" : "🖼️"}
                  </span>
                  {media.format === "video" && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white">
                        ▶
                      </div>
                    </div>
                  )}
                  <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-black/50 text-white font-bold">
                    {media.sexe}
                  </span>
                </div>
                <div className="p-3">
                  <p className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark truncate mb-1">
                    {media.titre}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-basket/10 text-orange-basket font-medium">
                      {media.categorie}
                    </span>
                    <span className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark">
                      {media.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {mediasFiltres.length === 0 && (
            <div className="flex flex-col items-center justify-center h-40 bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark gap-2">
              <span className="text-3xl">📭</span>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                Aucun média pour cette sélection
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
}
