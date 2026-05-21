import { useState } from "react";

const roles = [
  "Entraîneur Principal",
  "Entraîneur Adjoint",
  "Kinésithérapeute",
  "Préparateur Physique",
  "Secrétaire Général",
];

export default function Staff() {
  const [formData, setFormData] = useState({
    nom: "",
    role: "",
    experience: 0,
    licence: "",
    biographie: "",
  });
  const [photo, setPhoto] = useState(null);

  return (
    <div className="flex-1 flex flex-col min-w-0">

      {/* HEADER */}
      <div className="px-6 py-4 border-b border-border-light dark:border-border-dark bg-white dark:bg-card-dark">
        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1">
          Gestion du Club / Staff / Modifier le Profil
        </p>
        <h1 className="text-2xl font-black text-text-primary-light dark:text-text-primary-dark">
          Gestion du Personnel
        </h1>
        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
          Ajouter ou modifier un membre du staff ou un dirigeant du club.
        </p>
      </div>

      <main className="flex-1 p-6 overflow-auto pb-24 flex flex-col gap-4">

        {/* Portrait Professionnel */}
        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5">
          <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark mb-4 flex items-center gap-2">
            🧑 Portrait Professionnel
          </h3>
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-lg bg-gray-100 dark:bg-bg-dark border border-border-light dark:border-border-dark flex items-center justify-center overflow-hidden shrink-0">
              {photo
                ? <img src={URL.createObjectURL(photo)} alt="photo" className="w-full h-full object-cover" />
                : <span className="text-text-secondary-light dark:text-text-secondary-dark text-xs">Photo</span>
              }
            </div>
            <div>
              <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-1">
                Photo du membre
              </p>
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-3">
                Format JPG, PNG. Max 2MB. Une photo de face sur fond neutre est recommandée.
              </p>
              <div className="flex items-center gap-2">
                <label className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-gradient-to-r from-blue-text to-orange-basket text-white text-xs font-semibold cursor-pointer hover:opacity-90 transition-opacity">
                  📤 Télécharger
                  
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => setPhoto(e.target.files[0])}
                  />
                </label>
                {photo && (
                  <button
                    onClick={() => setPhoto(null)}
                    className="text-xs text-red-400 hover:underline"
                  >
                    Supprimer
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Informations Générales */}
        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5">
          <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark mb-4 flex items-center gap-2">
            💼 Informations Générales
          </h3>
          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                Nom Complet
              </label>
              <input
                type="text"
                placeholder="Ex: Jean Koffi"
                value={formData.nom}
                onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-orange-basket transition-colors"
              />
            </div>

            <div>
              <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                Rôle / Fonction
              </label>
              <select
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-white dark:bg-card-dark text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-orange-basket transition-colors"
              >
                <option value="">Sélectionner un rôle</option>
                {roles.map((r) => <option key={r}>{r}</option>)}
              </select>
            </div>

            <div>
              <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                Années d'Expérience
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="number"
                  min={0}
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-orange-basket transition-colors"
                />
                <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark shrink-0">ans</span>
              </div>
            </div>

            <div>
              <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block uppercase tracking-widest">
                Numéro de Licence (Optionnel)
              </label>
              <input
                type="text"
                placeholder="BB-2024-XXXX"
                value={formData.licence}
                onChange={(e) => setFormData({ ...formData, licence: e.target.value })}
                className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-orange-basket transition-colors"
              />
            </div>

          </div>
        </div>

        {/* Parcours & Palmarès */}
        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5">
          <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark mb-4 flex items-center gap-2">
            🏆 Parcours & Palmarès
          </h3>

          <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-2 block uppercase tracking-widest">
            Biographie & Expériences Précédentes
          </label>

          {/* Barre de formatage simple */}
          <div className="flex items-center gap-2 mb-2 p-2 rounded-t-lg border border-border-light dark:border-border-dark border-b-0 bg-bg-light dark:bg-bg-dark">
            {["B", "I", "S", "—", "🔗"].map((btn) => (
              <button
                key={btn}
                className="w-6 h-6 rounded text-xs font-bold text-text-secondary-light dark:text-text-secondary-dark hover:bg-white dark:hover:bg-card-dark transition-all"
              >
                {btn}
              </button>
            ))}
          </div>

          <textarea
            rows={6}
            placeholder="Détaillez ici les clubs précédents, les certifications obtenues, les titres remportés..."
            value={formData.biographie}
            onChange={(e) => setFormData({ ...formData, biographie: e.target.value })}
            className="w-full px-3 py-2 rounded-b-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-orange-basket transition-colors resize-none"
          />

          <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark mt-2">
            Mentionnez les dates clés et les accomplissements majeurs pour enrichir le profil public du club.
          </p>
        </div>

      </main>

      {/* FOOTER FIXE */}
      <div className="fixed bottom-0 left-56 right-0 flex items-center justify-end gap-3 px-6 py-3 bg-white dark:bg-card-dark border-t border-border-light dark:border-border-dark">
        <button className="px-4 py-2 rounded-lg border border-border-light dark:border-border-dark text-sm font-medium text-text-primary-light dark:text-text-primary-dark hover:border-red-400 hover:text-red-400 transition-all">
          Annuler
        </button>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity">
          💾 Enregistrer les modifications
        </button>
      </div>

    </div>
  );
}