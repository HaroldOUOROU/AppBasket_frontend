import { Link } from "react-router-dom";
import { ShareIcone, MailIcon, LanguageIcone } from "../icons";

const plateforme = [
  { label: "Annuaire des Clubs", to: "/clubs" },
  { label: "Calendrier Matchs", to: "/calendrier" },
  { label: "Statistiques Joueurs", to: "/joueurs" },
  { label: "Résultats Live", to: "/resultats" },
];

const ressources = [
  { label: "Règlements FBBE", to: "/reglements" },
  { label: "Bourses & Formation", to: "/bourses" },
  { label: "Espace Presse", to: "/presse" },
  { label: "Nous Contacter", to: "/contact" },
];

const reseaux = [
  { icone: LanguageIcone, label: "Site" },
  { icone: MailIcon, label: "Email" },
  { icone: ShareIcone, label: "Partager" },
];

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-card-dark border-t border-border-light dark:border-border-dark mt-12">
      {/* Contenu principal */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Colonne 1 — Logo + description */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-blue-text flex items-center justify-center"></div>
            <Link to="/" className="text-2xl font-bold text-orange-basket">
              Basket
              <span className="text-blue-text dark:text-white">Scoop</span>
            </Link>
          </div>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
            La plateforme pour découvrir, suivre et soutenir le basketball au
            Bénin. Développons ensemble le sport national.
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold tracking-widest text-text-primary-light dark:text-text-primary-dark uppercase">
            Plateforme
          </h4>
          <ul className="flex flex-col gap-3">
            {plateforme.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-orange-basket transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold tracking-widest text-text-primary-light dark:text-text-primary-dark uppercase">
            Ressources
          </h4>
          <ul className="flex flex-col gap-3">
            {ressources.map(({ label, to }) => (
              <li key={label}>
                <Link
                  to={to}
                  className="text-sm text-text-secondary-light dark:text-text-secondary-dark hover:text-orange-basket transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="text-xs font-bold tracking-widest text-text-primary-light dark:text-text-primary-dark uppercase">
            Suivez-nous
          </h4>
          <div className="flex items-center gap-3">
            {reseaux.map(({ icone: Icone, label }) => (
              <button
                key={label}
                className="w-9 h-9 rounded-full border border-border-light dark:border-border-dark flex items-center justify-center text-text-secondary-light dark:text-text-secondary-dark hover:border-orange-basket hover:text-orange-basket transition-all"
              >
                <Icone className="w-4 h-4" />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border-light dark:border-border-dark">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
            &copy; 2026 BasketScoop. Tous droits réservés.
          </p>
          <div className="flex items-center gap-6">
            <Link
              to="/confidentialite"
              className="text-xs text-text-secondary-light dark:text-text-secondary-dark hover:text-orange-basket transition-colors"
            >
              Confidentialité
            </Link>
            <Link
              to="/conditions"
              className="text-xs text-text-secondary-light dark:text-text-secondary-dark hover:text-orange-basket transition-colors"
            >
              Conditions d'utilisation
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
