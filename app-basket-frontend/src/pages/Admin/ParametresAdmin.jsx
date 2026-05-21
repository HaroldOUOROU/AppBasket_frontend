import { useState } from "react";

export default function ParametresAdmin() {
  const [moderationRequireMotif, setModerationRequireMotif] = useState(true);
  const [coachValidationDays, setCoachValidationDays] = useState(7);
  const [autoDisableAfterRejection, setAutoDisableAfterRejection] =
    useState(false);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">
          Paramètres admin
        </h1>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">
          Configuration des règles de modération/validation (mock).
        </p>
      </div>

      <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-bold text-text-primary-light dark:text-text-primary-dark">
              Motif obligatoire
            </h2>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Forcer un motif lors d’un rejet (coachs & modération).
            </p>
          </div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={moderationRequireMotif}
              onChange={(e) => setModerationRequireMotif(e.target.checked)}
            />
            <span className="text-sm font-semibold">
              {moderationRequireMotif ? "Oui" : "Non"}
            </span>
          </label>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-bold text-text-primary-light dark:text-text-primary-dark">
              Délai de validation coach
            </h2>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Nombre de jours après inscription pendant lesquels l’admin peut
              valider/rejeter.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="number"
              min={1}
              value={coachValidationDays}
              onChange={(e) => setCoachValidationDays(Number(e.target.value))}
              className="w-28 p-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark text-text-primary-light dark:text-text-primary-dark"
            />
            <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              jours
            </span>
          </div>
        </div>

        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-bold text-text-primary-light dark:text-text-primary-dark">
              Auto-désactivation
            </h2>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Désactiver automatiquement un compte après rejet.
            </p>
          </div>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={autoDisableAfterRejection}
              onChange={(e) => setAutoDisableAfterRejection(e.target.checked)}
            />
            <span className="text-sm font-semibold">
              {autoDisableAfterRejection ? "Oui" : "Non"}
            </span>
          </label>
        </div>

        <div className="flex justify-end">
          <button
            type="button"
            className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:opacity-90 transition"
          >
            Enregistrer (mock)
          </button>
        </div>
      </div>
    </div>
  );
}
