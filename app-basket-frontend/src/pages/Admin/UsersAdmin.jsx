import { useMemo, useState } from "react";

const mockUsers = [
  {
    id: 1,
    nom: "Aminata Sow",
    email: "amina.sow@mail.com",
    role: "Coach",
    statut: "Actif",
  },
  {
    id: 2,
    nom: "Blaise Kouamé",
    email: "blaise.kouame@mail.com",
    role: "membre",
    statut: "Désactivé",
  },
  {
    id: 3,
    nom: "Selma Diallo",
    email: "selma.diallo@mail.com",
    role: "Coach",
    statut: "Actif",
  },
  {
    id: 4,
    nom: "Samuel Tchoco",
    email: "samuel.tchoco@mail.com",
    role: "Admin",
    statut: "Actif",
  },
];

function StatusPill({ statut }) {
  const cls =
    statut === "Actif"
      ? "bg-green-500/10 text-green-600"
      : "bg-orange-basket/20 text-orange-basket";

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${cls}`}
    >
      {statut}
    </span>
  );
}

export default function UsersAdmin() {
  const [users, setUsers] = useState(mockUsers);
  const [query, setQuery] = useState("");
  const [filterRole, setFilterRole] = useState("Tous");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return users.filter((u) => {
      const matchesQuery =
        !q ||
        u.nom.toLowerCase().includes(q) ||
        u.email.toLowerCase().includes(q);
      const matchesRole = filterRole === "Tous" || u.role === filterRole;
      return matchesQuery && matchesRole;
    });
  }, [users, query, filterRole]);

  function toggleUserStatus(id) {
    setUsers((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, statut: u.statut === "Actif" ? "Désactivé" : "Actif" }
          : u,
      ),
    );
  }

  function changeRole(id, role) {
    setUsers((prev) => prev.map((u) => (u.id === id ? { ...u, role } : u)));
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">
          Gestion des comptes
        </h1>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">
          Activer/désactiver et changer les rôles (mock).
        </p>
      </div>

      <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4 space-y-3">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Recherche (nom ou email)"
            className="w-full p-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark text-text-primary-light dark:text-text-primary-dark"
          />

          <select
            value={filterRole}
            onChange={(e) => setFilterRole(e.target.value)}
            className="w-full p-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark text-text-primary-light dark:text-text-primary-dark"
          >
            <option value="Tous">Tous les rôles</option>
            <option value="Admin">Admin</option>
            <option value="Coach">Coach</option>
            <option value="Visiteur">Membre</option>
          </select>

          <div className="flex items-center">
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setFilterRole("Tous");
              }}
              className="px-4 py-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark text-text-secondary-light dark:text-text-secondary-dark hover:opacity-90"
            >
              Réinitialiser
            </button>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-border-light dark:border-border-dark rounded-xl overflow-hidden">
          <thead className="bg-bg-light dark:bg-bg-dark">
            <tr className="text-left text-sm text-text-secondary-light dark:text-text-secondary-dark">
              <th className="p-4 font-semibold">Nom</th>
              <th className="p-4 font-semibold">Email</th>
              <th className="p-4 font-semibold">Rôle</th>
              <th className="p-4 font-semibold">Statut</th>
              <th className="p-4 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border-light dark:divide-border-dark">
            {filtered.map((u) => (
              <tr key={u.id} className="text-sm">
                <td className="p-4 font-medium text-text-primary-light dark:text-text-primary-dark">
                  {u.nom}
                </td>
                <td className="p-4 text-text-secondary-light dark:text-text-secondary-dark">
                  {u.email}
                </td>
                <td className="p-4">
                  <select
                    value={u.role}
                    onChange={(e) => changeRole(u.id, e.target.value)}
                    className="w-48 p-2 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark text-text-primary-light dark:text-text-primary-dark"
                  >
                    <option value="Admin">Admin</option>
                    <option value="Coach">Coach</option>
                    <option value="Visiteur">Visiteur</option>
                  </select>
                </td>
                <td className="p-4">
                  <StatusPill statut={u.statut} />
                </td>
                <td className="p-4">
                  <button
                    type="button"
                    onClick={() => toggleUserStatus(u.id)}
                    className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:opacity-90 transition"
                  >
                    {u.statut === "Actif" ? "Désactiver" : "Activer"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {filtered.length === 0 && (
          <div className="mt-4 text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Aucun utilisateur trouvé.
          </div>
        )}
      </div>
    </div>
  );
}
