import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const objectif = ({ score }) => {
  // Les données pour le graphique en camembert
  const data = [
    { name: "Achieved", value: score }, // Partie du score atteint
    { name: "Remaining", value: 1 - score }, // Partie restante pour atteindre l'objectif
  ];
  // Les couleurs utilisées pour chaque partie du graphique
  const COLORS = ["#FF0000", "#ebeaea26"];

  return (
    <div
      className="objectif1"
      style={{ position: "relative", width: "100%", height: "250px" }}
    >
      <h2 className="chart-title">Score</h2>
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -20%)",
          width: "100%",
          height: "80%",
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data} // Données pour le camembert
              startAngle={180} // Angle de départ du camembert (demi-cercle)
              endAngle={-280} // Angle de fin du camembert
              innerRadius="80%" // Rayon intérieur (pour créer un anneau)
              outerRadius="90%" // Rayon extérieur du camembert
              dataKey="value" // Clé des données utilisée pour déterminer les valeurs
              cornerRadius={10} // Rayon des coins des cellules
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div
        className="objectif-text"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          textAlign: "center",
        }}
      >
        <p style={{ margin: 0, fontSize: "25px", fontWeight: "bold" }}>{`${
          score * 100
        }%`}</p>
        {/* Affichage du pourcentage du score */}
        <span style={{ fontSize: "15px", color: "#74798C" }}>
          de votre objectif
        </span>
      </div>
    </div>
  );
};

export default objectif;
