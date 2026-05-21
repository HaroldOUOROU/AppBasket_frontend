import ContactCoach from "./ContactCoach";

export default function HeaderClub({
  club = {
    nom: "Héritier 2A2B",
    ville: "Cotonou",
    statutLabel: "CLUB COMPETITIF",
    areneNom: "Hall des Arts",
    areneLocalisation: "Cotonou, Bénin",
  },
}) {
  return (
    <>
      <div className="bg-card-light dark:bg-card-dark rounded-xl border border-border-light dark:border-border-dark p-6 mb-6">
        <div className="flex items-start gap-5">
          {/* Pour le logo */}
          <div className="w-20 h-20 rounded-xl bg-orange-basket flex items-center justify-center text-white text-2xl font-black shrink-0">
            AS
          </div>

          <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-xl font-black text-text-primary-light dark:text-text-primary-dark">
                {club.nom}
              </h1>
              <span className="text-[10px] px-2 py-0.5 rounded-full bg-orange-basket text-white font-bold">
                {" "}
                {club.statutLabel || "CLUB COMPETITIF"}
              </span>
            </div>

            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-3">
              {club.ville}, Bénin Ligue Amateur
            </p>

            {/* Harène / terrain */}
            {(club.areneNom || club.areneLocalisation) && (
              <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mb-3 flex flex-wrap items-center gap-1">
                <span className="font-semibold text-text-primary-light dark:text-text-primary-dark">
                  Arène :
                </span>
                <span>{club.areneNom || "—"}</span>
                {club.areneLocalisation ? (
                  club.googleMapsUrl ? (
                    <a
                      className="text-orange-basket hover:underline ml-1"
                      href={club.googleMapsUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {club.areneLocalisation}
                    </a>
                  ) : (
                    <span>{`(${club.areneLocalisation})`}</span>
                  )
                ) : null}
              </p>
            )}

            <div className="flex items-center gap-4 text-xs text-text-secondary-light dark:text-text-secondary-dark">
              <span>
                <span className="text-text-primary-light dark:text-text-primary-dark font-bold">
                  1.2k
                </span>{" "}
                followers
              </span>
              <span>
                <span className="text-text-primary-light dark:text-text-primary-dark font-bold">
                  15
                </span>{" "}
                Titres Nationaux
              </span>
            </div>
          </div>

          {/* Abonnement + Contact */}
          <div className="flex items-center gap-2 shrink-0">
            <ContactCoach coachName="Coach" clubName={club.nom} />

            <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-text to-orange-basket text-black text-sm font-semibold hover:opacity-90 transition-opacity">
              {" "}
              ⛟S'abonner
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
