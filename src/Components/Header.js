import React from "react";
import styles from "../Styles/Header.module.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className={styles.containerHeader}>
      <img
        className={styles.logo}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Valorant_logo.svg/2560px-Valorant_logo.svg.png"
        alt="Logo"
      />

      <div className={styles.navContainer}>
        <h3 className={styles.navButton}>
          <Link to={"/"}>Agents</Link>
        </h3>
        <h3 className={styles.navButton}>
          <Link to={"/Weapons"}>Weapons</Link>
        </h3>
        <h3 className={styles.navButton}>
          <Link to={"/Maps"}>Maps</Link>
        </h3>
      </div>
    </div>
  );
};

export default Header;
