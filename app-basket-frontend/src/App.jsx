import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages visiteur
import Home from "./pages/Home";
import Accueil from "./pages/visiteur/Accueil";
import AnnuaireClub from "./pages/visiteur/AnnuaireClub";
import Actualite from "./pages/visiteur/Actualite";

// Pages club
import VueInfos from "./pages/visiteur/SectionClub/VueClubApropos";
import VueEffectif from "./pages/visiteur/SectionClub/VueEffectif";
import VuePalmares from "./pages/visiteur/SectionClub/VuePalmares";
import VueMedias from "./pages/visiteur/SectionClub/VueMedia";
import VueStaff from "./pages/visiteur/SectionClub/VueStaff";
import VueJoueurPhare from "./pages/visiteur/SectionClub/vueJoueurphare.jsx";

// Pages coach
import Dashboard from "./components/DashboardCoach";
import Effectif from "./pages/coach/Effectif";
import JoueurPhare from "./pages/coach/JoueurPhare";
import Medias from "./pages/coach/Medias";
import Staff from "./pages/coach/Staff";
import ProfilClub from "./pages/coach/ProfilClub";
import Palmares from "./pages/coach/Palmares";
import Publication from "./pages/coach/Publication";
import ParametreCoach from "./pages/coach/infos/ParametreCoach";
import DashboardHome from "./pages/coach/DashboardHome";
import CoachProfil from "./pages/coach/infos/CoachProfil";

// Pages admin
import DashboardAdmin from "./components/DashboardAdmin";
import DashboardAdminHome from "./pages/admin/DashboardAdminHome";
import CoachValidation from "./pages/admin/CoachValidation";
import UsersAdmin from "./pages/admin/UsersAdmin";
import ModerationAdmin from "./pages/admin/ModerationAdmin";
import ClubsAdmin from "./pages/admin/ClubsAdmin";
import StatistiquesAdmin from "./pages/admin/StatistiquesAdmin";
import AuditLogAdmin from "./pages/admin/AuditLogAdmin";
import ParametresAdmin from "./pages/admin/ParametresAdmin";

// Login and register
import LoginVisiteur from "./pages/Login/Login user/LoginVisiteur.jsx";
import RegisterUser from "./pages/Login/Login user/RegisterUser.jsx";
import ForgotPassword from "./pages/Login/Login user/ForgotPassword.jsx";
import LoginCoach from "./pages/Login/Login coach/LoginCoach.jsx";
import RegisterCoach from "./pages/Login/Login coach/RegisterCoach.jsx";
// import LoginAdmin from "./pages/Login/loginAdmin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Visiteur */}
        <Route path="/accueil" element={<Accueil />} />
        <Route path="/actualites" element={<Actualite />} />
        <Route path="/clubs" element={<AnnuaireClub />} />

        {/*  ROUTES CLUB AVEC ID */}
        <Route path="/clubs/:id">
          <Route index element={<VueInfos />} />
          <Route path="vueApropos" element={<VueInfos />} />
          <Route path="vueEffectif" element={<VueEffectif />} />
          <Route path="vuePalmares" element={<VuePalmares />} />
          <Route path="vueMedia" element={<VueMedias />} />
          <Route path="vueStaff" element={<VueStaff />} />
          <Route path="vueJoueurPhare" element={<VueJoueurPhare />} />
        </Route>

        {/* Coach */}
        <Route path="/dashboardCoach" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="profilClub" element={<ProfilClub />} />
          <Route path="effectif" element={<Effectif />} />
          <Route path="joueurPhare" element={<JoueurPhare />} />
          <Route path="palmares" element={<Palmares />} />
          <Route path="medias" element={<Medias />} />
          <Route path="staff" element={<Staff />} />
          <Route path="publication" element={<Publication />} />
          <Route path="parametres" element={<ParametreCoach />} />
          <Route path="profil" element={<CoachProfil />} />
        </Route>

        {/* Admin */}
        <Route path="/dashboardAdmin" element={<DashboardAdmin />}>
          <Route index element={<DashboardAdminHome />} />
          <Route path="coachs" element={<CoachValidation />} />
          <Route path="utilisateurs" element={<UsersAdmin />} />
          <Route path="moderation" element={<ModerationAdmin />} />
          <Route path="clubs" element={<ClubsAdmin />} />
          <Route path="statistiques" element={<StatistiquesAdmin />} />
          <Route path="audit-log" element={<AuditLogAdmin />} />
          <Route path="parametres" element={<ParametresAdmin />} />
        </Route>

        {/* Login */}
        <Route path="/loginVisiteur" element={<LoginVisiteur />} />
        <Route path="/registerUser" element={<RegisterUser />} />
        <Route path="/forgot-Password" element={<ForgotPassword />} />
        <Route path="/loginCoach" element={<LoginCoach />} />
        <Route path="/registerCoach" element={<RegisterCoach />} />

        {/* <Route path="/loginAdmin" element={<LoginAdmin />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
