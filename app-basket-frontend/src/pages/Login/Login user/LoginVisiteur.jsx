import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginVisiteur() {
  const [showPassword, setShowPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  return (
    <div
      className="min-h-screen relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/images/')" }}
    >
      {/*   Floutae */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Contenu */}
      <div className="relative z-10 w-full max-w-md mx-4">
        
        {/* Formulaire de connexion */}
        <div className="w-full max-w-md mx-auto">
          <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-black text-white mb-2">
                Bon retour parmi nous !
              </h2>

              <p className="text-xs text-gray-400">
              Accédez à votre espace basketball personnalisé
            </p>
            </div>

            {/* Formulaire */}
            <form className="flex flex-col gap-4">
              
              <div>
                <label className="text-xs text-gray-400 mb-1.5 block uppercase tracking-widest">
                  Email 
                </label>

                <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 border border-white/10 focus-within:border-blue-500 transition-colors">
                  <span className="text-gray-400 text-sm shrink-0">📩</span>

                  <input
                    type="text"
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

              {/* Options */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        rememberMe: e.target.checked,
                      })
                    }
                    className="accent-orange-basket w-4 h-4 cursor-pointer"
                  />

                  <span className="text-xs text-gray-400">
                    Se souvenir de moi
                  </span>
                </label>

                <Link
                  to="/forgot-Password"
                  className="text-xs text-orange-basket hover:underline"
                >
                  Mot de passe oublié ?
                </Link>
              </div>

              {/* Bouton */}
              <button
                type="submit"
                className="w-full py-3 rounded-xl bg-orange-basket text-white text-sm font-bold hover:opacity-90 transition-all"
              >
                Se connecter →
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
                  Google
                </button>

                <button
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-all"
                >
                  Facebook
                </button>
              </div>

              {/* Inscription */}
              <p className="text-center text-xs text-gray-400 mt-2">
                Vous n’avez pas encore de compte ?{" "}
                <Link
                  to="/registerUser"
                  className="text-orange-basket hover:underline font-semibold"
                >
                  Créer un compte
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
