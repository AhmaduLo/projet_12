import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from "recharts";

const CourbouPERFORMANCE = ({ performance }) => {
  if (!performance || !performance.data || !performance.kind) {
    return <div>Loading...</div>;
  }

   // Traduction des labels en français
   const kindTranslation = {
    cardio: "Cardio",
    energy: "Énergie",
    endurance: "Endurance",
    strength: "Force",
    speed: "Vitesse",
    intensity: "Intensité",
  };

  const data = performance.data.map((item) => ({
    subject:kindTranslation[performance.kind[item.kind]],
    value: item.value,
  }));
  return (
    <div className="courbouPERFORMANCE2">
      <ResponsiveContainer width="100%" height={250}>
        <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
          <PolarGrid gridType="polygon" radialLines={false}/>
          <PolarAngleAxis dataKey="subject" tick={{ fill: '#FFFFFF', fontSize: 11, dy: 1, dx: 1 }}/>
          <Radar
            name="Performance"
            dataKey="value"
            stroke="#FF0101"
            fill="#FF0101"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CourbouPERFORMANCE;
