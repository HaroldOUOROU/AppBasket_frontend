import { useState } from "react";

// const typesPost = ["Actualités", "Résultat", "Planning", "Événement"];

const publicationsRecentes = [
  {
    id: 1,

    titre: "Victoire écrasante contre les Aigles de Cotonou ! (82-64)",
    description: "Quelle performance de l'équipe ce soir. Merci à tous...",
    // vues: "1.2k",
    // likes: 245,
    // commentaires: 42,
    temps: "Posté il y a 2 heures",
    couleur: "bg-blue-500",
  },
  {
    id: 2,

    titre: "Planning Entraînement - Semaine du 24 Juin",
    description: "Le programme intensif pour la préparation des...",
    // vues: "850",
    // likes: 112,
    // commentaires: 0,
    temps: "Posté hier à 14:20",
    couleur: "bg-green-500",
  },
];
export default function Publication() {
  const [typeActif, setTypeActif] = useState("Actualités");
  const [titre, setTitre] = useState("");
  const [photo, setPhoto] = useState(null);
  const [video, setVideo] = useState(null);
  const [contenu, setContenu] = useState("");
  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Haut de page */}
      <div className="px-6 py-4 border-b border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
        <h1 className="text-2xl font-black text-text-primary-light dark:text-text-primary-dark">
          {" "}
          Gestion des publications
        </h1>
        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
          Créez et gérez les actualités, scores et plannings pour vos joueurs.
        </p>
      </div>

      {/* Interface post  */}
      <main className="flex flex-col">
        <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-blue-text flex items-center justify-center text-white text-xs font-bold ">
                +
              </div>
              <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark">
                Nouveau Post
              </h3>
            </div>
            {/* <div className="w-9 h-9 rounded-full bg-orange-basket flex items-center justify-center text-white text-xs font-bold shrink-0">
              Pp coach
            </div> */}
            <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
              Coach: Mamadou Farid
            </p>
          </div>
          <div className="border-b border-border-light dark:border-border-dark "></div>
          {/* Types de Post */}
          {/* <div className="flex gap-2 mb-4 py-2">
            {typesPost.map((type) => (
              <button
                key={type}
                onClick={() => setTypeActif(type)}
                className={`flex items-center gap-1 px-4 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  typeActif === type
                    ? "bg-blue-text text-white"
                    : "border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:border-blue-text hover:text-blue-text"
                }`}
              >
                {type === "Actualités" && "📰"}
                {type === "Résultat" && "🏆"}
                {type === "Planning" && "📅"}
                {type === "Événement" && "⭐"}
                {type}
              </button>
            ))}
          </div> */}

          {/* Zone de saisie */}
          <div className="mb-4">
            <label className="block text-xs font-semibold text-text-secondary-light dark:text-text-secondary-dark mb-2">
              Titre
            </label>
            <input
              value={titre}
              onChange={(e) => setTitre(e.target.value)}
              type="text"
              placeholder="Entrez le titre de votre post"
              className="w-full px-3 py-3 rounded-lg border border-border-light dark:border-gray-600 bg-transparent dark:bg-gray-900/30 text-sm text-gray-700 dark:text-text-primary-dark placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-blue-text transition-colors"
            />
          </div>

          <div className="flex items-start gap-3 mb-4">
            {/* Profil du coach */}

            

            <textarea
              rows={3}
              placeholder="Quoi de neuf pour l'équipe aujourd'hui ?"
              onChange={(e) => setContenu(e.target.value)}
              className="flex-1 px-3 py-3 rounded-lg border border-border-light dark:border-gray-600 bg-transparent dark:bg-gray-900/30 text-sm text-gray-700 dark:text-text-primary-dark placeholder-gray-400 dark:placeholder-gray-500 outline-none focus:border-blue-text transition-colors resize-none"
            />
          </div>

          {/* Zone d'ajout des médias */}
          <div className="rounded-xl border-3 border-dashed border-border-light dark:border-border-dark p-6 flex flex-col items-center justify-center gap-2 mb-4 cursor-pointer hover:border-blue-text transition-colors">
            {/* async (params) => {
                array
            }.forEach(element => {
                A revoir
            }); */}
            <label className="flex flex-col items-center justify-center gap-2 cursor-pointer">
              <span className="text-2xl">🏞</span>
              <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                Cliquez pour sélectionner un média
              </p>
              <input
                type="file"
                accept="image/*,video/*"
                className="hidden "
                onChange={(e) => {
                  const file = e.target.files[0];
                  if (!file) return;
                  if (file.type.startsWith("image")) {
                    setPhoto(file);
                    setVideo(null);
                  } else if (file.type.startsWith("video")) {
                    setVideo(file);
                    setPhoto(null);
                  }
                }}
              />
            </label>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              {["🖼️", "🎥", "📍", "🕐"].map((icone) => (
                <button
                  key={icone}
                  className="w-8 h-8 rounded-lg border border-border-light dark:border-border-dark text-text-secondary-light dark:text-text-secondary-dark hover:border-blue-text hover:text-blue-text transition-all flex items-center justify-center"
                >
                  {icone}
                </button>
              ))}
            </div>
            <button className="px-6 py-2 rounded-lg bg-green-700 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
              Publier le post 🚀
            </button>
          </div>
        </div>

        {/* Publication récente */}

        <div className=" flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
            Publications Récentes
          </h2>
          <button className="text-xs text-blue-text hover:underline">
            Voir tout →
          </button>
        </div>
        <div className="flex flex-col gap-3">
          {publicationsRecentes.map((pub) => (
            <div
              key={pub.id}
              className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4 flex items-start gap-4"
            >
              {/* Thumbnail */}
              <div
                className={`w-16 h-16 rounded-lg ${pub.couleur}/20 flex items-center justify-center shrink-0`}
              >
                <span className="text-2xl">
                  {pub.type === "RÉSULTAT" ? "🏆" : "📅"}
                </span>
              </div>

              {/* Contenu */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-[10px] px-2 py-0.5 rounded-full text-white font-bold ${pub.couleur}`}
                  >
                    {pub.type}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark mb-1 truncate">
                  {pub.titre}
                </h3>
                <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-2 truncate">
                  {pub.description}
                </p>
                <div className="flex items-center gap-4 text-xs text-text-secondary-light dark:text-text-secondary-dark">
                  <span>👁 {pub.vues} vues</span>
                  <span>❤️ {pub.likes} likes</span>
                  {pub.commentaires > 0 && (
                    <span>💬 {pub.commentaires} commentaires</span>
                  )}
                  <span className="ml-auto">{pub.temps}</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center gap-2 shrink-0">
                <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-blue-text transition-colors">
                  ✏️
                </button>
                <button className="text-text-secondary-light dark:text-text-secondary-dark hover:text-red-400 transition-colors">
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
