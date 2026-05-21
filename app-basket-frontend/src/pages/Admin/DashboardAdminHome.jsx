import { Link } from "react-router-dom";

export default function DashboardAdminHome() {
  const kpis = [
    { label: "Coachs en attente", value: 12, color: "from-blue-text/10", text: "text-blue-text" },
    {
      label: "Utilisateurs désactivés",
      value: 5,
      color: "from-orange-basket/10",
      text: "text-orange-basket",
    },
    {
      label: "Contenus en attente",
      value: 9,
      color: "from-purple-500/10",
      text: "text-purple-600",
    },
    { label: "Décisions (7j)", value: 38, color: "from-green-500/10", text: "text-green-600" },
  ];

  const quickLinks = [
    { to: "/dashboardAdmin/coachs", title: "Valider/rejeter les coachs", emoji: "✅" },
    { to: "/dashboardAdmin/utilisateurs", title: "Gérer les comptes", emoji: "👤" },
    { to: "/dashboardAdmin/moderation", title: "Modérer les contenus", emoji: "🛡️" },
    { to: "/dashboardAdmin/audit-log", title: "Audit log", emoji: "🧾" },
  ];

  return (
    <div className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="text-4xl">🛠️</div>
        <div>
          <h1 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">
            Dashboard Admin
          </h1>
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Vue d’ensemble et accès rapide aux modules d’administration.
          </p>
        </div>
      </div>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kpis.map((k) => (
            <div
              key={k.label}
              className={`bg-gradient-to-br ${k.color} p-6 rounded-xl border shadow-lg`}
            >
              <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark text-sm">
                {k.label}
              </h3>
              <p className={`text-3xl font-black mt-2 ${k.text}`}>{k.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark">
          Actions rapides
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickLinks.map((q) => (
            <Link
              key={q.to}
              to={q.to}
              className="bg-gradient-to-r from-blue-text to-orange-basket text-white p-6 rounded-xl font-semibold text-center hover:shadow-xl transition-all shadow-lg group"
            >
              <div className="text-2xl mb-3">{q.emoji}</div>
              <div className="text-sm">{q.title}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
        <h2 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-4">
          À traiter maintenant
        </h2>
        <ul className="space-y-3 text-sm text-text-secondary-light dark:text-text-secondary-dark">
          <li className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-blue-text/20 text-blue-text">
              1
            </span>
            12 coachs en attente de validation
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-purple-500/20 text-purple-600">
              2
            </span>
            9 contenus en attente de modération
          </li>
          <li className="flex items-center gap-3">
            <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-orange-basket/20 text-orange-basket">
              3
            </span>
            5 comptes désactivés à revoir
          </li>
        </ul>
      </section>
    </div>
  );
}

