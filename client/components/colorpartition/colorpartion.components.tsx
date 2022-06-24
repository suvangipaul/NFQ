import React from "react";
import styles from "../../styles/Home.module.css";

const Colorpartion = () => {
  return (
    <div className={styles.partion}>
      <div className={styles.redpart}></div>
      <div className={styles.yellowpart}></div>
      <div className={styles.purplepart}></div>
    </div>
  );
};

export default Colorpartion;
