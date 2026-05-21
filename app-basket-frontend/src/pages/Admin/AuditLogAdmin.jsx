import { useMemo, useState } from "react";

const mockLogs = [
  {
    id: 1,
    action: "Valider coach",
    actor: "Admin",
    cible: "Coach Karim",
    resultat: "Accepté",
    date: "2026-05-06 10:21",
  },
  {
    id: 2,
    action: "Rejeter coach",
    actor: "Admin",
    cible: "Coach Amina",
    resultat: "Rejeté",
    date: "2026-05-05 17:44",
  },
  {
    id: 3,
    action: "Modérer publication",
    actor: "Admin",
    cible: "Publication : Annonce match U16",
    resultat: "Approuvé",
    date: "2026-05-04 09:10",
  },
  {
    id: 4,
    action: "Désactiver compte",
    actor: "Admin",
    cible: "Blaise Kouamé",
    resultat: "Désactivé",
    date: "2026-05-03 12:02",
  },
];

export default function AuditLogAdmin() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return mockLogs;
    return mockLogs.filter(
      (l) =>
        l.action.toLowerCase().includes(q) ||
        l.actor.toLowerCase().includes(q) ||
        l.cible.toLowerCase().includes(q) ||
        l.resultat.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">
          Audit log
        </h1>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">
          Historique des actions admin (mock).
        </p>
      </div>

      <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher dans l’historique"
          className="w-full p-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark text-text-primary-light dark:text-text-primary-dark"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-border-light dark:border-border-dark rounded-xl overflow-hidden">
          <thead className="bg-bg-light dark:bg-bg-dark">
            <tr className="text-left text-sm text-text-secondary-light dark:text-text-secondary-dark">
              <th className="p-4 font-semibold">Date</th>
              <th className="p-4 font-semibold">Action</th>
              <th className="p-4 font-semibold">Acteur</th>
              <th className="p-4 font-semibold">Cible</th>
              <th className="p-4 font-semibold">Résultat</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light dark:divide-border-dark">
            {filtered.map((l) => (
              <tr key={l.id} className="text-sm">
                <td className="p-4 whitespace-nowrap text-text-secondary-light dark:text-text-secondary-dark">
                  {l.date}
                </td>
                <td className="p-4 font-medium text-text-primary-light dark:text-text-primary-dark">
                  {l.action}
                </td>
                <td className="p-4 text-text-secondary-light dark:text-text-secondary-dark">
                  {l.actor}
                </td>
                <td className="p-4 text-text-secondary-light dark:text-text-secondary-dark">
                  {l.cible}
                </td>
                <td className="p-4">
                  <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-text/10 text-blue-text">
                    {l.resultat}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="mt-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Aucun log trouvé.
          </div>
        )}
      </div>
    </div>
  );
}
