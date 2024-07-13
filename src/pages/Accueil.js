import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BareNav from "../components/BareNav";
import NavLeft from "../components/NavLeft";
import InfoContainer from "../components/InfoContainer";
//import axios from "axios";
import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../service/mockData";

const Accueil = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    const userId = parseInt(id, 10); // Conversion de l'ID en nombre

    // Fonction asynchrone pour récupérer les données
    const fetchData = async () => {
      try {
        //pour switch API/Mock il faut le mettre a "true"
        if (process.env.REACT_APP_USE_MOCK_DATA === "true") {
          // Utilisez les données mock
          const userData = USER_MAIN_DATA.find((user) => user.id === userId);
          setUser(userData);

          const activityData = USER_ACTIVITY.find(
            (activity) => activity.userId === userId
          );
          setActivity(activityData);

          const averageSessionsData = USER_AVERAGE_SESSIONS.find(
            (sessions) => sessions.userId === userId
          );
          setAverageSessions(averageSessionsData);

          const performanceData = USER_PERFORMANCE.find(
            (performance) => performance.userId === userId
          );
          setPerformance(performanceData);
        } else {
          // Utilisez les données de l'API réelle
          const userResponse = await fetch(
            `http://localhost:3000/user/${userId}`
          );
          const userData = await userResponse.json();
          setUser(userData.data);

          const activityResponse = await fetch(
            `http://localhost:3000/user/${userId}/activity`
          );
          const activityData = await activityResponse.json();
          setActivity(activityData.data);

          const averageSessionsResponse = await fetch(
            `http://localhost:3000/user/${userId}/average-sessions`
          );
          const averageSessionsData = await averageSessionsResponse.json();
          setAverageSessions(averageSessionsData.data);

          const performanceResponse = await fetch(
            `http://localhost:3000/user/${userId}/performance`
          );
          const performanceData = await performanceResponse.json();
          setPerformance(performanceData.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]); // Dépendance sur l'ID, la fonction sera réexécutée si l'ID change
  if (!user || !activity || !averageSessions || !performance) {
    return (
      <div>
        <BareNav />
        <h3>
          {" "}
          Impossible de récupérer les données utilisateur. Veuillez réessayer
          plus tard!
        </h3>
        <NavLeft />
      </div>
    );
  }

  return (
    <div>
      <BareNav />
      <InfoContainer
        user={user}
        activity={activity}
        averageSessions={averageSessions}
        performance={performance}
      />
      <NavLeft />
    </div>
  );
};

export default Accueil;
