import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const objectif = ({ score }) => {
  // Les données pour le graphique en camembert
  const data = [
    { name: "Achieved", value: score }, // Partie du score atteint
    { name: "Remaining", value: 1 - score }, // Partie restante pour atteindre l'objectif
  ];
  // Les couleurs utilisées pour chaque partie du graphique
  const COLORS = ["#FF0000", "#F0F0F0"];

  return (
    <div className="objectif1">
      <h2 className="chart-title">Score</h2>
      <ResponsiveContainer width="100%" height={200}>
        <PieChart>
          <Pie
            data={data} // Données pour le camembert
            startAngle={180} // Angle de départ du camembert (demi-cercle)
            endAngle={0} // Angle de fin du camembert
            innerRadius="70%" // Rayon intérieur (pour créer un anneau)
            outerRadius="80%" // Rayon extérieur du camembert
            dataKey="value" // Clé des données utilisée pour déterminer les valeurs
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div className="objectif-text">
        <p>{`${score * 100}%`}</p>
        {/* Affichage du pourcentage du score */}
        <span>de votre objectif</span>
      </div>
    </div>
  );
};

export default objectif;
