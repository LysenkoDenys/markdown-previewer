import React from "react";
import styles from "./Button.module.css";
import data from "../data/data";

const Button = () => {
  return (
    <div
      className={styles.button}
      onClick={() => {
        console.log("let us make it empty"); //
      }}
    >
      clear
    </div>
  );
};

export default Button;
