import axios from "axios";
import React, { useEffect, useState } from "react";
import Agents from "./Agents";
import Header from "./Header";

const Home = () => {
  const [agentes, setAgentes] = useState([]);

  useEffect(() => {
    const getAgents = async () => {
      await axios
        .get("https://valorant-api.com/v1/agents")
        .then((res) => {
          setAgentes(res.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    getAgents();
  }, []);

  const data = agentes;

  return (
    <div>
      <Header />
      <Agents data={data} />
    </div>
  );
};

export default Home;
