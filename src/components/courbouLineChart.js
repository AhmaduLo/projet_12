import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const courbouLineChart = ({ sessions }) => {
  if (!sessions) {
    return <div>Loading...</div>;
  }
  const data = sessions.map((session, index) => ({
    day: ["L", "M", "M", "J", "V", "S", "D"][index],
    sessionLength: session.sessionLength,
  }));

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div
          className="custom-tooltip"
          style={{
            backgroundColor: "#fff",
            padding: "5px",
            border: "1px solid #ccc",
          }}
        >
          <p>{`${payload[0].value} min`}</p>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="courbouLineChart">
      <h2 className="chart-title">Durée moyenne des sessions</h2>
      <ResponsiveContainer width="320%" height={150}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 20, bottom: 20 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontal={false}
          />
          <XAxis dataKey="day" tickLine={false} axisLine={false} />
          <YAxis hide={true} domain={["dataMin - 10", "dataMax + 10"]} />
          <Tooltip content={<CustomTooltip />} />
          <Line
            type="monotone"
            dataKey="sessionLength"
            stroke="#FFFFFF"
            dot={{ r: 4 }}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default courbouLineChart;
