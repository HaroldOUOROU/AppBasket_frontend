import { Link } from "react-router-dom";
import { useState } from "react";

export default function RegisterUser() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  return (
    <div
      className="min-h-screen relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/.jpg')" }}
    >
      {/*   Floutae */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenu */}
      <div className="relative z-10 w-full max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="flex flex-col">
          <Link to="/" className="text-2xl font-bold text-orange-basket">
            Basket<span className="text-blue-text dark:text-white">Scoop</span>
          </Link>

          <h1 className="text-5xl font-black text-white leading-tight">
            Restez informé sur l’actualité du{" "}
            <span className="text-orange-basket italic">
              Basketball Béninois
            </span>
          </h1>

          <p className="mt-6 text-base text-gray-300 leading-relaxed max-w-xl">
            Connectez-vous pour suivre vos clubs favoris, découvrez leurs
            publications, rester informé des événements et actualités
            importantes autour des clubs.
          </p>

          {/* Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
            {[
              "Suivre vos clubs favoris",
              "Recevoir les dernières publications",
              "Découvrir les événements & actualitées des clubs",
              "Rester connecté à la communauté basket",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-sm text-white"
              >
                <div className="w-2.5 h-2.5 rounded-full bg-orange-basket shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>

        {/* Formulaire de connexion */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-black text-white mb-2">
                Rejoignez BasketScoop
              </h2>

              <p className="text-sm text-gray-400 leading-relaxed">
                Créez votre compte pour suivre vos clubs favoris et recevoir
                leurs actualités.
              </p>
            </div>

            {/* Formulaire */}
            <form className="flex flex-col gap-4">
              {/* Nom complet */}
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block uppercase tracking-widest">
                  Nom complet
                </label>

                <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 border border-white/10 focus-within:border-blue-500 transition-colors">
                  <span className="text-gray-400 text-sm shrink-0">👤</span>

                  <input
                    type="text"
                    placeholder="OLADIKPIKPO Habil"
                    value={formData.fullname}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        fullname: e.target.value,
                      })
                    }
                    className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
                  />
                </div>
              </div>
              {/* Email */}
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block uppercase tracking-widest">
                  Email
                </label>

                <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 border border-white/10 focus-within:border-blue-500 transition-colors">
                  <span className="text-gray-400 text-sm shrink-0">📩</span>

                  <input
                    type="email"
                    placeholder="jean@exemple.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        email: e.target.value,
                      })
                    }
                    className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block uppercase tracking-widest">
                  Mot de passe
                </label>

                <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 border border-white/10 focus-within:border-blue-500 transition-colors">
                  <span className="text-gray-400 text-sm shrink-0">🔒</span>

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        password: e.target.value,
                      })
                    }
                    className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {showPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>

              {/* Confirm password */}
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block uppercase tracking-widest">
                  Confirmer le mot de passe
                </label>

                <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 border border-white/10 focus-within:border-blue-500 transition-colors">
                  <span className="text-gray-400 text-sm shrink-0">🔒</span>

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••"
                    value={formData.confirmPassword}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        confirmPassword: e.target.value,
                      })
                    }
                    className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {showConfirmPassword ? "🙈" : "👁"}
                  </button>
                </div>
              </div>

              {/* Bouton */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-orange-basket text-white text-sm font-bold hover:opacity-90 transition-all"
              >
                S'inscrire →
              </button>

              {/* Séparateur */}
              <div className="flex items-center gap-3 my-1">
                <div className="flex-1 h-px bg-white/10" />

                <span className="text-[10px] text-gray-500 uppercase tracking-widest">
                  Ou continuer avec
                </span>

                <div className="flex-1 h-px bg-white/10" />
              </div>

              {/* Réseaux */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-all"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                  Google Google
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-all"
                >
                  {" "}
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#1877F2">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </button>
              </div>

              {/* Inscription */}
              <p className="text-center text-xs text-gray-400 mt-2">
                Déjà inscrit ?{" "}
                <Link
                  to="/loginVisiteur"
                  className="text-orange-basket hover:underline font-semibold"
                >
                  Connectez-vous
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
