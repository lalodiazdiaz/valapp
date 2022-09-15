import React from "react";
import styles from "../Styles/Maps.module.css";

const CardMap = (props) => {
  const data = props.data;

  return (
    <div className={styles.containerCard}>
      <div className={styles.containerCard}>
        <img className={styles.imgCard} src={data.splash} alt="Maps" />
        <h1>{data.displayName}</h1>
      </div>
    </div>
  );
};

export default CardMap;
