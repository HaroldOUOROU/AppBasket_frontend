import { Link } from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle";

export default function HeaderHome() {
  return (
    <div>
      <header className="h-16 flex items-center justify-between px-6 md:px-12 bg-white dark:bg-card-dark border-b border-border-light dark:border-border-dark">
        <Link to="/" className="text-2xl font-bold text-orange-basket">
          Basket<span className="text-blue-text dark:text-white">Scoop</span>
        </Link>

        <div className="flex items-center gap-2">
          <button className="px-4 py-1.5 rounded-lg bg-gradient-to-r from-blue-text to-orange-basket text-white text-sm font-medium hover:opacity-90 transition-opacity">
            Se connecter
          </button>
          <ThemeToggle />
        </div>
      </header>
    </div>
  );
}
