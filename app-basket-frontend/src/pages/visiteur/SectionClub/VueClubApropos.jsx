import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import HeaderClub from "../../../components/HeaderClub";
import OngletsClub from "../../../components/OngletsClub";
import { Link } from "react-router-dom";

export default function VueApropos() {
  const staff = [
    {
      nom: "Jean-Marc Koffi",
      poste: "Entraîneur Principal",
      depuis: "Depuis 2021 · Exp. Pro",
    },
    { nom: "Didier Sognon", poste: "Manager Sportif", depuis: "" },
    {
      nom: "Alice Tossou",
      poste: "Médecin d'Équipe",
      depuis: "Performance & Santé",
    },
  ];

  const histClub = [
    { label: "Fondation", valeur: "1978" },
    { label: "Ville", valeur: "Cotonou" },
    { label: "Arène", valeur: "Hall des Arts" },
    { label: "Couleur", valeur: "🔵 🟠" },
  ];

  const palmares = [
    { titre: "Championnats Nationaux", valeur: "12 Titres", icone: "🏆" },
    { titre: "Coupes Nationales", valeur: "08 Titres", icone: "🥇" },
    { titre: "Super Coupe", valeur: "05 Titres", icone: "⭐" },
    { titre: "BAL Qualifiés", valeur: "3 participations", icone: "🏀" },
  ];

  const pepites = [
    {
      nom: "Marc-Aurèle L.",
      poste: "Meneur · 17 ans",
      potentiel: "Élite A",
      badge: "ESPOIR",
    },
    {
      nom: "Samuel Bio Jr.",
      poste: "Pivot · 18 ans",
      potentiel: "Élite A",
      badge: "ESPOIR",
    },
    {
      nom: "Innocent G.",
      poste: "Ailier · 16 ans",
      potentiel: "Élite A",
      badge: "ESPOIR",
    },
    {
      nom: "David Kpadé",
      poste: "Arrière · 19 ans",
      potentiel: "Élite A",
      badge: "ESPOIR",
    },
  ];

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      <NavBar />

      <div className="max-w-5xl mx-auto px-4 py-8 text-text-primary-light dark:text-text-primary-dark">
        {/* Header */}
        <HeaderClub
          club={{
            nom: "Héritier 2A2B",
            ville: "Cotonou",
            statutLabel: "CLUB COMPETITIF",
            areneNom: "Hall des Arts",
            areneLocalisation: "Cotonou, Bénin",
            // Active le lien Google Maps côté HeaderClub (si fourni)
            googleMapsUrl:
              "https://www.google.com/maps?q=Cotonou%2C%20Benin&output=embed",
          }}
        />

        {/* Onglets */}
        <OngletsClub baseUrl="/clubs/1" />

        {/* Contenu À propos */}
        <div className="flex flex-col gap-6">
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Découvrez l’essentiel du club : mission, histoire et repères clés.
          </p>

          {/* Mission + Histoire */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5">
              <h3 className="text-xs font-bold text-orange-basket uppercase tracking-widest mb-3 flex items-center gap-1">
                🏀 Mission
              </h3>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                Promouvoir l'excellence du basketball au Bénin à travers une
                formation rigoureuse, des infrastructures de qualité et un
                esprit de compétition exemplaire. Nous visons à transformer les
                jeunes talents en leaders de demain.
              </p>
            </div>

            <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5">
              <h3 className="text-xs font-bold text-orange-basket uppercase tracking-widest mb-3 flex items-center gap-1">
                📖 Histoire
              </h3>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark leading-relaxed">
                Fondé en 1978, l'Association Sportive du Port Autonome de
                Cotonou (ASPAC) s'est imposée comme le club phare du pays avec
                plus d'une dizaine de titres nationaux et une présence
                continentale régulière.
              </p>
            </div>
          </div>

          {/* Stats rapides */}
          <div className="grid grid-cols-4 gap-4">
            {histClub.map(({ label, valeur }) => (
              <div
                key={label}
                className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4 text-center"
              >
                <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-widest mb-1">
                  {label}
                </p>
                <p className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark">
                  {valeur}
                </p>
              </div>
            ))}
          </div>

          {/* Organisation interne */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
                Organisation Interne
              </h2>
              <Link
                to="/clubs/1/vueStaff"
                className="text-xs text-orange-basket hover:underline"
              >
                → Voir tout le staff
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {staff.map((membre) => (
                <div
                  key={membre.nom}
                  className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4 flex items-center gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-blue-text flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {membre.nom.charAt(0)}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark">
                      {membre.nom}
                    </p>
                    <p className="text-xs text-orange-basket">{membre.poste}</p>
                    {membre.depuis && (
                      <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                        {membre.depuis}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Effectif */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
                  Effectif
                </h2>

                <span className="text-[10px] px-2 py-0.5 rounded-full bg-green-500/20 text-green-500 font-bold uppercase">
                  Structuré
                </span>
              </div>

              <Link
                to="/clubs/1/vueEffectif"
                className="text-xs text-orange-basket hover:underline"
              >
                Voir l’effectif →
              </Link>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[
                {
                  label: "Joueurs",
                  valeur: "98",
                },
                {
                  label: "Licenciés",
                  valeur: "84",
                },
                {
                  label: "Catégories",
                  valeur: "5",
                },
                {
                  label: "Équipes engagées",
                  valeur: "5",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4"
                >
                  <p className="text-[10px] uppercase tracking-widest text-text-secondary-light dark:text-text-secondary-dark mb-2">
                    {item.label}
                  </p>

                  <p className="text-2xl font-black text-text-primary-light dark:text-text-primary-dark">
                    {item.valeur}
                  </p>
                </div>
              ))}
            </div>

            {/* Texte présentation */}
            <div className="mt-4 bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5 flex flex-col gap-4">
              <p className="text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
                Le club dispose de plusieurs catégories engagées dans les
                compétitions locales et nationales avec un encadrement adapté au
                développement progressif des joueurs.
              </p>

              <div className="grid grid-cols-5 gap-3">
                {[
                  {
                    cat: "U14",
                    joueurs: 14,
                  },
                  {
                    cat: "U16",
                    joueurs: 18,
                  },
                  {
                    cat: "U18",
                    joueurs: 22,
                  },
                  {
                    cat: "U20",
                    joueurs: 16,
                  },
                  {
                    cat: "Sénior",
                    joueurs: 28,
                  },
                ].map((item) => (
                  <div
                    key={item.cat}
                    className="rounded-lg bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark p-3 text-center"
                  >
                    <p className="text-xs font-bold text-orange-basket mb-1">
                      {item.cat}
                    </p>

                    <p className="text-lg font-black text-text-primary-light dark:text-text-primary-dark">
                      {item.joueurs}
                    </p>

                    <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark">
                      joueurs
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Palmarès */}
          <div>
            <div className="flex items-center justify-between gap-3 mb-4">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
                  Palmarès du Club
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-basket/20 text-orange-basket font-bold uppercase">
                  Mise en avant
                </span>
              </div>
              <Link
                to="/clubs/1/vuePalmares"
                className="text-xs text-orange-basket hover:underline"
              >
                → Historique complet
              </Link>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {palmares.map(({ titre, valeur, icone }) => (
                <div
                  key={titre}
                  className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4 text-center"
                >
                  <span className="text-2xl">{icone}</span>
                  <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-widest mt-2 mb-1">
                    {titre}
                  </p>
                  <p className="text-lg font-black text-text-primary-light dark:text-text-primary-dark">
                    {valeur}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Médias */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
                  Médias & Galerie
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-text/20 text-blue-400 font-bold uppercase">
                  Exclusif
                </span>
              </div>
              <Link
                to="/clubs/1/vueMedia"
                className="text-xs text-orange-basket hover:underline"
              >
                Explorer l'album →
              </Link>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="h-32 rounded-xl bg-bg-light dark:bg-bg-dark border border-border-light dark:border-border-dark flex items-center justify-center cursor-pointer hover:-translate-y-1 transition-all"
                >
                  <span className="text-text-secondary-light dark:text-text-secondary-dark text-xs">
                    Photo {i}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Joueur phare */}
          <div>
            <div className="flex items-center justify-between  mb-4">
              <div className="flex  items-center gap-3">
                <h2 className="text-lg font-bold text-text-primary-light dark:text-text-primary-dark">
                  Joueur phare
                </h2>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-text/20 text-blue-400 font-bold uppercase">
                  Formation
                </span>
              </div>

              <Link
                to="/clubs/1/vueJoueurPhare"
                className="text-xs text-orange-basket hover:underline"
              >
                Découvrir les talents →
              </Link>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {pepites.map((joueur) => (
                <div
                  key={joueur.nom}
                  className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark overflow-hidden hover:-translate-y-1 transition-all cursor-pointer"
                >
                  <div className="h-40 bg-orange-basket/20 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-orange-basket/40 flex items-center justify-center text-white text-xl font-black">
                      {joueur.nom.charAt(0)}
                    </div>
                  </div>
                  <div className="p-3">
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-basket text-white font-bold">
                      {joueur.badge}
                    </span>
                    <p className="text-sm font-bold text-text-primary-light dark:text-text-primary-dark mt-2">
                      {joueur.nom}
                    </p>
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                      {joueur.poste}
                    </p>
                    <p className="text-[10px] text-orange-basket mt-1">
                      Potentiel: {joueur.potentiel}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
