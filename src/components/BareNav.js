import React from "react";
import { NavLink } from "react-router-dom";

const BareNav = (props) => {
  return (
    <div className="BareNav">
      <div className="logo">
        <img src="./sport-see-full-LOGO.png" alt="" />
      </div>
      <div className="navige">
        <ul>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Accueil</li>
          </NavLink>
          <NavLink
            to="/Profil"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Profil</li>
          </NavLink>
          <NavLink
            to="/reglage"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Réglage</li>
          </NavLink>
          <NavLink
            to="/communaute"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Communauté</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default BareNav;
