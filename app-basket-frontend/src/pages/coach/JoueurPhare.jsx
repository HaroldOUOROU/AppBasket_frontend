import { useState } from "react";

export default function JoueurPhare() {
  const [formData, setFormData] = useState({
    nom: "",
    age: "",
    club: "",
    biographie: "",
    taille: "",
    poids: "",
    envergure: "",
  });

  const [accomplissement, setAccomplissement] = useState("");
  const [accomplissements, setAccomplissements] = useState([
    "Finaliste Coupe du Bénin U16",
    "Meilleur marqueur Camp NBA Academy",
  ]);

  const ajouterAccomplissement = () => {
    if (accomplissement.trim()) {
      setAccomplissements([...accomplissements, accomplissement.trim()]);
      setAccomplissement("");
    }
  };

  const supprimerAccomplissement = (index) => {
    setAccomplissements(accomplissements.filter((_, i) => i !== index));
  };
  const [photo, setPhoto] = useState(null);
  const [video, setVideo] = useState(null);
  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* En tête */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border-light dark:border-border-dark bg-white dark:bg-card-dark">
        <h1 className="text-2xl font-black text-text-primary-light dark:text-text-primary-dark">
          Gestion des joueurs phares de l'équipe
        </h1>
        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
          Identifiez et enregistrez les talents prometteurs du basketball
          béninois.
        </p>
      </div>

      <main>
        <div className="grid grid-cols-3 gap-6">
          {/* colonne de gauche */}
          <div className="col-span-2 flex flex-col gap-4">
            <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5">
              <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark mb-4 flex items-center gap-2">
                👤 Identification du Joueur
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                    Nom Complet
                  </label>

                  <input
                    type="text"
                    placeholder="Ex: Jean-Baptiste Salami"
                    value={formData.nom}
                    onChange={(e) =>
                      setFormData({ ...formData, nom: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-blue-text transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                    Âge
                  </label>
                  <input
                    type="number"
                    placeholder="Ex: 18"
                    value={formData.age}
                    onChange={(e) =>
                      setFormData({ ...formData, age: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-blue-text transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                    Club actuel
                  </label>
                  <input
                    type="text"
                    value={formData.club}
                    onChange={(e) =>
                      setFormData({ ...formData, club: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-blue-text transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                    Biographie & Parcours
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Décrivez le parcours du joueur, son style de jeu et son potentiel..."
                    value={formData.biographie}
                    onChange={(e) =>
                      setFormData({ ...formData, biographie: e.target.value })
                    }
                    className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-blue-text transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Acoplissement */}
              <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5">
                <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark mb-4 flex items-center gap-2">
                  ⚡ Caractéristiques
                </h3>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                      Taille (CM)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        placeholder="198"
                        value={formData.taille}
                        onChange={(e) =>
                          setFormData({ ...formData, taille: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-blue-text transition-colors"
                      />
                      <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark shrink-0">
                        cm
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                      Poids (KG)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        placeholder="92"
                        value={formData.poids}
                        onChange={(e) =>
                          setFormData({ ...formData, poids: e.target.value })
                        }
                        className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-blue-text transition-colors"
                      />
                      <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark shrink-0">
                        kg
                      </span>
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                      Envergure(CM)
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="number"
                        placeholder="205"
                        value={formData.envergure}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            envergure: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-blue-text transition-colors"
                      />
                      <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark shrink-0">
                        cm
                      </span>
                    </div>
                  </div>
                </div>
                {/* Accomplissment */}
                <div>
                  <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-2 block uppercase tracking-widest">
                    Liste des acommplissements
                  </label>
                  <div className="flex items-center gap-2 mb-3">
                    <input
                      type="text"
                      placeholder="Ex: MVP National U18 2023"
                      value={accomplissement}
                      onChange={(e) => setAccomplissement(e.target.value)}
                      onKeyDown={(e) =>
                        e.key === "Enter" && ajouterAccomplissement()
                      }
                      className="flex-1 px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-blue-text transition-colors"
                    />
                    <button
                      onClick={ajouterAccomplissement}
                      className="w-8 h-8 rounded-lg bg-blue-text text-white font-bold hover:opacity-90 transition-opacity flex items-center justify-center shrink-0"
                    >
                      +
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {accomplissements.map((acc, index) => (
                      <span
                        key={index}
                        className="flex items-center gap-1 px-3 py-1 rounded-full bg-blue-text/10 text-blue-text text-xs font-medium"
                      >
                        {acc}
                        <button
                          onClick={() => supprimerAccomplissement(index)}
                          className="ml-1 hover:text-red-400 transition-colors"
                        >
                          ×
                        </button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Bouton enrégister */}
            <div className="gap-2 mt-4 flex justify-end">
              <button className=" flex items-center gap-2 px-4 py-2 rounded-lg bg-green-700 text-white text-s font-semibold hover:opacity-90 transition-opacity">
                Enregistrer 🖨
              </button>
            </div>
          </div>
          {/* Colonne de droite */}
          <div className="col-span-1 flex flex-col gap-4">
            <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5">
              <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark mb-4 flex items-center gap-2">
                🎥 Vidéos Highlights
              </h3>

              {/* Zone de téléchargement  vidéo */}
              <label className="block rounded-xl border-2 border-dashed border-border-light dark:border-border-dark p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-blue-text transition-colors mb-3">
                <span className="text-2xl">📁</span>
                <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                  Téléverser une vidéo
                </p>
                <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark text-center">
                  Format MP4, MOV. Max 200MB. Ou glissez-déposez le fichier ici.
                </p>
                <input
                  type="file"
                  accept="video/*"
                  className="hidden"
                  onChange={(e) => setVideo(e.target.files[0])}
                />
              </label>

              <div>
                <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-2 uppercase tracking-widest">
                  Vidéos Importées
                </p>
                <div className="flex items-center gap-3 p-2 rounded-lg border border-border-light dark:border-border-dark">
                  <div className="w-8 h-8 rounded-lg bg-green-500/20 flex items-center justify-center shrink-0">
                    🎬
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium text-text-primary-light dark:text-text-primary-dark truncate">
                      {video ? video.name : "Best_Dunks_202..."}
                    </p>
                    <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark">
                      {video ? "En cours..." : "60.2MB · Terminé"}
                    </p>
                  </div>
                  <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-red-400 transition-colors shrink-0">
                    🗑️
                  </button>
                </div>
              </div>
            </div>

            {/* Photo de profil */}
            <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5">
              <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark mb-4 flex items-center gap-2">
                🖼️ Photo de Profil
              </h3>

              <label className="block rounded-xl border-2 border-dashed border-border-light dark:border-border-dark p-6 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-blue-text transition-colors mb-3">
                {photo ? (
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="profil"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                ) : (
                  <span className="text-2xl">📷</span>
                )}
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </label>

              <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark text-center mb-3">
                Format JPG ou PNG recommandé. Max 5MB.
              </p>
              <button className="w-full text-xs text-blue-text hover:underline">
                Choisir une image
              </button>
            </div>

            {/* Conseil Coach */}
            <div className="bg-blue-text/10 rounded-xl border border-blue-text/20 p-4 flex items-start gap-3">
              <span className="text-blue-text shrink-0">ℹ️</span>
              <div>
                <p className="text-xs font-bold text-blue-text mb-1">
                  Conseil Coach
                </p>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                  Plus les données physiques sont précises, plus le joueur sera
                  visible par les recruteurs internationaux.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
