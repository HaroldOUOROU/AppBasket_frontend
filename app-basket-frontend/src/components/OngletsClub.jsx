import { NavLink, useLocation } from "react-router-dom";

const onglets = [
    {label:"A propos",to:"/vueApropos"},
    {label:"Organisation",to:"/vueStaff"},
    {label:"Effectif",to:"/vueEffectif"},
    {label:"Palmarès",to:"/vuePalmares"},
    {label:"Médias",to:"/vueMedia"},
    {label:"Joueurs Phares",to:"/vueJoueurPhare"},
];

export default function OngletsClub({ baseUrl }) {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center gap-1 border-b border-border-light dark:border-border-dark bg-white dark:bg-card-dark mb-6">
      {onglets.map(({ label, to }) => {
        const fullPath = baseUrl + to;
        const isActive = to === ""
          ? pathname === baseUrl || pathname === baseUrl + "/"
          : pathname.startsWith(fullPath);

        return (
          <NavLink
            key={label}
            to={fullPath}
            className={`relative px-4 py-3 text-sm font-medium transition-colors duration-200
              after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5
              after:rounded-full after:transition-all after:duration-300
              ${isActive
                ? "text-orange-basket after:bg-orange-basket"
                : "text-text-secondary-light dark:text-text-secondary-dark hover:text-text-primary-light dark:hover:text-text-primary-dark after:bg-transparent"
              }`}
          >
            {label}
          </NavLink>
        );
      })}
    </div>
  );
}