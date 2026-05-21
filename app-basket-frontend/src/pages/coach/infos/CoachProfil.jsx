import { useState } from "react";

export default function CoachProfil() {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    telephone: "",
    club: "",
    licence: "",
    adresse: "",
    biographie: "",
  });

  const [passwords, setPasswords] = useState({
    motDePasseActuel: "",
    nouveauMotDePasse: "",
    confirmationMotDePasse: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswords((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enregistre :", form, passwords);
  };

  const handleCancel = () => {
    setForm({
      nom: "",
      email: "",
      telephone: "",
      club: "",
      licence: "",
      adresse: "",
      biographie: "",
    });
    setPasswords({
      motDePasseActuel: "",
      nouveauMotDePasse: "",
      confirmationMotDePasse: "",
    });
  };

  return (
    <div className="space-y-6 pb-16">
      {/* En-tete de page */}
      <div>
        <h1 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
          Profil du Coach
        </h1>
        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">
          Consultez et mettez a jour vos informations personnelles.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Carte photo de profil */}
        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-6 h-fit">
          <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
            Identite visuelle
          </h3>
          <div className="flex flex-col items-center gap-3">
            <div className="w-24 h-24 rounded-full bg-gray-200 dark:bg-[#2A2A2A] border-2 border-border-light dark:border-border-dark flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-500 text-xs">
                PHOTO
              </span>
            </div>
            <button
              type="button"
              className="flex items-center gap-2 text-xs font-medium text-green-500 hover:underline transition-all"
            >
              Modifier la photo
            </button>
          </div>
        </div>

        {/* Formulaire principal */}
        <form onSubmit={handleSubmit} className="lg:col-span-2 space-y-6">
          {/* Informations personnelles */}
          <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-6">
            <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
              Informations personnelles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                  Nom complet
                </label>
                <input
                  type="text"
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  placeholder="Votre nom complet"
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="coach@exemple.com"
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                  Numero de telephone
                </label>
                <input
                  type="tel"
                  name="telephone"
                  value={form.telephone}
                  onChange={handleChange}
                  placeholder="+229 01 23 45 67 89"
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                  Club associe
                </label>
                <input
                  type="text"
                  name="club"
                  value={form.club}
                  onChange={handleChange}
                  placeholder="Nom de votre club"
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                  Licence / N d'identification
                </label>
                <input
                  type="text"
                  name="licence"
                  value={form.licence}
                  onChange={handleChange}
                  placeholder="Ex: LIC-2024-001"
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                  Adresse
                </label>
                <input
                  type="text"
                  name="adresse"
                  value={form.adresse}
                  onChange={handleChange}
                  placeholder="Votre adresse"
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                  Biographie courte
                </label>
                <textarea
                  name="biographie"
                  value={form.biographie}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Parlez-nous de vous, de votre experience et de votre parcours..."
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-green-500 transition-colors resize-none"
                />
              </div>
            </div>
          </div>

          {/* Section securite */}
          <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark shadow-sm p-6">
            <h3 className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
              Securite du compte
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                  Mot de passe actuel
                </label>
                <input
                  type="password"
                  name="motDePasseActuel"
                  value={passwords.motDePasseActuel}
                  onChange={handlePasswordChange}
                  placeholder="• • • • • • • •"
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div className="hidden sm:block"></div>
              <div>
                <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                  Nouveau mot de passe
                </label>
                <input
                  type="password"
                  name="nouveauMotDePasse"
                  value={passwords.nouveauMotDePasse}
                  onChange={handlePasswordChange}
                  placeholder="• • • • • • • •"
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-green-500 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-1 block">
                  Confirmer le mot de passe
                </label>
                <input
                  type="password"
                  name="confirmationMotDePasse"
                  value={passwords.confirmationMotDePasse}
                  onChange={handlePasswordChange}
                  placeholder="• • • • • • • •"
                  className="w-full px-3 py-2 rounded-lg border border-border-light dark:border-border-dark bg-transparent text-sm text-text-primary-light dark:text-text-primary-dark outline-none focus:border-green-500 transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={handleCancel}
              className="px-4 py-2 rounded-lg border border-border-light dark:border-border-dark text-sm font-medium text-text-primary-light dark:text-text-primary-dark hover:border-red-400 hover:text-red-400 transition-all"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-lg bg-green-500 text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Enregistrer les modifications
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
