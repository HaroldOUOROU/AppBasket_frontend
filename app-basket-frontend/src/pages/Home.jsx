import {
  DarkIcon,
  LightIcon,
  ShareIcone,
  MailIcon,
  LanguageIcone,
  GroupIcon,
  StarsIcon,
  NewsIcon,
  AccountBalanceIcon,
} from "../icons";

import { Link } from "react-router-dom";
import ThemeToggle from "../theme/ThemeToggle";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import HeaderHome from "../components/HeaderHome";
function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-bg-light dark:bg-bg-dark text-blue-text dark:text-text-primary-dark">
      {/* HEADER */}
      <HeaderHome />

      {/* MAIN */}
      <main className="flex flex-col flex-1 items-center justify-center p-7 text-center bg-bg-light dark:bg-bg-dark">
        <h1 className="text-4xl md:text-5xl font-black leading-tight text-blue-text dark:text-white">
          Explorez l'univers du{" "}
          <span className="text-orange-basket italic">Basketball</span> béninois
          avec{" "}
          <span className="text-orange-basket">
            Basket <span className="text-blue-text dark:text-white">Scoop</span>
          </span>
        </h1>

        <p className="mt-2 text-text-secondary-light dark:text-text-secondary-dark max-w-xl p-8 text-lg md:text-xl">
          Découvrez les clubs disponibles dans votre région, tenez-vous au
          courant de l'actualité du basketball dans votre pays.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          <Link
            to="/accueil"
            className="flex min-w-[240px] items-center justify-center rounded-xl h-14 px-8 bg-gradient-to-r from-blue-text to-orange-basket text-white text-lg font-bold shadow-lg shadow-orange-basket/20 hover:shadow-orange-basket/40 hover:-translate-y-1 transition-all"
          >
            Commencer l'aventure
          </Link>
        </div>
      </main>

      {/* SECTION CARDS */}
      <section className="bg-white dark:bg-card-dark py-12 border-t border-border-light dark:border-border-dark">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 md:px-8">
          {/* Card 1 */}
          <Link
            className="flex flex-col items-center p-8 rounded-xl bg-white dark:bg-bg-dark shadow-lg shadow-gray-900/10 gap-4 text-center cursor-pointer hover:shadow-xl hover:shadow-orange-basket/40 hover:-translate-y-1 transition-all"
            to="/clubs"
          >
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-text dark:bg-card-dark">
              <GroupIcon className="w-10 h-10 text-orange-basket" />
            </div>
            <h3 className="text-2xl font-bold text-blue-text dark:text-white">
              Clubs Officiels
            </h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed max-w-sm">
              Découvrez les clubs de basketball officiels du Bénin, avec leurs
              profils détaillés et les dernières actualités.
            </p>
          </Link>

          {/* Card 2 */}
          <div className="flex flex-col items-center p-8 rounded-xl bg-white dark:bg-bg-dark shadow-lg shadow-gray-900/10 gap-4 text-center cursor-pointer hover:shadow-xl hover:shadow-orange-basket/40 hover:-translate-y-1 transition-all">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-text dark:bg-card-dark">
              <StarsIcon className="w-10 h-10 text-orange-basket" />
            </div>
            <h3 className="text-2xl font-bold text-blue-text dark:text-white">
              Talents émergents
            </h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed max-w-sm">
              Suivez les jeunes talents du basketball béninois et leurs parcours
              prometteurs.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center p-8 rounded-xl bg-white dark:bg-bg-dark shadow-lg shadow-gray-900/10 gap-4 text-center cursor-pointer hover:shadow-xl hover:shadow-orange-basket/40 hover:-translate-y-1 transition-all">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-text dark:bg-card-dark">
              <NewsIcon className="w-10 h-10 text-orange-basket" />
            </div>
            <h3 className="text-2xl font-bold text-blue-text dark:text-white">
              Actualités & Événements
            </h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark leading-relaxed max-w-sm">
              Abonnez-vous à vos clubs favoris et recevez leurs publications
              directement sur votre fil.
            </p>
          </div>
        </div>

        {/* Card 4*/}
        <div className="bg-white dark:bg-card-dark py-12 border-t border-border-light dark:border-border-dark">
          <div className="max-w-6xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* CARD Clubs */}
              <div className="flex flex-col justify-between p-8 rounded-2xl bg-white dark:bg-bg-dark text-white 
                shadow-lg shadow-blue-text/20 
                hover:shadow-xl hover:shadow-orange-basket/40 hover:-translate-y-1 transition-all">
                <div>
                  <h3 className="text-[10px] uppercase tracking-[0.3em] text-blue-text dark:text-white font-bold">
                    Clubs & Organisations
                  </h3>

                  <h2 className="text-3xl font-black mt-4  text-blue-text ">
                    Vous gérez un club ?
                  </h2>

                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark  leading-relaxed mt-4 max-w-md">
                    Rejoignez BasketScoop pour présenter votre club, publier vos
                    actualités et développer votre visibilité dans la communauté
                    basketball béninoise.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-8">
                  <button className="h-12 px-6 rounded-xl bg-orange-basket text-white font-bold hover:opacity-90 transition-opacity">
                    Inscrire mon club
                  </button>

                  <button
                    className="h-12 px-6 rounded-xl border border-border-light dark:border-border-dark 
                   bg-white text-blue-text dark:bg-card-dark dark:text-white 
                   font-semibold hover:bg-blue-text/10 transition-all"
                  >
                    En savoir plus
                  </button>
                </div>
              </div>

              {/* CARD INFOS */}
              <div className="grid grid-cols-2 gap-4 ">
                {[
                  {
                    titre: "Visibilité",
                    description:
                      "Présentez votre club et vos équipes à toute la communauté.",
                  },
                  {
                    titre: "Actualités",
                    description:
                      "Publiez vos annonces, résultats et événements sportifs.",
                  },
                  {
                    titre: "Recrutement",
                    description:
                      "Attirez de nouveaux joueurs et futurs partenaires.",
                  },
                  {
                    titre: "Communauté",
                    description:
                      "Développez votre présence dans le basketball béninois.",
                  },
                ].map((item) => (
                  <div
                    key={item.titre}
                    className="flex flex-col justify-between p-6 rounded-2xl bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark hover:-translate-y-1 transition-all hover:shadow-xl hover:shadow-orange-basket/40 hover:-translate-y-1 transition-all
"
                  >
                    <div>
                      <h3 className="text-lg font-bold text-blue-text dark:text-white mb-3">
                        {item.titre}
                      </h3>

                      <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <Footer />

      {/* <footer className="flex flex-col items-center justify-center bg-white dark:bg-card-dark border-t border-border-light dark:border-border-dark p-6">
        <div className="flex gap-6 mb-4 text-text-secondary-light dark:text-text-secondary-dark text-sm">
          <a href="#" className="hover:text-blue-text dark:hover:text-white">
            A propos
          </a>
          <a href="#" className="hover:text-blue-text dark:hover:text-white">
            Contact
          </a>
          <a href="#" className="hover:text-blue-text dark:hover:text-white">
            Mentions légales
          </a>
          <a href="#" className="hover:text-blue-text dark:hover:text-white">
            Confidentialité
          </a>
        </div>
        <div className="flex gap-6 text-text-secondary-light dark:text-text-secondary-dark">
          <ShareIcone />
          <LanguageIcone />
          <MailIcon />
        </div>
        <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark m-5">
          © 2024 Basketball Bénin. Tous droits réservés.
        </p>
      </footer> */}
    </div>
  );
}

export default Home;
