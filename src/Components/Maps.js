import axios from "axios";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import styles from "../Styles/Maps.module.css";
import CardMap from "./CardMap";

const Maps = () => {
  const [maps, setMaps] = useState([]);

  useEffect(() => {
    const gerMaps = async () => {
      await axios("https://valorant-api.com/v1/maps").then((res) => {
        setMaps(res.data.data);
      });
    };

    gerMaps();
  }, []);

  return (
    <div>
      <Header />

      <div className={styles.containerMap}>
        {maps.map((we, i) => (
          <CardMap key={i} data={we} />
        ))}
      </div>
    </div>
  );
};

export default Maps;
