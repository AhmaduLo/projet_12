import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import BareNav from "../components/BareNav";
import NavLeft from "../components/NavLeft";
import InfoContainer from "../components/InfoContainer";
//import TextSalutation from "../components/TextSalutation";

const Accueil = (props) => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [activity, setActivity] = useState(null);
  const [averageSessions, setAverageSessions] = useState(null);
  const [performance, setPerformance] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userResponse = await axios.get(
          `http://localhost:3000/user/${id}`
        );
        setUser(userResponse.data);

        const activityResponse = await axios.get(
          `http://localhost:3000/user/${id}/activity`
        );
        setActivity(activityResponse.data);

        const averageSessionsResponse = await axios.get(
          `http://localhost:3000/user/${id}/average-sessions`
        );
        setAverageSessions(averageSessionsResponse.data);

        const performanceResponse = await axios.get(
          `http://localhost:3000/user/${id}/performance`
        );
        setPerformance(performanceResponse.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id]);
  if (!user || !activity || !averageSessions || !performance) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <BareNav />
      <InfoContainer user={user} activity={activity} averageSessions={averageSessions} performance={performance} />
      <NavLeft />
    </div>
  );
};

export default Accueil;
