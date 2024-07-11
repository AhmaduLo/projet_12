import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const actifQuotidient = ({ activity }) => {
  if (!activity) {
    return <div>Impossible de récupérer les données utilisateur. Veuillez réessayer plus tard</div>;
  }
  // Transformation des données d'activité pour les rendre compatibles avec le graphique
  const data = activity.sessions.map((session, index) => ({
    day: index + 1,
    kilogram: session.kilogram, // Poids en kilogrammes
    calories: session.calories, // Calories brûlées
  }));
  // Composant personnalisé pour l'affichage des infobulles
  const CustomTooltip = ({ active, payload }) => {
    // Vérifie si l'infobulle est active et contient des données
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#fd0000",
            padding: "5px",
            border: "1px solid #cccccc",
            color: "white",
            width: "40px",
            fontSize: "12px",
          }}
        >
          <p>{`${payload[0].value}kg`}</p>
          <p>{`${payload[1].value}KCal`}</p>
        </div>
      );
    }

    return null;
  };
  // Composant personnalisé pour la légende
  const renderColorfulLegendText = (value, entry) => {
    return <span style={{ color: "#00000096" }}>{value}</span>;
  };
  return (
    <div className="actifQuotidient2">
      <div className="graph">
        <h2 className="chart-title">Activité quotidienne</h2>
        <ResponsiveContainer width="100%" height={270}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid
              strokeDasharray="1 2"
              horizontal={true}
              vertical={false}
            />
            <XAxis dataKey="day" tickLine={false} axisLine={false} />
            <YAxis
              yAxisId="right"
              orientation="right"
              domain={[0, "dataMax + 1"]}
              tick={{ fontSize: 15, fill: "#949494" }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              yAxisId="left"
              orientation="left"
              stroke="#ff0000"
              hide={true} // Cache l'axe Y pour les calories
              domain={[0, "dataMax + 50"]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              verticalAlign="top"
              align="right"
              height={80}
              iconType="circle"
              iconSize={10} 
              wrapperStyle={{ fontSize: "12px" }}
              formatter={renderColorfulLegendText}
            />
            <Bar
              yAxisId="right"
              dataKey="kilogram"
              name="Poids (kg)"
              fill="#000000"
              barSize={10}
              radius={[10, 10, 0, 0]}
            />
            <Bar
              yAxisId="left"
              dataKey="calories"
              name="Calories brûlées (KCal)"
              fill="#ff0000"
              barSize={10}
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default actifQuotidient;
