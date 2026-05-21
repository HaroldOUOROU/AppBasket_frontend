import { useMemo, useState } from "react";

const mockClubs = [
  { id: 1, nom: "Club Alpha", ville: "Cotonou", statut: "Actif" },
  { id: 2, nom: "Club Beta", ville: "Porto-Novo", statut: "En attente" },
  { id: 3, nom: "Héritier 2A2B", ville: "Cotonou", statut: "Actif" },
];

export default function ClubsAdmin() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return mockClubs;
    return mockClubs.filter(
      (c) =>
        c.nom.toLowerCase().includes(q) || c.ville.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">
          Clubs
        </h1>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">
          Liste des clubs et état d’affiliation (mock).
        </p>
      </div>

      <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Rechercher un club (nom/ville)"
          className="w-full p-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark text-text-primary-light dark:text-text-primary-dark"
        />
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-border-light dark:border-border-dark rounded-xl overflow-hidden">
          <thead className="bg-bg-light dark:bg-bg-dark">
            <tr className="text-left text-sm text-text-secondary-light dark:text-text-secondary-dark">
              <th className="p-4 font-semibold">Nom</th>
              <th className="p-4 font-semibold">Ville</th>
              <th className="p-4 font-semibold">Statut</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light dark:divide-border-dark">
            {filtered.map((c) => (
              <tr key={c.id} className="text-sm">
                <td className="p-4 font-medium text-text-primary-light dark:text-text-primary-dark">
                  {c.nom}
                </td>
                <td className="p-4 text-text-secondary-light dark:text-text-secondary-dark">
                  {c.ville}
                </td>
                <td className="p-4">
                  {c.statut === "Actif" ? (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-green-500/10 text-green-600">
                      Actif
                    </span>
                  ) : (
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-orange-basket/20 text-orange-basket">
                      En attente
                    </span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="mt-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Aucun club trouvé.
          </div>
        )}
      </div>
    </div>
  );
}
