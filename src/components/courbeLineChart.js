import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const CourbeLineChart = ({ sessions }) => {
  const [hoveredPosition, setHoveredPosition] = useState(null);

  if (!sessions) {
    return <div>Impossible de récupérer les données utilisateur. Veuillez réessayer plus tard</div>;
  }

  // Transformation de l'index en jour de la semaine
  const data = sessions.map((session, index) => ({
    day: ["L", "M", "M", "J", "V", "S", "D"][index],
    sessionLength: session.sessionLength,
  }));

  // Définition d'un tooltip personnalisé pour afficher les données au survol
  const CustomTooltip = ({ active, payload, label, coordinate }) => {
    if (active && payload && payload.length) {
      setHoveredPosition(coordinate);
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#fff",
            padding: "5px",
            width:"35px",
            height:"20px",
            fontSize:"10px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            border: "1px solid #ccc",
            position: "relative",
            zIndex: 1,
          }}
        >
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }
    setHoveredPosition(null);
    return null;
  };

  return (
    <div className="courbouLineChart1" style={{ position: "relative" }}>
      <h2 className="chart-title">Durée moyenne des sessions</h2>
      {hoveredPosition && (
        <div
          style={{
            position: "absolute",
            width: "550px",
            height: "2550px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
            top: `${hoveredPosition.y - 575}px`,
            left: `${hoveredPosition.x}px`,
            pointerEvents: "none", // Ensure it doesn't block interactions
            zIndex: 0,
          }}
        />
      )}
      <ResponsiveContainer width="100%" height={250}>
        <LineChart
          data={data}
          margin={{ top: 70, right: 15, left: 1, bottom: 0 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.2)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 1)" />
            </linearGradient>
          </defs>
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontal={false}
          />
          <XAxis
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ fill: "#ffffff89", fontSize: 12 }}
            interval={0}
            padding={{ left: 5, right: -12 }}
          />
          <YAxis hide={true} domain={["dataMin - 10", "dataMax + 10"]} />
          <Tooltip content={<CustomTooltip />} cursor={false} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="url(#lineGradient)"
            strokeWidth={2}
            dot={{ r: 0 }}
            activeDot={{
              r: 8,
              fill: "#ffffff",
              stroke: "#FFFFFF",
              strokeWidth: 2,
            }}
            connectNulls
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CourbeLineChart;