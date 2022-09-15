import React from "react";
import styles from "../Styles/Weapons.module.css";

const CardWeapon = (props) => {
  const data = props.data;

  return (
    <div className={styles.containerCard}>
      <div className={styles.containerCard}>
        <img className={styles.imgCard} src={data.displayIcon} alt="weapon" />
        <h1>{data.displayName}</h1>
      </div>
    </div>
  );
};

export default CardWeapon;
