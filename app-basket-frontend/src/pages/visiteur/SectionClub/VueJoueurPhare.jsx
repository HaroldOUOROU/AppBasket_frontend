import NavBar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import HeaderClub from "../../../components/HeaderClub";
import OngletsClub from "../../../components/OngletsClub";
import { useState } from "react";
import { useParams } from "react-router-dom";

const pepites = [
  {
    id: 1,
    nom: "Koffi Junior",
    club: "2A2B",
    poste: "Meneur (PG)",
    age: 17,
    taille: "1.85m",
    poids: "78kg",
    envergure: "1.92m",

    biographie:
      "Explosif en transition et excellent visionnaire. Koffi Junior domine par sa vitesse et sa lecture du jeu.",
    accomplissements: [
      "MVP U19 2023",
      "Champion Régional",
      "dhdhjdji",
      "Finaliste Coupe du Bénin U18",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDBz1qEz4U7-ujFbCV5kd3W1xah6IJ32WsE6OyBNc0vrCKz18LqoUufKQmSA6p7-GQSsz_vfg_VA5IYZ7HroydjsBEwBWkKyj_aUWiNlUVRUAHmBWYkp-IMJU-lnXTi2IHNb02r7CD839CN-UjS_1fwoGuG2y6fhiWbJwxDKOX_th1izr4vRfjf-k4MWFSmaM0hCQsMY5GJjah05nIR5Z2EKrQ__XkmvrXhreBi0A3iaXHoqLf62nDuKGrkTNauf3E4EF6yUyDDJQ",
  },
  {
    id: 2,
    nom: "Samuel Bio Jr.",
    club: "2A2B",
    poste: "Pivot (C)",
    age: 19,
    taille: "2.11m",
    poids: "104kg",
    envergure: "2.18m",

    biographie:
      "Un colosse dans la peinture. Samuel domine par sa présence défensive et son timing au contre.",
    accomplissements: [
      "All-Star Game Espoirs",
      "Meilleur Rebondeur Championnat National Jeunes 2023",
    ],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDCpytkJMZsw5Io0E1-KvmDCdyXTz7IwxWtVxgBhyE3RiaYI6gcBDyGHwa9Jb-Gyr4smmlfrm1p4L3E6WbZEj0_J3Zc3aLjuEodzVCHKhR7jPOAKx6-gac3IzZqS2tualoV7W5sgJXVgy_NBZVBgOT_iTauLupw9ByxkEigMOwL6J3PeDeop_UtJHLeFchEP3aiQaGBt8l8v0eZvIw5vL9-RlGIDd6yrZwQu85ag4htSo8MUJZiYI2sFT5Yv69JfUDZEg-EckUYEg",
  },
  {
    id: 3,
    nom: "Idriss Gogan",
    club: "2A2B",
    poste: "Ailier Fort (PF)",
    age: 18,
    taille: "2.01m",
    poids: "92kg",
    envergure: "2.08m",

    biographie:
      "Polyvalent et athlétique. Idriss excelle dans les situations de un contre un.",
    accomplissements: ["Finaliste Coupe du Bénin U18"],
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDPBWoF8hdgZKqnoVYqTV2CHEyM_joXC5mDuUjuhX7eYkW2FvZrdS8qLn2DilJ0VCh8aecnqPBc_a2oJtxW-_OJgzbPigGUp2wrUkRBWrLa8NzlxNnE9T_2NnmHKhQ5lPDQVN9JiyqggPCTEMcYSt65jtYoAmSS37CmsrpakEoF41oIOI0xXMhB3Sl9GHHvzdmym5jRGE2a9on33M4quz_V6Y-JhMWCIZhlb2RbwOB26V3VZI-5DI2kSZA7uaAMHQ1z0b3VuqDA3w",
  },
];

export default function JoueursPhares() {
  const { id } = useParams();
  const club = {
    nom: "Héritier 2A2B",
    initiale: "2A2B",
  };
  const [joueurActif, setJoueurActif] = useState(null);

  const handleSelect = (joueur) => {
    setJoueurActif(joueurActif?.id === joueur.id ? null : joueur);
  };

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      <NavBar />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <HeaderClub club={club} />
        <OngletsClub baseUrl={`/clubs/${id}`} />

        <div className="flex flex-col gap-2 mb-8">
          <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            Une sélection de talents : cliquez sur un joueur pour afficher son
            profil et ses points forts.
          </p>
        </div>

        <div className="mb-8">
          <h2 className="text-3xl font-black text-text-primary-light dark:text-text-primary-dark">
            Joueurs Phare du Club
          </h2>
          <p className="text-text-secondary-light dark:text-text-secondary-dark mt-2">
            Les futurs talents de 2A2B
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-4 lg:col-span-3 space-y-4">
            {pepites.map((joueur) => (
              <div
                key={joueur.id}
                onClick={(e) => {
                  handleSelect(joueur);
                  e.currentTarget.scrollIntoView({
                    behavior: "smooth",
                    block: "center",
                  });
                }}
                className={`group cursor-pointer rounded-2xl p-4 border-2 transition-all hover:scale-105 hover:shadow-2xl ${
                  joueurActif?.id === joueur.id
                    ? "border-orange-basket bg-gradient-to-br from-orange-basket/5 shadow-orange-basket/25 ring-2 ring-orange-basket/30"
                    : "border-border-light dark:border-border-dark hover:border-orange-basket/50"
                }`}
              >
                <div
                  className="w-full h-32 rounded-xl flex items-center justify-center overflow-hidden relative"
                  style={{
                    backgroundImage: `url(${joueur.image})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all"></div>
                </div>

                <h3 className="font-black text-lg mt-3 truncate">
                  {joueur.nom}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                  {joueur.poste}
                </p>
                <span className="text-xs text-text-secondary-light dark:text-text-secondary-dark">
                  {joueur.age} ans
                </span>
              </div>
            ))}
          </div>

          {!joueurActif && (
            <div className="col-span-8 flex items-center justify-center">
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                Sélectionnez un joueur pour afficher son profil
              </p>
            </div>
          )}

          {joueurActif && (
            <>
              <div className="col-span-5">
                <div className="bg-gray-900 rounded-xl overflow-hidden h-64 flex items-center justify-center relative mb-3">
                  {joueurActif.video ? (
                    <video
                      src={joueurActif.video}
                      controls
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3 text-center px-6">
                      <div className="w-14 h-14 rounded-full bg-orange-basket/20 flex items-center justify-center">
                        <span className="text-2xl">▶</span>
                      </div>
                      <p className="text-white font-bold text-sm">
                        HIGHLIGHTS MIXTAPE 2024
                      </p>
                      <p className="text-orange-basket text-xs font-semibold uppercase tracking-widest">
                        Profil détaillé · {joueurActif.nom}
                      </p>
                    </div>
                  )}
                  <div className="absolute bottom-2 left-2 flex items-center gap-2">
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white/20 text-white font-bold">
                      HD 1080p
                    </span>
                  </div>
                </div>

                <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4">
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-widest mb-1">
                    Profil en vedette
                  </p>
                  <p className="text-base font-black text-text-primary-light dark:text-text-primary-dark">
                    {joueurActif.nom}
                  </p>
                  <p className="text-xs text-orange-basket font-semibold">
                    {joueurActif.poste} · {joueurActif.age} ans
                  </p>
                  <div className="flex items-center gap-4 mt-3 text-xs text-text-secondary-light dark:text-text-secondary-dark">
                    <span>📏 {joueurActif.taille}</span>
                    <span>⚖️ {joueurActif.poids}</span>
                    <span>🦅 Envergure {joueurActif.envergure}</span>
                  </div>
                </div>
              </div>

              <div className="col-span-3 lg:col-span-4 flex flex-col gap-4">
                <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4 py-4">
                  <p className="text-[10px] text-text-secondary-light dark:text-secondary-dark uppercase tracking-widest mb-2">
                    Présentation
                  </p>
                  <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4">
                    <h3 className="text-lg font-black">{joueurActif.nom}</h3>
                  </div>

                  <div className="bg-white dark:bg-card-dark rounded-xl border p-4">
                    <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark leading-relaxed italic">
                      "{joueurActif.biographie}"
                    </p>
                  </div>
                  <div className="bg-white dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-4">
                    <p className="text-[10px] text-text-secondary-light dark:text-text-secondary-dark uppercase tracking-widest mb-3">
                      Accomplissements
                    </p>
                    <div className="flex flex-col gap-2">
                      {joueurActif.accomplissements.map((acc, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <span className="text-orange-basket shrink-0">
                            🏅
                          </span>
                          <p className="text-xs text-text-primary-light dark:text-text-primary-dark">
                            {acc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
