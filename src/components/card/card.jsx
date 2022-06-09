import React from "react";
import styles from "./card.module.css";

const Card = ({ card }) => {
  const { name, company, title, theme, email, message, fileName } = card;
  const DEFAULT_IMAGE = "/images/default_logo.png";
  const url = fileName || DEFAULT_IMAGE;
  return (
    <li className={`${styles.card} ${getStyles(theme)}`}>
      <img src={url} alt="profile" className={styles.avatar} />
      <div className={styles.info}>
        <h1 className={styles.name}>{name}</h1>
        <p className={styles.company}>{company}</p>
        <p className={styles.title}>{title}</p>
        <p className={styles.email}>{email}</p>
        <p className={styles.message}>{message}</p>
      </div>
    </li>
  );
};

function getStyles(theme) {
  switch (theme) {
    case "dark":
      return styles.dark;
    case "light":
      return styles.light;
    case "colorful":
      return styles.colorful;
    default:
      throw new Error(`unknown thme: ${theme}`);
  }
}

export default Card;
