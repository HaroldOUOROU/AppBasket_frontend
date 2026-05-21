import { useState } from "react";

const categories = ["U14", "U16", "U18", "U20", "Sénior"];
const sexes = ["Tous", "Garçons", "Filles", "Mixte"];
const typesMedias = ["Match", "Entraînement", "Événement", "Portrait", "Presse"];

const ordreTypes = ["Match", "Entraînement", "Événement", "Portrait", "Presse"];

const iconeParType = {
  Match: "🏀",
  Entraînement: "🏃",
  Événement: "🎉",
  Portrait: "📸",
  Presse: "📰",
};

const mediasInitiaux = [
  { id: 1, titre: "Élan vs ASPAC", description: "Finale du championnat U18", categorie: "U18", sexe: "Garçons", typeMedia: "Match", format: "photo", date: "12 Mai 2024", taille: "2.4MB" },
  { id: 2, titre: "Séance physique", description: "Préparation d'avant saison", categorie: "U14", sexe: "Filles", typeMedia: "Entraînement", format: "video", date: "10 Mai 2024", taille: "40MB" },
  { id: 3, titre: "Séance intensive lundi", description: "", categorie: "U18", sexe: "Garçons", typeMedia: "Entraînement", format: "photo", date: "8 Mai 2024", taille: "1.8MB" },
  { id: 4, titre: "Portrait Jean Koffi", description: "Entraîneur principal", categorie: "Sénior", sexe: "Garçons", typeMedia: "Portrait", format: "photo", date: "5 Mai 2024", taille: "3.1MB" },
  { id: 5, titre: "Cérémonie des titres", description: "Remise des médailles", categorie: "U20", sexe: "Mixte", typeMedia: "Événement", format: "photo", date: "1 Mai 2024", taille: "4.2MB" },
  { id: 6, titre: "Interview Coach", description: "Interview d'après match", categorie: "Sénior", sexe: "Garçons", typeMedia: "Presse", format: "video", date: "28 Avril 2024", taille: "120MB" },
];

