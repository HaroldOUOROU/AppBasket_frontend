import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import HeaderClub from "../../../components/HeaderClub";
import OngletsClub from "../../../components/OngletsClub";

const categories = [
  {
    nom: "U14",
    total: 14,
    garcons: 8,
    filles: 6,
    licencies: 11,
  },
  {
    nom: "U16",
    total: 18,
    garcons: 10,
    filles: 8,
    licencies: 15,
  },
  {
    nom: "U18",
    total: 22,
    garcons: 14,
    filles: 8,
    licencies: 20,
  },
  {
    nom: "U20",
    total: 16,
    garcons: 9,
    filles: 7,
    licencies: 13,
  },
  {
    nom: "Sénior",
    total: 28,
    garcons: 15,
    filles: 13,
    licencies: 25,
  },
];

const club = {
  nom: "Héritier 2A2B",
  initiale: "H",
  statut: "COMPÉTITIF",
  ville: "Cotonou",
  ligue: "Ligue Professionnelle A",
  followers: "1.2k",
  titres: "15",
};

export default function EffectifClub() {
  const totalJoueurs = categories.reduce(
    (sum, cat) => sum + cat.total,
    0,
  );

  const totalGarcons = categories.reduce(
    (sum, cat) => sum + cat.garcons,
    0,
  );

  const totalFilles = categories.reduce(
    (sum, cat) => sum + cat.filles,
    0,
  );

  const totalLicencies = categories.reduce(
    (sum, cat) => sum + cat.licencies,
    0,
  );

  const pourcentageLicencies = Math.round(
    (totalLicencies / totalJoueurs) * 100,
  );

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      <NavBar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <HeaderClub club={club} />

        <OngletsClub baseUrl="/clubs/1" />

        <section
          aria-labelledby="effectif"
          className="flex flex-col gap-10"
        >
          {/* HEADER */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">
                Effectif
              </h2>

              <div className="flex-1 h-px bg-border-light dark:bg-border-dark" />
            </div>

            <p className="text-sm leading-relaxed max-w-3xl text-text-secondary-light dark:text-text-secondary-dark">
              Le club dispose de plusieurs catégories engagées dans les
              compétitions locales et nationales avec un encadrement
              sportif adapté au développement progressif des joueurs.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              {
                titre: "Joueurs",
                valeur: totalJoueurs,
              },
              {
                titre: "Licenciés",
                valeur: totalLicencies,
              },
              {
                titre: "Garçons",
                valeur: totalGarcons,
              },
              {
                titre: "Filles",
                valeur: totalFilles,
              },
            ].map((item) => (
              <div
                key={item.titre}
                className="bg-white dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-5"
              >
                <p className="text-xs uppercase tracking-widest text-text-secondary-light dark:text-text-secondary-dark mb-3">
                  {item.titre}
                </p>

                <p className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">
                  {item.valeur}
                </p>
              </div>
            ))}
          </div>

          {/* LICENCES */}
          <div className="bg-white dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-6 flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-text-primary-light dark:text-text-primary-dark">
                  Situation des licences
                </h3>

                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  Une grande partie des joueurs du club dispose d’une
                  licence sportive active.
                </p>
              </div>

              <span className="text-3xl font-black text-green-500">
                {pourcentageLicencies}%
              </span>
            </div>

            <div className="w-full h-3 rounded-full overflow-hidden bg-bg-light dark:bg-bg-dark">
              <div
                className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-400"
                style={{
                  width: `${pourcentageLicencies}%`,
                }}
              />
            </div>
          </div>

          {/* CATÉGORIES */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-black text-text-primary-light dark:text-text-primary-dark">
                Catégories du club
              </h3>

              <div className="flex-1 h-px bg-border-light dark:bg-border-dark" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {categories.map((cat) => (
                <div
                  key={cat.nom}
                  className="bg-white dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-5 flex flex-col gap-5 hover:-translate-y-1 transition-all"
                >
                  {/* HEADER */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-black text-orange-basket">
                      {cat.nom}
                    </span>

                    <span className="text-2xl font-black text-text-primary-light dark:text-text-primary-dark">
                      {cat.total}
                    </span>
                  </div>

                  {/* INFOS */}
                  <div className="flex flex-col gap-3 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary-light dark:text-text-secondary-dark">
                        Garçons
                      </span>

                      <span className="font-bold text-text-primary-light dark:text-text-primary-dark">
                        {cat.garcons}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary-light dark:text-text-secondary-dark">
                        Filles
                      </span>

                      <span className="font-bold text-text-primary-light dark:text-text-primary-dark">
                        {cat.filles}
                      </span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary-light dark:text-text-secondary-dark">
                        Licenciés
                      </span>

                      <span className="font-bold text-green-500">
                        {cat.licencies}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* FORMATION */}
          <div className="bg-white dark:bg-card-dark border border-border-light dark:border-border-dark rounded-2xl p-6 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <h3 className="text-xl font-black text-text-primary-light dark:text-text-primary-dark">
                Formation & Développement
              </h3>

              <div className="flex-1 h-px bg-border-light dark:bg-border-dark" />
            </div>

            <div className="flex flex-col gap-4 text-sm leading-relaxed text-text-secondary-light dark:text-text-secondary-dark">
              <p>
                Le club met un accent particulier sur la formation
                technique, physique et tactique des jeunes joueurs afin
                d’assurer une progression durable vers les catégories
                supérieures.
              </p>

              <p>
                Chaque catégorie bénéficie d’un suivi adapté permettant
                aux joueurs d’évoluer dans un environnement structuré,
                compétitif et favorable à leur développement sportif.
              </p>
            </div>
          </div>

          {/* IDENTITÉ SPORTIVE */}
          <div className="bg-gradient-to-r from-blue-text to-orange-basket rounded-2xl p-6 text-white flex flex-col gap-5">
            <div>
              <h3 className="text-2xl font-black mb-2">
                Identité Sportive
              </h3>

              <p className="text-sm text-white/90 leading-relaxed max-w-3xl">
                Le club privilégie la formation progressive des jeunes
                talents, la discipline collective et l’intégration des
                joueurs dans les compétitions régionales et nationales.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                "Formation des jeunes talents",
                "Encadrement structuré",
                "Participation aux compétitions",
              ].map((item) => (
                <div
                  key={item}
                  className="bg-white/10 border border-white/10 rounded-xl p-4 backdrop-blur-sm"
                >
                  <p className="text-sm font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}