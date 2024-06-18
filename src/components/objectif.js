import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const objectif = ({ score }) => {
    const data = [
        { name: 'Achieved', value: score },
        { name: 'Remaining', value: 1 - score },
    ];

    const COLORS = ['#FF0000', '#F0F0F0'];

  return <div className="objectif1">
     <h2 className="chart-title">Score</h2>
            <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                    <Pie
                        data={data}
                        startAngle={180}
                        endAngle={0}
                        innerRadius="70%"
                        outerRadius="80%"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                </PieChart>
            </ResponsiveContainer>
            <div className="objectif-text">
                <p>{`${score * 100}%`}</p>
                <span>de votre objectif</span>
            </div>
  </div>;
};

export default objectif;
