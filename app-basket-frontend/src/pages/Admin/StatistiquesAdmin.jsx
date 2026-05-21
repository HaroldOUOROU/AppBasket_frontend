import { useMemo, useState } from "react";

export default function StatistiquesAdmin() {
  const [range, setRange] = useState("7j");

  const base = useMemo(() => {
    // mock: dépend juste du range
    const mult = range === "24h" ? 0.5 : range === "30j" ? 2 : 1;
    return {
      coachsPending: Math.round(12 * mult),
      usersDisabled: Math.round(5 * mult),
      contentsPending: Math.round(9 * mult),
      decisions: Math.round(38 * mult),
    };
  }, [range]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">
          Statistiques
        </h1>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">
          Vue d’ensemble (mock).
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <div className="flex gap-2">
          {["24h", "7j", "30j"].map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setRange(r)}
              className={`px-4 py-2 rounded-lg border transition ${
                range === r
                  ? "bg-blue-600 text-white border-blue-600"
                  : "bg-bg-light dark:bg-bg-dark border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:opacity-90"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-gradient-to-br from-blue-text/10 p-6 rounded-xl border shadow-lg">
          <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark text-sm">
            Coachs en attente
          </h3>
          <p className="text-3xl font-black mt-2 text-blue-text">
            {base.coachsPending}
          </p>
        </div>
        <div className="bg-gradient-to-br from-orange-basket/10 p-6 rounded-xl border shadow-lg">
          <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark text-sm">
            Utilisateurs désactivés
          </h3>
          <p className="text-3xl font-black mt-2 text-orange-basket">
            {base.usersDisabled}
          </p>
        </div>
        <div className="bg-gradient-to-br from-purple-500/10 p-6 rounded-xl border shadow-lg">
          <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark text-sm">
            Contenus en attente
          </h3>
          <p className="text-3xl font-black mt-2 text-purple-600">
            {base.contentsPending}
          </p>
        </div>
        <div className="bg-gradient-to-br from-green-500/10 p-6 rounded-xl border shadow-lg">
          <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark text-sm">
            Décisions
          </h3>
          <p className="text-3xl font-black mt-2 text-green-600">
            {base.decisions}
          </p>
        </div>
      </div>

      <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
        <h2 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
          Lecture rapide
        </h2>
        <ul className="mt-3 space-y-2 text-sm text-text-secondary-light dark:text-text-secondary-dark list-disc pl-5">
          <li>
            Prioriser la validation coachs si l’indicateur “En attente”
            augmente.
          </li>
          <li>
            Si “Contenus en attente” est élevé, ouvrir la page de modération.
          </li>
          <li>Surveiller les comptes désactivés (sécurité + qualité).</li>
        </ul>
      </div>
    </div>
  );
}
