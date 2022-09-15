import axios from "axios";
import React, { useEffect, useState } from "react";
import CardWeapon from "./CardWeapon";
import Header from "./Header";
import styles from "../Styles/Weapons.module.css";

const Weapons = () => {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    const getWeapons = async () => {
      await axios("https://valorant-api.com/v1/weapons").then((res) => {
        setWeapons(res.data.data);
      });
    };

    getWeapons();
  }, []);

  return (
    <div>
      <Header />

      <div className={styles.containerWeapons}>
        {weapons.map((we, i) => (
          <CardWeapon key={i} data={we} />
        ))}
      </div>
    </div>
  );
};

export default Weapons;
