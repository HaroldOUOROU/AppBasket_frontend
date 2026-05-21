import { useMemo, useState } from "react";

const mockCoachRequests = [
  {
    id: 1,
    nom: "Coach Amina",
    email: "amina@coach.com",
    clubDemande: "Club Alpha",
    statut: "En attente",
    date: "2026-05-01",
  },
  {
    id: 2,
    nom: "Coach Karim",
    email: "karim@coach.com",
    clubDemande: "Club Beta",
    statut: "En attente",
    date: "2026-05-03",
  },
];

function CoachCard({ coach, onDecision }) {
  return (
    <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
            {coach.nom}
          </h3>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            {coach.email}
          </p>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
            Club demandé :{" "}
            <span className="font-semibold">{coach.clubDemande}</span>
          </p>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
            Date : {coach.date}
          </p>
        </div>

        <div className="flex gap-2">
          <button
            type="button"
            onClick={() => onDecision(coach.id, "valider")}
            className="px-4 py-2 rounded-lg bg-green-600 text-white hover:opacity-90 transition"
          >
            Valider
          </button>
          <button
            type="button"
            onClick={() => onDecision(coach.id, "rejeter")}
            className="px-4 py-2 rounded-lg bg-red-600 text-white hover:opacity-90 transition"
          >
            Rejeter
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CoachValidation() {
  const [requests, setRequests] = useState(mockCoachRequests);
  const [motif, setMotif] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  const pending = useMemo(
    () => requests.filter((r) => r.statut === "En attente"),
    [requests],
  );

  function handleDecision(id, decision) {
    if (decision === "rejeter" && (!motif || motif.trim().length < 3)) {
      setSelectedId(id);
      alert("Ajoute un motif (min 3 caractères) pour rejeter.");
      return;
    }

    setRequests((prev) =>
      prev.map((r) =>
        r.id === id
          ? {
              ...r,
              statut: decision === "valider" ? "Accepté" : "Rejeté",
              motif: decision === "rejeter" ? motif.trim() : undefined,
              decisionAt: new Date().toISOString(),
            }
          : r,
      ),
    );

    setMotif("");
    setSelectedId(null);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">
          Coachs à valider
        </h1>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">
          Valide ou rejette les inscriptions des coachs.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {pending.length === 0 ? (
            <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Rien à valider pour le moment.
            </div>
          ) : (
            pending.map((coach) => (
              <CoachCard
                key={coach.id}
                coach={coach}
                onDecision={handleDecision}
              />
            ))
          )}
        </div>

        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-5 h-fit">
          <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
            Motif de rejet
          </h2>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">
            Obligatoire uniquement si tu choisis « Rejeter ».
          </p>

          <textarea
            value={motif}
            onChange={(e) => setMotif(e.target.value)}
            placeholder="Ex: dossier incomplet, licence non valide..."
            className="mt-4 w-full min-h-28 p-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark text-text-primary-light dark:text-text-primary-dark"
          />

          {selectedId ? (
            <p className="text-xs text-orange-basket mt-3">
              Motif manquant/insuffisant pour la requête #{selectedId}.
            </p>
          ) : (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
              Astuce : mets un motif clair et actionnable.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