export default function GestionMedias() {
  const [categorieActive, setCategorieActive] = useState("U18");
  const [sexeActif, setSexeActif] = useState("Tous");
  const [typeActif, setTypeActif] = useState("Tous");
  const [medias, setMedias] = useState(mediasInitiaux);
  const [showFormulaire, setShowFormulaire] = useState(false);
  const [dragging, setDragging] = useState(false);

  const [newMedia, setNewMedia] = useState({
    titre: "",
    description: "",
    categorie: "U18",
    sexe: "Garçons",
    typeMedia: "Match",
    format: "photo",
    fichier: null,
  });

  // Filtrage
  const mediasFiltres = medias.filter((m) => {
    const matchCategorie = m.categorie === categorieActive;
    const matchSexe = sexeActif === "Tous" || m.sexe === sexeActif;
    const matchType = typeActif === "Tous" || m.typeMedia === typeActif;
    return matchCategorie && matchSexe && matchType;
  });

  // Grouper par type dans l'ordre défini
  const mediasGroupes = ordreTypes.reduce((acc, type) => {
    const items = mediasFiltres.filter((m) => m.typeMedia === type);
    if (items.length > 0) acc[type] = items;
    return acc;
  }, {});

  const supprimerMedia = (id) => setMedias(medias.filter((m) => m.id !== id));

  const ajouterMedia = () => {
    if (!newMedia.titre) return;
    setMedias([{
      ...newMedia,
      id: Date.now(),
      date: new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }),
      taille: newMedia.fichier ? `${(newMedia.fichier.size / 1024 / 1024).toFixed(1)}MB` : "—",
    }, ...medias]);
    setNewMedia({ titre: "", description: "", categorie: "U18", sexe: "Garçons", typeMedia: "Match", format: "photo", fichier: null });
    setShowFormulaire(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);
    const fichiers = Array.from(e.dataTransfer.files);
    if (fichiers[0]) {
      setNewMedia({ ...newMedia, fichier: fichiers[0], format: fichiers[0].type.startsWith("video") ? "video" : "photo" });
      setShowFormulaire(true);
    }
  };

  return (
    <div className="flex-1 flex flex-col min-w-0">

      {/* HEADER */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-border-light dark:border-border-dark bg-white dark:bg-card-dark">
        <div>
          <h1 className="text-2xl font-black text-text-primary-light dark:text-text-primary-dark">
            Médias & Galerie
          </h1>
          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
            Gérez les photos et vidéos par catégorie et par sexe.
          </p>
        </div>
      </div>

      <main className="flex-1 p-6 overflow-auto flex flex-col gap-6">

        {/* FILTRES */}
        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4 flex flex-col gap-4">

          {/* Catégorie */}
          <div>
            <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-widest mb-2">
              Catégorie
            </p>
            <div className="flex items-center gap-2 flex-wrap">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCategorieActive(cat)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all
                    ${categorieActive === cat
                      ? "bg-orange-basket text-white"
                      : "border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:border-orange-basket hover:text-orange-basket"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-start gap-8">

            {/* Sexe */}
            <div>
              <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-widest mb-2">
                Sexe
              </p>
              <div className="flex items-center gap-2">
                {sexes.map((sexe) => (
                  <button
                    key={sexe}
                    onClick={() => setSexeActif(sexe)}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all
                      ${sexeActif === sexe
                        ? "bg-blue-text text-white"
                        : "border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:border-blue-text hover:text-blue-text"
                      }`}
                  >
                    {sexe === "Garçons" ? "👦" : sexe === "Filles" ? "👧" : sexe === "Mixte" ? "👥" : "🔄"} {sexe}
                  </button>
                ))}
              </div>
            </div>

            {/* Type de média */}
            <div>
              <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-widest mb-2">
                Type de média
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <button
                  onClick={() => setTypeActif("Tous")}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all
                    ${typeActif === "Tous"
                      ? "bg-gray-700 text-white"
                      : "border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:border-gray-700 hover:text-gray-700 dark:hover:border-gray-400 dark:hover:text-gray-400"
                    }`}
                >
                  Tous
                </button>
                {typesMedias.map((type) => (
                  <button
                    key={type}
                    onClick={() => setTypeActif(type)}
                    className={`flex items-center gap-1 px-4 py-1.5 rounded-full text-sm font-medium transition-all
                      ${typeActif === type
                        ? "bg-gray-700 text-white"
                        : "border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:border-gray-700 hover:text-gray-700 dark:hover:border-gray-400 dark:hover:text-gray-400"
                      }`}
                  >
                    {iconeParType[type]} {type}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>

        {/* ZONE AJOUT MÉDIA */}
        {!showFormulaire ? (
          <div
            onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
            onDragLeave={() => setDragging(false)}
            onDrop={handleDrop}
            onClick={() => setShowFormulaire(true)}
            className={`rounded-xl border-2 border-dashed p-8 flex flex-col items-center justify-center gap-2 transition-all cursor-pointer
              ${dragging
                ? "border-orange-basket bg-orange-basket/5"
                : "border-border-light dark:border-border-dark hover:border-orange-basket hover:bg-orange-basket/5"
              }`}
          >
            <div className="w-12 h-12 rounded-full bg-orange-basket/10 flex items-center justify-center text-2xl">
              +
            </div>
            <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
              Cliquez pour ajouter un média
            </p>
            <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
              ou glissez-déposez vos fichiers ici · Photos JPG, PNG · Vidéos MP4, MOV · Max 200MB
            </p>
          </div>
        ) : (

          /* FORMULAIRE AJOUT */
          <div className="bg-white dark:bg-card-dark rounded-xl border border-orange-basket p-5 flex flex-col gap-4">
            <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark">
              ➕ Ajouter un média
            </h3>

            {/* Zone upload */}
            <label
              onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
              onDragLeave={() => setDragging(false)}
              onDrop={(e) => {
                e.preventDefault();
                setDragging(false);
                const f = e.dataTransfer.files[0];
                if (f) setNewMedia({ ...newMedia, fichier: f, format: f.type.startsWith("video") ? "video" : "photo" });
              }}
              className={`rounded-xl border-2 border-dashed p-6 flex flex-col items-center justify-center gap-2 cursor-pointer transition-all
                ${dragging ? "border-orange-basket bg-orange-basket/5" : "border-border-light dark:border-border-dark hover:border-orange-basket"}`}
            >
              {newMedia.fichier ? (
                <div className="flex items-center gap-2">
                  <span className="text-2xl">{newMedia.format === "video" ? "🎥" : "🖼️"}</span>
                  <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                    {newMedia.fichier.name}
                  </p>
                </div>
              ) : (
                <>
                  <span className="text-3xl">🖼️</span>
                  <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                    Glissez-déposez ou cliquez pour choisir
                  </p>
                </>
              )}
              <input
                type="file"
                accept="image/*,video/*"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files[0];
                  if (f) setNewMedia({ ...newMedia, fichier: f, format: f.type.startsWith("video") ? "video" : "photo" });
                }}
              />
            </label>

            {/* Titre */}
            <div>
              <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                Titre
              </label>
              <input
                type="text"
                placeholder="Ex: Finale U18 Garçons"
                value={newMedia.titre}
                onChange={(e) => setNewMedia({ ...newMedia, titre: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-orange-basket transition-colors"
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                Description (optionnel)
              </label>
              <textarea
                rows={2}
                placeholder="Ajoutez une courte description..."
                value={newMedia.description}
                onChange={(e) => setNewMedia({ ...newMedia, description: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-orange-basket transition-colors resize-none"
              />
            </div>

            {/* Catégorie + Sexe + Type */}
            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                  Catégorie
                </label>
                <select
                  value={newMedia.categorie}
                  onChange={(e) => setNewMedia({ ...newMedia, categorie: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-card-dark text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-orange-basket transition-colors"
                >
                  {categories.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                  Sexe
                </label>
                <select
                  value={newMedia.sexe}
                  onChange={(e) => setNewMedia({ ...newMedia, sexe: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-card-dark text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-orange-basket transition-colors"
                >
                  {["Garçons", "Filles", "Mixte"].map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                  Type de média
                </label>
                <select
                  value={newMedia.typeMedia}
                  onChange={(e) => setNewMedia({ ...newMedia, typeMedia: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-card-dark text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-orange-basket transition-colors"
                >
                  {typesMedias.map((t) => <option key={t}>{t}</option>)}
                </select>
              </div>
            </div>

            {/* Boutons */}
            <div className="flex items-center justify-end gap-3">
              <button
                onClick={() => setShowFormulaire(false)}
                className="px-4 py-2 rounded-lg border border-border-light dark:border-border-dark text-sm font-medium text-text-primary-light dark:text-text-primary-dark hover:border-red-400 hover:text-red-400 transition-all"
              >
                Annuler
              </button>
              <button
                onClick={ajouterMedia}
                className="px-4 py-2 rounded-lg bg-orange-basket text-white text-sm font-semibold hover:opacity-90 transition-opacity"
              >
                Enregistrer le média
              </button>
            </div>
          </div>
        )}

        {/* MÉDIAS GROUPÉS PAR TYPE */}
        {Object.keys(mediasGroupes).length > 0 ? (
          <div className="flex flex-col gap-8">
            {Object.entries(mediasGroupes).map(([type, items]) => (
              <div key={type}>

                {/* Titre du groupe */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{iconeParType[type]}</span>
                  <h2 className="text-base font-bold text-text-primary-light dark:text-text-primary-dark">
                    {type}s
                  </h2>
                  <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                    {items.length} fichier{items.length > 1 ? "s" : ""}
                  </span>
                  <div className="flex-1 h-px bg-border-light dark:bg-border-dark" />
                </div>

                {/* Grille */}
                <div className="grid grid-cols-3 gap-4">
                  {items.map((media) => (
                    <div
                      key={media.id}
                      className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden hover:-translate-y-1 transition-all group"
                    >
                      {/* Miniature */}
                      <div className="relative h-40 bg-gray-100 dark:bg-bg-dark flex items-center justify-center">
                        <span className="text-4xl">
                          {media.format === "video" ? "🎥" : "🖼️"}
                        </span>
                        {media.format === "video" && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white">
                              ▶
                            </div>
                          </div>
                        )}
                        {/* Actions hover */}
                        <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          <button className="w-7 h-7 rounded-lg bg-white/90 text-blue-text hover:bg-white transition-colors flex items-center justify-center text-xs">
                            ✏️
                          </button>
                          <button
                            onClick={() => supprimerMedia(media.id)}
                            className="w-7 h-7 rounded-lg bg-white/90 text-red-400 hover:bg-white transition-colors flex items-center justify-center text-xs"
                          >
                            🗑️
                          </button>
                        </div>
                        {/* Badge sexe */}
                        <span className="absolute top-2 left-2 text-[10px] px-2 py-0.5 rounded-full bg-black/50 text-white font-bold">
                          {media.sexe}
                        </span>
                      </div>

                      {/* Infos */}
                      <div className="p-3">
                        <p className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark truncate mb-1">
                          {media.titre}
                        </p>
                        {media.description && (
                          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-2 line-clamp-2">
                            {media.description}
                          </p>
                        )}
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-basket/10 text-orange-basket font-medium">
                            {media.categorie}
                          </span>
                          <span className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark">
                            {media.taille}
                          </span>
                        </div>
                        <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mt-1">
                          {media.date}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center h-40 bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark gap-2">
            <span className="text-3xl">📭</span>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Aucun média pour cette sélection
            </p>
          </div>
        )}

      </main>
    </div>
  );
}