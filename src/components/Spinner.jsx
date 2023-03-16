import React from "react";
import styles from "../modules/Spinner.module.css"

function Spinner() {
  return (
    <div className={styles.container}>
      <span className={styles.loader}></span>
    </div>
  );
}

export default Spinner;
