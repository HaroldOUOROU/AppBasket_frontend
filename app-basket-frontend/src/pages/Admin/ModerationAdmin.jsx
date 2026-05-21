import { useMemo, useState } from "react";

const mockContents = [
  {
    id: 1,
    type: "Publication",
    auteur: "Coach Amina",
    titre: "Victoire contre équipe locale !",
    statut: "En attente",
    date: "2026-05-04",
  },
  {
    id: 2,
    type: "Médias",
    auteur: "Coach Karim",
    titre: "Photo entrainement",
    statut: "En attente",
    date: "2026-05-05",
  },
  {
    id: 3,
    type: "Publication",
    auteur: "Coach Selma",
    titre: "Annonce match U16",
    statut: "Approuvé",
    date: "2026-05-02",
  },
];

function ContentRow({ item, onApprove, onReject }) {
  return (
    <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-5">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 flex-wrap">
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-blue-text/10 text-blue-text">
              {item.type}
            </span>
            <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
              {item.date}
            </span>
          </div>
          <h3 className="mt-2 text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
            {item.titre}
          </h3>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Auteur : <span className="font-semibold">{item.auteur}</span>
          </p>
        </div>

        <div className="flex flex-col gap-2 items-end">
          {item.statut !== "En attente" ? (
            <span className="text-xs font-semibold text-green-600">
              {item.statut}
            </span>
          ) : (
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => onApprove(item.id)}
                className="px-4 py-2 rounded-lg bg-green-600 text-white hover:opacity-90 transition"
              >
                Approuver
              </button>
              <button
                type="button"
                onClick={() => onReject(item.id)}
                className="px-4 py-2 rounded-lg bg-red-600 text-white hover:opacity-90 transition"
              >
                Rejeter
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function ModerationAdmin() {
  const [items, setItems] = useState(mockContents);
  const [motif, setMotif] = useState("");
  const [selected, setSelected] = useState(null);

  const pending = useMemo(
    () => items.filter((i) => i.statut === "En attente"),
    [items],
  );

  function approve(id) {
    setItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, statut: "Approuvé" } : i)),
    );
    setMotif("");
    setSelected(null);
  }

  function reject(id) {
    setSelected(id);
    if (!motif || motif.trim().length < 3) {
      alert("Ajoute un motif de rejet (min 3 caractères).");
      return;
    }

    setItems((prev) =>
      prev.map((i) =>
        i.id === id
          ? {
              ...i,
              statut: "Rejeté",
              motif: motif.trim(),
              decisionAt: new Date().toISOString(),
            }
          : i,
      ),
    );

    setMotif("");
    setSelected(null);
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">
          Modération des contenus
        </h1>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">
          Approbation/rejet d’éléments en attente (mock).
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {pending.length === 0 ? (
            <div className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Rien à modérer.
            </div>
          ) : (
            pending.map((item) => (
              <ContentRow
                key={item.id}
                item={item}
                onApprove={approve}
                onReject={reject}
              />
            ))
          )}
        </div>

        <div className="bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl p-5 h-fit">
          <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
            Motif de rejet
          </h2>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">
            Requis uniquement si tu choisis « Rejeter ».
          </p>

          <textarea
            value={motif}
            onChange={(e) => setMotif(e.target.value)}
            placeholder="Ex: contenu non conforme, hors sujet..."
            className="mt-4 w-full min-h-28 p-3 rounded-lg border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark text-text-primary-light dark:text-text-primary-dark"
          />

          {selected ? (
            <p className="text-xs text-orange-basket mt-3">
              Motif appliqué à l’élément #{selected}.
            </p>
          ) : (
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-3">
              Astuce : écris un motif clair.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
