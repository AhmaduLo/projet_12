import React from "react";
import BareNav from "../components/BareNav";
import NavLeft from "../components/NavLeft";
import InfoContainer from "../components/InfoContainer";
//import TextSalutation from "../components/TextSalutation";

const Accueil = (props) => {
  return (
    <div>
      <BareNav />
      <InfoContainer/>
      <NavLeft />
    </div>
  );
};

export default Accueil;
