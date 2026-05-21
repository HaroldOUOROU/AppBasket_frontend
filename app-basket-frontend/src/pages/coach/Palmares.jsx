import { useState } from "react";

const typesCompetition = [
  "Tous",
  "Championnat National",
  "Compétition Continentale",
  "Distinction Individuelle",
  "Tournoi International",
];

const palmares = [
  {
    id: 1,
    titre: "Championnat Élite 1",
    type: "Championnat National",
    annee: "2023",
    description: "Titre remporté après une finale mémorable contre l'ASPAC.",
    distinction: false,
  },
  {
    id: 2,
    titre: "Coupe du Bénin",
    type: "Coupe Nationale",
    annee: "2022",
    description: "Victoire 78-64 en finale contre les Aigles de Cotonou.",
    distinction: false,
  },
  {
    id: 3,
    titre: "BAL — Basketball Africa League",
    type: "Compétition Continentale",
    annee: "2022",
    description: "Participation historique à la ligue africaine de basketball.",
    distinction: false,
  },
  {
    id: 4,
    titre: "MVP — Jean-Marc Koffi",
    type: "Distinction Individuelle",
    annee: "2021",
    description: "Meilleur entraîneur de la saison décerné par la FBBE.",
    distinction: true,
  },
  {
    id: 5,
    titre: "Championnat Élite 1",
    type: "Championnat National",
    annee: "2020",
    description: "Troisième titre consécutif pour le club.",
    distinction: false,
  },
  {
    id: 6,
    titre: "Tournoi de Lomé",
    type: "Tournoi International",
    annee: "2019",
    description:
      "Premier titre international du club face à des équipes togolaises.",
    distinction: false,
  },
];

const couleurParType = {
  "Championnat National": "bg-yellow-500",
  "Coupe Nationale": "bg-blue-text",
  "Compétition Continentale": "bg-purple-500",
  "Distinction Individuelle": "bg-orange-basket",
  "Tournoi International": "bg-green-500",
};

const iconeParType = {
  "Championnat National": "🏆",
  "Compétition Continentale": "🌍",
  "Distinction Individuelle": "⭐",
  "Tournoi International": "🏅",
};

