import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [envoye, setEnvoye] = useState(false);

  // Fonction pour envoyer le mail de réinitialisation
  const handleSubmit = () => {
    // Logique DDjango pour envoyer le mail de réinitialisation
    // Ici, vous pouvez ajouter la logique pour envoyer le mail de réinitialisation
    // Par exemple, faire une requête à votre backend pour générer un token de réinitialisation et l'envoyer par mail
    console.log("Email de réinitialisation envoyé à :", email);

    if (!email) return alert("Veuillez entrer votre adresse email");
    setEnvoye(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-12 relative">
      <div className="absolute inset-0 bg-black/60" />
      {/* carte */}
      <div className="relative z-10 w-full max-w-md mx-4">
        <div className="bg-gray-900/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-white/10">
          {!envoye ? (
            <>
              <div className="text-center mb-6">
                <div className="w-14 h-14 rounded-full bg-blue-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔒</span>
                </div>
                <h1 className="text-2xl font-black text-white mb-1">
                  Mot de passe oublié ?
                </h1>
                <p className="text-xs text-gray-400">
                  Entrez votre email et on vous envoie un lien pour
                  réinitialiser votre mot de passe.
                </p>
              </div>
              {/* Formulaire */}
              <div className="flex flex-col gap-4">
                <div>
                  <label className="text-xs text-gray-400 mb-1.5 block uppercase tracking-widest">
                    Email
                  </label>
                  <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-white/5 border border-white/10 focus-within:border-blue-500 transition-colors">
                    <span className="text-gray-400 text-sm shrink-0">✉️</span>
                    <input
                      type="email"
                      placeholder="jean.dupont@exemple.bj"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-transparent text-sm text-white placeholder-gray-500 outline-none"
                    />
                  </div>
                </div>
                <button className="w-full py-3 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition-colors">
                  Envoyer le lien de réinitialisation →
                </button>
                <Link
                  to="/loginVisiteur"
                  className="text-center text-sm text-gray-400 hover:text-gray-400 transition-colors"
                >
                  ← Retour à la page de connexion
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="text-center flex flex-col items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="text-3xl">✅</span>
                </div>
                <h1 className="text-2xl font-black text-white">
                  Email envoyé !
                </h1>
                <p className="text-sm text-gray-400">
                  Un lien de réinitialisation a été envoyé à{" "}
                  <span className="text-white font-semibold">{email}</span>.
                  Vérifiez votre boîte mail.
                </p>
                <p className="text-xs text-gray-500">
                  Vous n'avez pas reçu l'email ? Vérifiez vos spams ou{" "}
                  <button
                    onClick={() => setEnvoye(false)}
                    className="text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    réessayez
                  </button>
                </p>
                <Link
                  to="/login"
                  className="w-full py-3 rounded-lg bg-blue-600 text-white text-sm font-bold hover:bg-blue-500 transition-colors text-center"
                >
                  Retour à la connexion
                </Link>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
