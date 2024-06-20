import React from "react";
import ActifQuotidient from "../components/ActifQuotidient";
import CourbeSessions from "../components/CourbeSessions";
import CompossentOrga from "./CompossentOrga";

const InfoContainer = ({ user, activity, averageSessions, performance }) => {

  const name = user.userInfos.firstName;
  const keyData = user.keyData;
  const score = user.todayScore || user.score;

  if (!user || !user.userInfos) {
    return <div>Loading...</div>;
  }
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
              sessions={averageSessions.sessions}
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