export default function GestionPalmares() {
  const [typeActif, setTypeActif] = useState("Tous");
  const [showFormulaire, setShowFormulaire] = useState(false);
  const [titres, setTitres] = useState(palmares);

  const [newTitre, setNewTitre] = useState({
    titre: "",
    type: "Championnat National",
    annee: new Date().getFullYear().toString(),
    description: "",
    distinction: false,
  });

  // Filter les titres selon le type actif
  let titresFiltres = titres;
  if (typeActif !== "Tous") {
    titresFiltres = titres.filter((t) => t.type === typeActif);
  }

  // Récupérer les années uniques pour la timeline
  const annees = [...new Set(titresFiltres.map((t) => t.annee))].sort(
    (a, b) => b - a,
  );
  // Ajouter un nouveau titre au palmarès
  const ajouterTitre = () => {
    if (!newTitre.titre || !newTitre.annee) return;
    setTitres([{ ...newTitre, id: Date.now() }, ...titres]);
    setNewTitre({
      titre: "",
      type: "Championnat National",
      annee: new Date().getFullYear().toString(),
      description: "",
      distinction: false,
    });
    setShowFormulaire(false);
  };

  // supprimerTitre
  const supprimerTitre = (id) => {
    setTitres(titres.filter((t) => t.id !== id));
  };

  // Statistiques rapides
  const totalTitres = titres.length;

  const nombreNationaux = titres.filter(function (titre) {
    return (
      titre.type === "Championnat National" || titre.type === "Coupe Nationale"
    );
  }).length;

  const nombreContinentaux = titres.filter(function (titre) {
    return titre.type === "Compétition Continentale";
  }).length;

  const nombreDistinctions = titres.filter(function (titre) {
    return titre.distinction === true;
  }).length;

  const statistiques = [
    {
      label: "Total titres",
      valeur: totalTitres,
      icone: "🏆",
    },
    {
      label: "Nationaux",
      valeur: nombreNationaux,
      icone: "🥇",
    },
    {
      label: "Continentaux",
      valeur: nombreContinentaux,
      icone: "🌍",
    },
    {
      label: "Distinctions",
      valeur: nombreDistinctions,
      icone: "⭐",
    },
  ];

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border-light dark:border-border-dark bg-white dark:bg-card-dark">
        <div>
          <h1 className="text-2xl font-black text-text-primary-light dark:text-text-primary-dark">
            Palmarès du Club
          </h1>
          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
            Gérez les titres, distinctions et participations notables de votre
            club.
          </p>
        </div>
        <button
          onClick={() => setShowFormulaire(!showFormulaire)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-text to-orange-basket text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          🏆 Ajouter un titre
        </button>
      </div>

      <main className="flex-1 p-6 overflow-auto flex flex-col gap-6">
        {/* Formulaire d'ajout de titre */}
        {showFormulaire === true && (
          <div className="bg-white dark:bg-card-dark rounded-xl border border-orange-basket p-5">
            <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
              ➕ Nouveau Titre
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                  Nom du titre
                </label>
                <input
                  type="text"
                  placeholder="Ex: Championnat Élite 1"
                  value={newTitre.titre}
                  onChange={(e) =>
                    setNewTitre({ ...newTitre, titre: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-orange-basket transition-colors"
                />
              </div>

              <div>
                <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                  Type de compétition
                </label>
                <select
                  value={newTitre.type}
                  onChange={(e) =>
                    setNewTitre({ ...newTitre, type: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-card-dark text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-orange-basket transition-colors"
                >
                  {typesCompetition
                    .filter((t) => t !== "Tous")
                    .map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                </select>
              </div>

              <div>
                <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                  Année
                </label>
                <input
                  type="number"
                  placeholder="2024"
                  value={newTitre.annee}
                  onChange={(e) =>
                    setNewTitre({ ...newTitre, annee: e.target.value })
                  }
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-orange-basket transition-colors"
                />
              </div>

              <div className="flex items-center gap-3 mt-5">
                <input
                  type="checkbox"
                  id="distinction"
                  checked={newTitre.distinction}
                  onChange={(e) =>
                    setNewTitre({ ...newTitre, distinction: e.target.checked })
                  }
                  className="accent-orange-basket w-4 h-4 cursor-pointer"
                />
                <label
                  htmlFor="distinction"
                  className="text-sm text-text-primary-light dark:text-text-primary-dark cursor-pointer"
                >
                  Distinction individuelle
                </label>
              </div>
            </div>

            <div className="mb-4">
              <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                Description
              </label>
              <textarea
                rows={3}
                placeholder="Décrivez ce titre, la finale, les circonstances..."
                value={newTitre.description}
                onChange={(e) =>
                  setNewTitre({ ...newTitre, description: e.target.value })
                }
                className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-orange-basket transition-colors resize-none"
              />
            </div>

            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowFormulaire(false)}
                className="px-4 py-2 rounded-lg border border-border-light dark:border-border-dark text-sm font-medium text-text-primary-light dark:text-text-primary-dark hover:border-red-400 hover:text-red-400 transition-all"
              >
                Annuler
              </button>
              <button
                onClick={ajouterTitre}
                className="px-4 py-2 rounded-lg bg-orange-basket text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Enregistrer le titre
              </button>
            </div>
          </div>
        )}

        {/* Stats rapides */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {statistiques.map(function (stat) {
            return (
              <div
                key={stat.label}
                className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4 flex items-center gap-3"
              >
                <span className="text-2xl shrink-0">{stat.icone}</span>

                <div className="min-w-0">
                  <p className="text-xl font-black text-text-primary-light dark:text-text-primary-dark">
                    {stat.valeur}
                  </p>

                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark truncate">
                    {stat.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Filtres */}
        <div className="flex items-center gap-2 flex-wrap">
          {typesCompetition.map((type) => (
            <button
              key={type}
              onClick={() => setTypeActif(type)}
              className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium transition-all
                ${
                  typeActif === type
                    ? "bg-orange-basket text-white"
                    : "border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:border-orange-basket hover:text-orange-basket"
                }`}
            >
              {type !== "Tous" && iconeParType[type]}
              {type}
            </button>
          ))}
        </div>

        {/* Timeline */}
        <div className="flex flex-col gap-8">
          {annees.map((annee) => (
            <div key={annee}>
              {/* Année */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-orange-basket flex items-center justify-center text-white font-black text-lg shrink-0">
                  {annee}
                </div>
                <div className="flex-1 h-px bg-border-light dark:bg-border-dark" />
              </div>

              {/* Titres de l'année */}
              <div className="grid grid-cols-2 gap-4 ml-20">
                {titresFiltres
                  .filter((t) => t.annee === annee)
                  .map((titre) => (
                    <div
                      key={titre.id}
                      className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4 hover:-translate-y-1 transition-all group"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 rounded-full ${couleurParType[titre.type]} flex items-center justify-center text-white text-lg shrink-0`}
                          >
                            {iconeParType[titre.type]}
                          </div>
                          <div>
                            <p className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark">
                              {titre.titre}
                            </p>
                            <span
                              className={`text-[10px] px-2 py-0.5 rounded-full text-white font-bold ${couleurParType[titre.type]}`}
                            >
                              {titre.type}
                            </span>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="w-7 h-7 rounded-lg border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-blue-text hover:border-blue-text transition-all flex items-center justify-center text-xs">
                            ✏️
                          </button>
                          <button
                            onClick={() => supprimerTitre(titre.id)}
                            className="w-7 h-7 rounded-lg border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:text-red-400 hover:border-red-400 transition-all flex items-center justify-center text-xs"
                          >
                            🗑️
                          </button>
                        </div>
                      </div>

                      {titre.description && (
                        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                          {titre.description}
                        </p>
                      )}

                      {titre.distinction && (
                        <div className="mt-2 flex items-center gap-1">
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-basket/10 text-orange-basket font-bold">
                            ⭐ Distinction individuelle
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Vide */}
        {titresFiltres.length === 0 && (
          <div className="flex flex-col items-center justify-center h-40 bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark gap-2">
            <span className="text-3xl">🏅</span>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Aucun titre dans cette catégorie
            </p>
            <button
              onClick={() => setShowFormulaire(true)}
              className="text-xs text-orange-basket hover:underline"
            >
              Ajouter un titre →
            </button>
          </div>
        )}
      </main>
    </div>
  );
}
