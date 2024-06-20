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

  const data = performance.data.map((item) => ({
    subject: performance.kind[item.kind],
    value: item.value,
  }));

  return (
    <div className="courbouPERFORMANCE2">
      <ResponsiveContainer width="100%" height={210}>
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
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