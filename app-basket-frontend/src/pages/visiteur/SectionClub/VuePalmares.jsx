import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import HeaderClub from "../../../components/HeaderClub";
import OngletsClub from "../../../components/OngletsClub";
import { useParams } from "react-router-dom";

const palmares = [
  {
    titre: "Championnat Élite 1",
    type: "Championnat National",
    annee: "2023",
    description: "Titre remporté après une finale mémorable contre l'ASPAC.",
    icone: "🏆",
    couleur: "bg-yellow-500",
  },
  {
    titre: "Coupe du Bénin",
    type: "Coupe Nationale",
    annee: "2022",
    description: "Victoire 78-64 en finale contre les Aigles de Cotonou.",
    icone: "🥇",
    couleur: "bg-blue-text",
  },
  {
    titre: "BAL — Basketball Africa League",
    type: "Compétition Continentale",
    annee: "2022",
    description: "Participation historique à la ligue africaine de basketball.",
    icone: "🌍",
    couleur: "bg-purple-500",
  },
  {
    titre: "MVP — Jean-Marc Koffi",
    type: "Distinction Individuelle",
    annee: "2021",
    description: "Meilleur entraîneur de la saison décerné par la FBBE.",
    icone: "⭐",
    couleur: "bg-orange-basket",
  },
  {
    titre: "Championnat Élite 1",
    type: "Championnat National",
    annee: "2020",
    description: "Troisième titre consécutif pour le club.",
    icone: "🏆",
    couleur: "bg-yellow-500",
  },
];

const annees = [...new Set(palmares.map((p) => p.annee))].sort((a, b) => b - a);

const club = {
  nom: "Héritier 2A2B",
  initiale: "H",
  statut: "COMPÉTITIF",
  ville: "Cotonou",
  ligue: "Ligue Professionnelle A",
  followers: "1.2k",
  titres: "15",
};

export default function PalmaresClub() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      <NavBar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <HeaderClub club={club} />
        <OngletsClub baseUrl={`/clubs/${id}`} />

        <div className="flex flex-col gap-2">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Un résumé des grandes performances du club : consultez les titres
            année par année.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <h2 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">
            Palmarès du Club
          </h2>

          <p className="text-gray-600 dark:text-gray-300">
            Découvrez l'historique glorieux du club à travers ses trophées et
            accomplissements.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-4 gap-4">
            {[
              { label: "Total titres", valeur: palmares.length, icone: "🏆" },
              {
                label: "Nationaux",
                valeur: palmares.filter((p) => p.type.includes("National"))
                  .length,
                icone: "🥇",
              },
              {
                label: "Continentaux",
                valeur: palmares.filter(
                  (p) => p.type === "Compétition Continentale",
                ).length,
                icone: "🌍",
              },
              {
                label: "Distinctions",
                valeur: palmares.filter(
                  (p) => p.type === "Distinction Individuelle",
                ).length,
                icone: "⭐",
              },
            ].map(({ label, valeur, icone }) => (
              <div
                key={label}
                className="bg-white dark:bg-card-dark rounded-xl border p-4 text-center"
              >
                <span className="text-2xl">{icone}</span>
                <p className="text-2xl font-black mt-1">{valeur}</p>
                <p className="text-xs">{label}</p>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div className="flex flex-col gap-8">
            {annees.map((annee) => (
              <div key={annee}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-14 h-14 rounded-full bg-orange-basket flex items-center justify-center text-white font-black">
                    {annee}
                  </div>
                  <div className="flex-1 h-px bg-border-light" />
                </div>

                <div className="grid grid-cols-2 gap-4 ml-18">
                  {palmares
                    .filter((p) => p.annee === annee)
                    .map((titre, i) => (
                      <div
                        key={i}
                        className="bg-white dark:bg-card-dark rounded-xl border p-4 flex gap-4"
                      >
                        <div
                          className={`w-10 h-10 rounded-full ${titre.couleur} flex items-center justify-center text-white`}
                        >
                          {titre.icone}
                        </div>

                        <div>
                          <p className="text-sm font-bold mb-1">
                            {titre.titre}
                          </p>

                          <span
                            className={`text-[10px] px-2 py-0.5 rounded-full text-white font-bold ${titre.couleur}`}
                          >
                            {titre.type}
                          </span>

                          <p className="text-xs mt-2">{titre.description}</p>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
