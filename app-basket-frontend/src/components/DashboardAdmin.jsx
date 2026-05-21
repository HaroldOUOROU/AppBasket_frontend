import { Link, Outlet, useLocation } from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle";

export default function DashboardAdmin() {
  const menuItems = [
    { label: "Dashboard", icone: "📊", to: "/dashboardAdmin" },
    {
      label: "Coachs à valider",
      icone: "✅",
      to: "/dashboardAdmin/coachs",
    },
    {
      label: "Utilisateurs",
      icone: "👤",
      to: "/dashboardAdmin/utilisateurs",
    },
    {
      label: "Modération",
      icone: "🛡️",
      to: "/dashboardAdmin/moderation",
    },
    {
      label: "Clubs",
      icone: "🏟️",
      to: "/dashboardAdmin/clubs",
    },
    {
      label: "Statistiques",
      icone: "📈",
      to: "/dashboardAdmin/statistiques",
    },
    {
      label: "Audit log",
      icone: "🧾",
      to: "/dashboardAdmin/audit-log",
    },
    {
      label: "Paramètres",
      icone: "⚙️",
      to: "/dashboardAdmin/parametres",
    },
  ];

  const { pathname } = useLocation();

  return (
    <div className="h-screen flex flex-col">
      <header className="h-16 flex items-center justify-between px-6 bg-white dark:bg-card-dark border-b border-border-light dark:border-border-dark">
        <Link to="/" className="text-2xl font-bold text-orange-basket">
          Basket<span className="text-blue-text dark:text-white">Scoop</span>
        </Link>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-300" />
            <span className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
              Admin
            </span>
          </div>
          <ThemeToggle />
        </div>
      </header>

      <div className="flex flex-1">
        <aside className="flex flex-col w-64 p-6 bg-card-light dark:bg-card-dark border-r border-border-light dark:border-gray-700 shadow-md">
          <nav className="flex flex-col gap-1 flex-1">
            {menuItems.map(({ label, icone, to }) => {
              const isActive =
                to === "/dashboardAdmin"
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
        </aside>

        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
