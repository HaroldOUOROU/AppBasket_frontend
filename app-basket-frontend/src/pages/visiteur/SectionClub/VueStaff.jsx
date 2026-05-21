import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import HeaderClub from "../../../components/HeaderClub";
import OngletsClub from "../../../components/OngletsClub";

const ordreRoles = [
  "Entraîneur Principal",
  "Entraîneur Adjoint",
  "Préparateur Physique",
  "Kinésithérapeute",
  "Manager Sportif",
  "Secrétaire Général",
];

const sections = [
  {
    titre: "Direction Technique",
    roles: ["Entraîneur Principal", "Entraîneur Adjoint"],
  },
  {
    titre: "Performance & Santé",
    roles: ["Préparateur Physique", "Kinésithérapeute"],
  },
  {
    titre: "Administration",
    roles: ["Manager Sportif", "Secrétaire Général"],
  },
];

const staff = [
  {
    nom: "Boss Tossou",
    poste: "Entraîneur Principal",
    experience: "12 ans",
    licence: "BB-2024-0012",
    biographie: "Visionnaire et spécialiste de la formation des jeunes.",
    photo: null,
  },
  {
    nom: "Patrick Koudoro",
    poste: "Entraîneur Adjoint",
    experience: "9 ans",
    licence: "BB-2024-0020",
    biographie: "Spécialiste du coaching et du développement tactique.",
    photo: null,
  },
  {
    nom: "Mamadou Diallo",
    poste: "Préparateur Physique",
    experience: "7 ans",
    licence: "BB-2024-0041",
    biographie:
      "Optimisation de la préparation physique et prévention des blessures.",
    photo: null,
  },
  {
    nom: "Alice Tossou",
    poste: "Kinésithérapeute",
    experience: "6 ans",
    licence: "BB-2024-0056",
    biographie: "Spécialiste en médecine du sport.",
    photo: null,
  },
  {
    nom: "Didier Sognon",
    poste: "Manager Sportif",
    experience: "8 ans",
    licence: "BB-2024-0034",
    biographie: "Expert en gestion sportive.",
    photo: null,
  },
  {
    nom: "Koffi Aïssatou",
    poste: "Secrétaire Général",
    experience: "5 ans",
    licence: "BB-2024-0068",
    biographie: "Coordination administrative et suivi des dossiers du club.",
    photo: null,
  },
];

const club = {
  nom: "Héritier 2A2B",
  ville: "Cotonou",
};

export default function OrganisationClub() {
  // TRI PAR ORDRE HIÉRARCHIQUE
  const staffTrie = [...staff].sort((a, b) => {
    const idxA = ordreRoles.indexOf(a.poste);
    const idxB = ordreRoles.indexOf(b.poste);

    const safeA = idxA === -1 ? 999 : idxA;
    const safeB = idxB === -1 ? 999 : idxB;

    return safeA - safeB;
  });

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      <NavBar />

      <main className="max-w-5xl mx-auto px-4 py-8">
        <HeaderClub club={club} />

        <OngletsClub baseUrl="/clubs/1" />

        <section
          aria-labelledby="organisation-interne"
          className="flex flex-col gap-8"
        >
          {/* INTRO */}
          <div className="flex flex-col gap-2">
            <p className="text-sm text-gray-500 dark:text-gray-300">
              Découvrez l’organisation interne : l’équipe technique et
              administrative qui encadre le club au quotidien.
            </p>
          </div>

          {/* HEADER */}
          <div className="flex flex-col gap-3">
            <div>
              <h2 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">
                Organisation Interne
              </h2>

              <p className="text-sm text-gray-500 py-2">
                Staff technique et administratif du club
              </p>
            </div>

            <span className="text-xs text-gray-400">
              {staff.length} membres
            </span>
          </div>

          {/* SECTIONS */}
          <div className="flex flex-col gap-8">
            {sections.map((section, sectionIndex) => {
              const membresSection = staffTrie.filter((membre) =>
                section.roles.includes(membre.poste)
              );

              if (membresSection.length === 0) return null;

              return (
                <div key={section.titre} className="flex flex-col gap-5">
                  {/* TITRE SECTION */}
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-black text-text-primary-light dark:text-text-primary-dark">
                      {section.titre}
                    </h3>

                    <div className="flex-1 h-px bg-border-light dark:bg-border-dark" />
                  </div>

                  {/* MEMBRES */}
                  <div className="flex flex-col">
                    {membresSection.map((membre, index) => (
                      <div key={membre.nom}>
                        {/* CARD */}
                        <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-5 flex gap-4 hover:-translate-y-1 transition-all duration-300">
                          {/* PHOTO */}
                          <div className="w-16 h-16 rounded-full overflow-hidden shrink-0">
                            {membre.photo ? (
                              <img
                                src={membre.photo}
                                alt={membre.nom}
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full bg-blue-text flex items-center justify-center text-white font-bold text-lg">
                                {membre.nom.charAt(0)}
                              </div>
                            )}
                          </div>

                          {/* INFOS */}
                          <div className="flex-1">
                            <h4 className="font-bold text-text-primary-light dark:text-text-primary-dark">
                              {membre.nom}
                            </h4>

                            <p className="text-xs text-orange-basket font-semibold mb-2">
                              {membre.poste}
                            </p>

                            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 leading-relaxed">
                              {membre.biographie}
                            </p>

                            <div className="flex flex-wrap gap-3 text-[10px] text-gray-400">
                              <span>⏱ {membre.experience}</span>

                              <span>🪪 {membre.licence}</span>
                            </div>
                          </div>
                        </div>

                        {/* TRAIT ENTRE MEMBRES */}
                        {index < membresSection.length - 1 && (
                          <div className="h-px bg-border-light dark:bg-border-dark my-4" />
                        )}
                      </div>
                    ))}
                  </div>

                  {/* TRAIT ENTRE SECTIONS */}
                  {sectionIndex < sections.length - 1 && (
                    <div className="h-px bg-border-light dark:bg-border-dark pt-2" />
                  )}
                </div>
              );
            })}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}