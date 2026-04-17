import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Accueil from "./pages/visiteur/Accueil";
import AnnuaireClub from "./pages/visiteur/AnnuaireClub";
import Actualite from "./pages/visiteur/Actualite";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* Route page Home */}
          <Route path="/" element={<Home />} />

          {/* Route page visiteur */}
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/clubs" element={<AnnuaireClub />} />
          <Route path="/actualites" element={<Actualite />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
