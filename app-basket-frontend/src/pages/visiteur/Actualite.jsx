import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { RefreshIcon } from "../../icons";
export default function Actualite() {
  const mesClubs = [
    { nom: "AS Cotonou", categorie: "Officiel", couleur: "bg-blue-500" },
    {
      nom: "Eloco BBC",
      categorie: "Entraînement",
      couleur: "bg-orange-basket",
    },
    { nom: "ASPAC Basketball", categorie: "Académie", couleur: "bg-red-500" },
  ];

  const clubsSuggeres = [
    { nom: "Renaissance BBC", info: "Parakou " },
    { nom: "Bosco Star", info: "Parakou " },
  ];

  const publications = [
    {
      id: 1,
      club: "AS Cotonou",
      initiale: "AC",
      couleur: "bg-blue-500",
      type: "Officiel",
      temps: "Il y a 1 heure",
      contenu:
        "Préparez-vous ! Le choc contre les Buffaloes de Parakou arrive ce samedi. Venez nombreux soutenir nos couleurs ! 🏀🔥 #LigueBénin #BasketBénin",
      match: { equipe1: "AS COTONOU", equipe2: "BUFFALOES" },
    },
    {
      id: 2,
      club: "Eloco BBC",
      initiale: "E",
      couleur: "bg-orange-basket",
      type: "Entraînement",
      temps: "Il y a 12h",
      contenu:
        "Planning de la semaine prochaine disponible. La séance de lundi est avancée à 17h00 exceptionnellement au Centre Sportif de Cotonou.",
      evenement: {
        date: "LUNDI 19 MAI",
        titre: "Séance Intensive · 17:00 - 19:30",
      },
    },
    {
      id: 3,
      club: "ASPAC Basketball",
      initiale: "A",
      couleur: "bg-red-500",
      type: "Annonce",
      temps: "Il y a 1 jour",
      contenu: "",
      mvp: {
        nom: "Moussa Traoré",
        message:
          "Félicitations à notre meneur pour sa performance exceptionnelle !",
      },
    },
  ];
  return (
    <div>
      <NavBar />

      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-12 gap-6">
        {/* Section des clubs suivis */}
        <aside className="col-span-3 min-w-0">
          <div className="bg-bg-light dark:bg-card-dark rounded-xl border border-border-dark p-4">
            <div className="flex item-center justify-between mb-4">
              <h2 className="text-sm font-bold text-text-primary-dark uppercase tracking-widest">
                Mes Clubs
              </h2>
              <button className="w-4 h-4 rounded-full bg-orange-basket text-white text-xs flex items-center justify-center shrink-0">
                +
              </button>
            </div>
            <ul className="flex flex-col gap-3">
              {mesClubs.map((club) => (
                <li
                  key={club.nom}
                  className="flex items-center gap-3 cursor-pointer hover:bg-bg-dark rounded-lg p-2 transition-all"
                >
                  <div
                    className={`w-9 h-9 rounded-full ${club.couleur} flex items-center justify-center text-white text-xs font-bold shrink-0`}
                  >
                    {club.nom.charAt(0)}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-medium text-text-primary-dark truncate">
                      {club.nom}
                    </p>
                    <p className="text-xs text-text-secondary-dark">
                      {club.categorie}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        <main className="col-span-6 min-w-0 flex flex-col gap-4">
           <div className="bg-card-dark rounded-xl border border-border-dark p-4 flex flex-wrap items-end gap-4">
            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-text-secondary-dark uppercase">Club</label>
              <select className="bg-bg-dark text-text-primary-dark text-sm rounded-lg px-3 py-1.5 border border-border-dark outline-none">
                <option>Tous mes clubs</option>
                {mesClubs.map((c) => (
                  <option key={c.nom}>{c.nom}</option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-text-secondary-dark uppercase">Catégorie</label>
              <select className="bg-bg-dark text-text-primary-dark text-sm rounded-lg px-3 py-1.5 border border-border-dark outline-none">
                <option>Toutes actualités</option>
                <option>Officiel</option>
                <option>Entraînement</option>
                <option>Annonce</option>
              </select>
            </div>
            <div className="flex flex-col gap-1">
              <label className="text-[10px] text-text-secondary-dark uppercase">Date</label>
              <input
                type="date"
                className="bg-bg-dark text-text-secondary-dark text-sm rounded-lg px-3 py-1.5 border border-border-dark outline-none"
              />
            </div>
          </div>
        </main>

        {/* Section des  Clubs suggérés */}
        <aside className="col-span-3 min-w-0 flex flex-col gap-4">
          <div className="bg-card-dark rounded-xl border border-border-dark p-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-sm font-bold text-text-primary-dark uppercase tracking-widest">
                Clubs Suggérés
              </h2>
              <button className="text-xs text-text-secondary-dark hover:text-orange-basket shrink-0">
                <RefreshIcon />
              </button>
            </div>
            <ul className="flex flex-col gap-3">
              {clubsSuggeres.map((club) => (
                <li key={club.nom} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shrink-0">
                    {club.nom.charAt(0)}
                  </div>
                  {/* min-w-0 + truncate pour éviter le débordement */}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-text-primary-dark truncate">
                      {club.nom}
                    </p>
                    <p className="text-xs text-text-secondary-dark">
                      {club.info}
                    </p>
                  </div>
                  <button className="text-xs px-3 py-1 rounded-full border border-orange-basket text-orange-basket hover:bg-orange-basket hover:text-white transition-all shrink-0">
                    Suivre
                  </button>
                </li>
              ))}
            </ul>
            <button className="w-full mt-4 text-xs text-text-secondary-dark hover:text-orange-basket transition-colors">
              VOIR PLUS
            </button>
          </div>
        </aside>
      </div>

      <Footer />
    </div>
  );
}
