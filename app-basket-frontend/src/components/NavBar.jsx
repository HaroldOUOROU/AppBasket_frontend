import { NavLink } from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle"; // ← faute corrigée
import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <div>
      <header>
        <div className="flex items-center justify-between pt-6 pb-2 px-6 bg-white dark:bg-gray-900 shadow-md">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-orange-basket">
            Basket<span className="text-blue-text dark:text-white">Scoop</span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center space-x-1">
            {[
              { to: "/accueil", label: "Accueil" },
              { to: "/clubs", label: "Clubs" },
              { to: "/actualites", label: "Actualités" },
            ].map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  `relative px-3 py-2 text-sm font-medium transition-colors duration-200
                   after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5
                   after:rounded-full after:transition-all after:duration-300 after:bg-blue-text
                   ${
                     isActive
                       ? "text-blue-text after:w-[calc(100%-24px)]"
                       : "text-text-secondary dark:text-gray-400 hover:text-blue-text after:w-0 hover:after:w-[calc(100%-24px)]"
                   }`
                }
              >
                {label}
              </NavLink>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Bouton connexion */}
            <button className="px-4 py-1.5 rounded-lg bg-orange-basket text-white text-sm font-medium hover:opacity-90 transition-opacity">
              Se connecter
            </button>

            {/* Toggle dark/light */}
            <ThemeToggle />
          </div>
        </div>
      </header>
    </div>
  );
}
