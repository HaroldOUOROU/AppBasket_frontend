import { useState } from "react";

const statutOptions = ["Compétitif", "Académie"];

export default function ProfilClubDashboard() {
  const [formInfos, setFormInfo] = useState({
    nom: "Héritier 2A2B",
    annee: "1992",
    ville: "Cotonou",
    statut: "Compétitif",
    mission:
      "Développer l'excellence sportive et promouvoir les valeurs du basketball.",
    vision:
      "Devenir le club de référence du basketball béninois à l'horizon 2030.",
    areneNom: "Hall des Arts",
    areneLocalisation: "Cotonou, Bénin",
  });

  const [couleurPrimaire, setCouleurPrimaire] = useState("#22C55E"); 
  const [couleurSecondaire, setCouleurSecondaire] = useState("#ff0000"); 

  return (
    <div className="flex min-h-screen bg-bg-light dark:bg-bg-dark">
      <div className="flex-1 flex flex-col min-w-0">
        <header className="flex items-center justify-between px-6 py-4 border-b border-border-light dark:border-border-dark bg-white dark:bg-card-dark">
          <div>
            <h1 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
              {formInfos.nom}
            </h1>
            <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
              Gérez les informations officielles et l'image de votre club.
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border-light dark:border-border-dark text-sm font-medium text-text-primary-light dark:text-text-primary-dark hover:border-orange-basket hover:text-white transition-all bg-gradient-to-r from-blue-text to-orange-basket">
            👁️ Aperçu du profil
          </button>
        </header>

        <div className="flex items-center gap-1 px-6 border-b border-border-light dark:border-border-dark bg-white dark:bg-card-dark">
          <h3
            className="relative px-4 py-3 text-sm font-medium transition-colors duration-200
      text-orange-basket
      after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:rounded-full after:bg-orange-basket after:transition-all after:duration-300"
          >
            Infos Générales
          </h3>
        </div>
        
        <main className="flex-1 p-6 overflow-auto pb-24">
          <div className="grid grid-cols-3 gap-6">
            <div className="col-span-1 flex flex-col gap-4">
              <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5">
                <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                  Identité visuelle
                </h3>

                <div className="flex flex-col items-center gap-3 mb-5">
                  <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-bg-dark border-2 border-border-light dark:border-border-dark flex items-center justify-center text-text-secondary-light dark:text-text-secondary-dark text-xs">
                    CLUB
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                      Logo du Club
                    </p>
                    <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark">
                      PNG ou JPG. Min 400×400px
                    </p>
                    <button className="text-xs text-orange-basket hover:underline mt-1">
                      Remplacer le logo
                    </button>
                  </div>
                </div>

                <div className="mb-4">
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-2">
                    Bannière de couverture
                  </p>
                  <div className="h-24 rounded-lg bg-gray-900 flex items-center justify-center cursor-pointer border border-border-light dark:border-border-dark relative overflow-hidden">
                    <button className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-black/50 text-white text-xs">
                      📷 Modifier la bannière
                    </button>
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                      Couleurs de l'Équipe
                    </p>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-basket/20 text-orange-basket font-bold">
                      VISUAL EDITION
                    </span>
                  </div>

                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-3 p-2 rounded-lg border border-border-light dark:border-border-dark cursor-pointer hover:border-orange-basket transition-all">
                      <div
                        className="w-6 h-6 rounded-full shrink-0 border border-border-light dark:border-border-dark"
                        style={{ backgroundColor: couleurPrimaire }}
                      />
                      <div className="flex-1">
                        <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark uppercase font-bold">
                          Couleur Primaire
                        </p>
                        <p className="text-xs text-text-primary-light dark:text-text-primary-dark">
                          {couleurPrimaire.toUpperCase()}
                        </p>
                      </div>
                      <input
                        type="color"
                        value={couleurPrimaire}
                        onChange={(e) => setCouleurPrimaire(e.target.value)}
                        className="w-0 h-0 opacity-0 absolute"
                      />
                    </label>

                    <label className="flex items-center gap-3 p-2 rounded-lg border border-border-light dark:border-border-dark cursor-pointer hover:border-orange-basket transition-all">
                      <div
                        className="w-6 h-6 rounded-full shrink-0 border border-border-light dark:border-border-dark"
                        style={{ backgroundColor: couleurSecondaire }}
                      />
                      <div className="flex-1">
                        <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark uppercase font-bold">
                          Couleur Secondaire
                        </p>
                        <p className="text-xs text-text-primary-light dark:text-text-primary-dark">
                          {couleurSecondaire.toUpperCase()}
                        </p>
                      </div>
                      <input
                        type="color"
                        value={couleurSecondaire}
                        onChange={(e) => setCouleurSecondaire(e.target.value)}
                        className="w-0 h-0 opacity-0 absolute"
                      />
                    </label>
                  </div>

                  <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mt-2 text-center">
                    Cliquez sur les cercles pour ouvrir le sélecteur de couleur.
                  </p>
                </div>

                <div className="mt-4 rounded-lg overflow-hidden border border-border-light dark:border-border-dark">
                  <div
                    className="h-8"
                    style={{ backgroundColor: couleurPrimaire }}
                  />
                  <div
                    className="h-8"
                    style={{ backgroundColor: couleurSecondaire }}
                  />
                </div>
              </div>
            </div>

            <div className="col-span-2 flex flex-col gap-4">
              <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5">
                <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
                  Informations de Base
                </h3>

                <div className="flex flex-col gap-4">
                  <div>
                    <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                      Nom officiel du club
                    </label>
                    <input
                      type="text"
                      value={formInfos.nom}
                      onChange={(e) =>
                        setFormInfos({ ...formInfos, nom: e.target.value })
                      }
                      className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent transition-all resize-none bg-white dark:bg-card-dark text-sm text-text-primary-light dark:text-text-primary-dark border-border-light dark:border-border-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:border-orange-basket focus:ring-orange-basket/50 dark:focus:ring-offset-card-dark selection:bg-orange-basket/20 dark:selection:bg-orange-basket/20"
                      placeholder="Nom du club"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                        Année de fondation
                      </label>
                      <input
                        type="text"
                        value={formInfos.annee}
                        onChange={(e) =>
                          setFormInfos({
                            ...formInfos,
                            annee: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent transition-all resize-none bg-white dark:bg-card-dark text-sm text-text-primary-light dark:text-text-primary-dark border-border-light dark:border-border-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:border-orange-basket focus:ring-orange-basket/50 dark:focus:ring-offset-card-dark selection:bg-orange-basket/20 dark:selection:bg-orange-basket/20"
                        placeholder="Ex: 1992"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                        Ville de résidence
                      </label>
                      <select
                        value={formInfos.ville}
                        onChange={(e) =>
                          setFormInfos({
                            ...formInfos,
                            ville: e.target.value,
                          })
                        }
                        className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent transition-all resize-none bg-white dark:bg-card-dark text-sm text-text-primary-light dark:text-text-primary-dark border-border-light dark:border-border-dark focus:border-orange-basket focus:ring-orange-basket/50 dark:focus:ring-offset-card-dark selection:bg-orange-basket/20 dark:selection:bg-orange-basket/20"
                      >
                        {[
                          "Cotonou",
                          "Parakou",
                          "Porto-Novo",
                          "Abomey-Calavi",
                        ].map((v) => (
                          <option key={v}>{v}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                      Mission
                    </label>
                    <textarea
                      value={formInfos.mission}
                      onChange={(e) =>
                        setFormInfos({
                          ...formInfos,
                          mission: e.target.value,
                        })
                      }
                      rows={3}
                      placeholder="Quelle est la mission de votre club ?"
                      className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent transition-all resize-none bg-white dark:bg-card-dark text-sm text-text-primary-light dark:text-text-primary-dark border-border-light dark:border-border-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:border-orange-basket focus:ring-orange-basket/50 dark:focus:ring-offset-card-dark selection:bg-orange-basket/20 dark:selection:bg-orange-basket/20"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                      Vision
                    </label>
                    <textarea
                      value={formInfos.vision}
                      onChange={(e) =>
                        setFormInfos({ ...formInfos, vision: e.target.value })
                      }
                      rows={3}
                      placeholder="Quelle est la vision de votre club ?"
                      className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent transition-all resize-none bg-white dark:bg-card-dark text-sm text-text-primary-light dark:text-text-primary-dark border-border-light dark:border-border-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:border-orange-basket focus:ring-orange-basket/50 dark:focus:ring-offset-card-dark selection:bg-orange-basket/20 dark:selection:bg-orange-basket/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                        Nom de l'arène
                      </label>
                      <input
                        type="text"
                        value={formInfos.areneNom}
                        onChange={(e) =>
                          setFormInfos({
                            ...formInfos,
                            areneNom: e.target.value,
                          })
                        }
                        placeholder="Ex: Hall des Arts"
                        className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent transition-all resize-none bg-white dark:bg-card-dark text-sm text-text-primary-light dark:text-text-primary-dark border-border-light dark:border-border-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:border-orange-basket focus:ring-orange-basket/50 dark:focus:ring-offset-card-dark selection:bg-orange-basket/20 dark:selection:bg-orange-basket/20"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                        Localisation de l'arène
                      </label>
                      <input
                        type="text"
                        value={formInfos.areneLocalisation}
                        onChange={(e) =>
                          setFormInfos({
                            ...formInfos,
                            areneLocalisation: e.target.value,
                          })
                        }
                        placeholder="Ex: Cotonou, Bénin"
                        className="w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent transition-all resize-none bg-white dark:bg-card-dark text-sm text-text-primary-light dark:text-text-primary-dark border-border-light dark:border-border-dark placeholder:text-text-secondary-light dark:placeholder:text-text-secondary-dark focus:border-orange-basket focus:ring-orange-basket/50 dark:focus:ring-offset-card-dark selection:bg-orange-basket/20 dark:selection:bg-orange-basket/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                      Statut du Club
                    </label>
                    <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-2">
                      Le statut détermine les compétitions auxquelles le club
                      peut participer.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {statutOptions.map((option) => (
                        <button
                          key={option}
                          onClick={() =>
                            setFormInfos({ ...formInfos, statut: option })
                          }
                          className={`px-3 py-2 rounded-lg text-sm font-medium border transition-all
                              ${
                                formInfos.statut === option
                                  ? "bg-orange-basket text-white border-orange-basket shadow-md shadow-orange-basket/25"
                                  : "border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:border-orange-basket hover:text-orange-basket hover:shadow-sm"
                              }`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>

        <div className="fixed bottom-0 left-56 right-0 flex items-center justify-between px-6 py-3 bg-white dark:bg-card-dark border-t border-border-light dark:border-border-dark">
          <p className="text-xs text-orange-basket flex items-center gap-2 font-medium">
            ⚡ Toutes les modifications sont prêtes à être enregistrées.{" "}
            <span className="ml-2 px-2 py-0.5 bg-orange-basket/10 rounded-full text-[10px]">
              Mode Compétitif
            </span>
          </p>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg border border-border-light dark:border-border-dark text-sm font-medium text-text-primary-light dark:text-text-primary-dark hover:border-red-400 hover:text-red-400 transition-all">
              Abandonner
            </button>
            <button className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold shadow-md shadow-emerald-500/25 hover:shadow-lg transition-all duration-200">
              Enregistrer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
