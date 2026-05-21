import { Link, useLocation, Outlet } from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle";

export default function DashboardCoach() {
  const menuItems = [
    { label: "Dashboard", icone: "📊", to: "/dashboardCoach" },
    { label: "Profil du club", icone: "🏠", to: "/dashboardCoach/profilClub" },
    { label: "Staff", icone: "🧑‍🏫", to: "/dashboardCoach/staff" },
    { label: "Effectif", icone: "👥", to: "/dashboardCoach/effectif" },
    { label: "Palmares", icone: "🏆", to: "/dashboardCoach/palmares" },
    { label: "Médias", icone: "📷", to: "/dashboardCoach/medias" },
    { label: "Joueurs Phares", icone: "⭐", to: "/dashboardCoach/joueurPhare" },
    { label: "Publication", icone: "🚀", to: "/dashboardCoach/publication" },
  ];

  const { pathname } = useLocation();

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-card-dark border-b border-border-light dark:border-border-dark">
        <Link to="/" className="text-2xl font-bold text-orange-basket">
          Basket<span className="text-blue-text dark:text-white">Scoop</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link
            to="/dashboardCoach/profil"
            className="flex items-center gap-3 hover:opacity-80 transition"
          >
            <div className="w-9 h-9 rounded-full bg-gray-300"></div>
            <span className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
              Coach
            </span>
          </Link>

          <ThemeToggle />
        </div>
      </header>

      <div className="flex flex-1">
        {/* Bare Latérale */}
        <aside className="flex flex-col w-56 p-6 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-gray-700 shadow-md">
          <nav className="flex flex-col gap-1 flex-1">
            {menuItems.map(({ label, icone, to }) => {
              const isActive =
                to === "/dashboardCoach"
                  ? pathname === to
                  : pathname.startsWith(to);

              return (
                <Link
                  key={label}
                  to={to}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? "bg-blue-600 text-white dark:bg-orange-500 dark:text-black"
                      : "text-text-secondary-light dark:text-text-secondary-dark hover:bg-bg-light dark:hover:bg-bg-dark hover:text-text-primary-light dark:hover:text-text-primary-dark"
                  }`}
                >
                  <span>{icone}</span>
                  <span>{label}</span>
                </Link>
              );
            })}
          </nav>

          {/* Paramètres */}
          <div className="pt-3 border-t border-border-light dark:border-border-dark">
            <Link
              to="/dashboardCoach/parametres"
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark hover:bg-bg-light dark:hover:bg-bg-dark transition-all"
            >
              <span>⚙️</span>
              <span>Paramètres</span>
            </Link>
          </div>
        </aside>

        {/* Contenu dynamique */}
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
