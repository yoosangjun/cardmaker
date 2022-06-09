import React from "react";
import Card_edit_form from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ cards }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Editor</h1>
      {cards.map((card) => (
        <Card_edit_form card={card} />
      ))}
    </section>
  );
};

export default Editor;
