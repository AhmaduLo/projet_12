import React from "react";
import ActifQuotidient from "../components/ActifQuotidient";
import CourbeSessions from "../components/CourbeSessions";
import CompossentOrga from "./CompossentOrga";

const InfoContainer = ({ user, activity, averageSessions, performance }) => {
  const name = user.data.userInfos.firstName;
  const keyData = user.data.keyData;
  const score = user.data.todayScore || user.data.score;
  return (
    <div className="containerInfo">
      <h1>
        Bonjour <span>{name}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
      <div className="containerGraph">
        <div className="firstContenaire">
          <div className="actifQuotidient">
            <ActifQuotidient activity={activity} />
          </div>
          <div className="courbe">
            <CourbeSessions
              sessions={averageSessions.data.sessions}
              performance={performance}
              score={score}
            />
          </div>
        </div>
        <div className="secondContenaire">
          <div className="calories">
            <CompossentOrga keyData={keyData} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoContainer;
