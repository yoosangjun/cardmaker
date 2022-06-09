import React from "react";
import styles from "./button.module.css";

const Button = ({ name, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      Delete
    </button>
  );
};

export default Button;
