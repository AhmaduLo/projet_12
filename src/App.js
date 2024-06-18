import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route,  Navigate } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Profil from "./pages/Profil";
import Reglage from "./pages/Reglage";
import Communaute from "./pages/Communaute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigate to="/accueil/12" />} />
        <Route path="Accueil/:id" element={<Accueil />} />
        <Route path="/profil/:id" element={<Profil />} />
        <Route path="/Reglage" element={<Reglage />} />
        <Route path="/Communaute" element={<Communaute />} />
        {/* path"*" fonctionne si jamais l'url ne correspond a rien  */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
