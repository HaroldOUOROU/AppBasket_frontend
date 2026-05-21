import React, { useState } from "react";
import { Link } from "react-router-dom";

const recentPublications = [
  {
    id: 1,
    titre: "Victoire contre équipe locale !",
    temps: "Il y a 2h",
    type: "Résultat",
  },
  {
    id: 2,
    titre: "Entraînement U16 reporté",
    temps: "Hier",
    type: "Planning",
  },
  {
    id: 3,
    titre: "Nouveau joueur signé",
    temps: "2 jours",
    type: "Actualité",
  },
];

export default function DashboardHome() {
  const [stats] = useState({
    totalJoueurs: 67,
    licensed: 58,
    staff: 5,
    publications: 23,
  });

  return (
    <div className="flex-1 flex flex-col min-w-0">
      {/* Header */}
      <div className="px-6 py-8 border-b border-border-light dark:border-border-dark bg-card-light dark:bg-card-dark">
        <div className="flex items-center gap-4">
          <div className="text-4xl">🏀</div>
          <div>
            <h1 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">
              Dashboard Coach
            </h1>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Résumé rapide et actions importantes
            </p>
          </div>
        </div>
      </div>

      <main className="p-6 space-y-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-blue-text/10 p-6 rounded-xl border shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-blue-text/20 rounded-xl flex items-center justify-center text-2xl">
                👥
              </div>
              <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                Effectif
              </h3>
            </div>
            <p className="text-3xl font-black text-blue-text">
              {stats.totalJoueurs}
            </p>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
              {stats.licensed} licenciés
            </p>
          </div>

          <div className="bg-gradient-to-br from-orange-basket/10 p-6 rounded-xl border shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-orange-basket/20 rounded-xl flex items-center justify-center text-2xl">
                🧑‍🏫
              </div>
              <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                Staff
              </h3>
            </div>
            <p className="text-3xl font-black text-orange-basket">
              {stats.staff}
            </p>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
              Coachs & assistants
            </p>
          </div>

          <div className="bg-gradient-to-br from-green-500/10 p-6 rounded-xl border shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center text-2xl">
                🚀
              </div>
              <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                Publications
              </h3>
            </div>
            <p className="text-3xl font-black text-green-600">
              {stats.publications}
            </p>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
              Posts créés
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/10 p-6 rounded-xl border shadow-lg">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center text-2xl">
                🏆
              </div>
              <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                Palmarès
              </h3>
            </div>
            <p className="text-3xl font-black text-purple-600">12</p>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
              Titres
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div>
          <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6 flex items-center gap-3">
            Actions rapides
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Link
              to="/dashboardCoach/publication"
              className="bg-gradient-to-r from-blue-text to-orange-basket text-white p-6 rounded-xl font-semibold text-center hover:shadow-xl transition-all shadow-lg group"
            >
              <div className="text-2xl mb-3">🚀</div>
              Publication
            </Link>
            <Link
              to="/dashboardCoach/effectif"
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white p-6 rounded-xl font-semibold text-center hover:shadow-xl transition-all shadow-lg group"
            >
              <div className="text-2xl mb-3">👥</div>
              Effectif
            </Link>
            <Link
              to="/dashboardCoach/medias"
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded-xl font-semibold text-center hover:shadow-xl transition-all shadow-lg group"
            >
              <div className="text-2xl mb-3">📷</div>
              Médias
            </Link>
            <Link
              to="/dashboardCoach/profilClub"
              className="bg-gradient-to-r from-orange-basket to-yellow-500 text-white p-6 rounded-xl font-semibold text-center hover:shadow-xl transition-all shadow-lg group"
            >
              <div className="text-2xl mb-3">🏠</div>
              Profil Club
            </Link>
          </div>
        </div>

        {/* Recent Publications */}
        <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6">
          <h3 className="text-xl font-bold text-text-primary-light dark:text-text-primary-dark mb-6 flex items-center gap-3">
            📝 Publications récentes
          </h3>
          <div className="space-y-4">
            {recentPublications.map((pub) => (
              <div
                key={pub.id}
                className="flex items-center gap-4 p-4 bg-white dark:bg-card-dark rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all"
              >
                <div className="w-12 h-12 bg-blue-text/20 rounded-lg flex items-center justify-center text-xl font-bold">
                  {pub.type === "Résultat"
                    ? "🏆"
                    : pub.type === "Planning"
                      ? "📅"
                      : "📰"}
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-text-primary-light dark:text-text-primary-dark truncate">
                    {pub.titre}
                  </h4>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                    {pub.temps}
                  </p>
                </div>
                <Link
                  to="/dashboardCoach/publication"
                  className="text-blue-text hover:underline text-sm font-medium"
                >
                  Voir
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-6 pt-6 border-t border-border-light dark:border-border-dark">
            <Link
              to="/dashboardCoach/publication"
              className="text-blue-text hover:underline font-semibold flex items-center gap-2"
            >
              Voir toutes →
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
