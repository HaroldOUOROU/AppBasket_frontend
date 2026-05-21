import { useState } from "react";

import { Link } from "react-router-dom";

export default function LoginCoach() {
  const [formData, setFormData] = useState({
    licenceNumber: "",
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
      {/* colonne de gauche */}
       <div
          className="relative hidden lg:flex flex-col justify-between p-10 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/Modern court.jpg')",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-blue-text/80" />

          {/* Contenu */}
          <div className="relative z-10 flex flex-col h-full justify-between">

            {/* Logo */}
            <Link
              to="/"
              className="text-3xl font-black text-white"
            >
              Basket<span className="text-orange-basket">Scoop</span>
            </Link>

            {/* Texte principal */}
            <div className="max-w-lg">
              <h1 className="text-5xl font-black text-white leading-tight">
                Gérez votre club de basketball en toute simplicité
              </h1>

              <p className="mt-6 text-gray-200 text-base leading-relaxed">
                Connectez-vous à votre espace coach pour publier des actualités,
                gérer vos effectifs et suivre les activités de votre club.
              </p>

              {/* Points */}
              <div className="flex flex-col gap-4 mt-8">
                {[
                  "Publier des actualités",
                  "Gérer vos joueurs",
                  "Mettre en avant votre club",
                  "Suivre votre communauté",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 text-white text-sm"
                  >
                    <div className="w-2.5 h-2.5 rounded-full bg-orange-basket" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      {/* colonne de droite  Formulaire*/}
      <div className="flex items-center justify-center p-6 bg-white dark:bg-card-dark">
        <div className="w-full max-w-md">
          {/* <div className="lg:hidden mb-8 text-center">
              <Link
                to="/"
                className="text-3xl font-black text-orange-basket"
              >
                Basket
                <span className="text-blue-text">Scoop</span>
              </Link>
            </div> */}
          {/* card formulaire */}
          <div className="bg-white dark:bg-card-dark rounded-2xl border border-border-light dark:border-border-dark shadow-xl p-8">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-text-primary-light dark:text-white">
                Connexion Coach
              </h2>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-2">
                Accédez à votre espace de gestion.
              </p>
            </div>
            <form className="flex flex-col gap-5">
              <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">
                Numéro de licence
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl border border-border-light dark:border-border-dark focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                placeholder="XXXX/AA/FBBB"
                value={formData.licenceNumber}
                onChange={(e) =>
                  setFormData({ ...formData, licenceNumber: e.target.value })
                }
              />
              {/* Email */}
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl border border-border-light dark:border-border-dark bg-bg-light dark:bg-bg-dark outline-none focus:border-orange-basket"
                  placeholder=""
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>
              {/* password */}
              <div>
                <label className="text-xs uppercase tracking-widest text-gray-500 mb-2 block">
                  Mot de passe
                </label>
                <div className="flex items-center border border-border-light dark:border-border-dark rounded-xl px-4 bg-bg-light dark:bg-bg-dark">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="flex-1 py-3 bg-transparent outline-none"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400"
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <label className="flex items-center gap-2 text-sm text-gray-500">
                    <input
                      type="checkbox"
                      checked={formData.rememberMe}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          rememberMe: e.target.checked,
                        })
                      }
                    />
                    Se souvenir de moi
                  </label>

                  <Link
                    to="/forgot-password"
                    className="text-sm text-orange-basket hover:underline"
                  >
                    Mot de passe oublié ?
                  </Link>
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-orange-basket text-white font-bold hover:opacity-90 transition-all"
              >
                Se connecter →
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
