import React from "react";
import CourbouLineChart from "./courbeLineChart";
import CourbouPERFORMANCE from "./courbePerformance";
import Objectif from "./objectif";

const courbeSessions = ({ sessions, performance, score}) => {

  return (
    <div className="courbeSessions1">
      <div className="courbouLineChart">
        <CourbouLineChart sessions={sessions} />
      </div>
      <div className="courbouPERFORMANCE">
        <CourbouPERFORMANCE performance={performance} />
      </div>
      <div className="objectif">
        <Objectif  score={score}/>
      </div>
    </div>
  ); 
};

export default courbeSessions;
