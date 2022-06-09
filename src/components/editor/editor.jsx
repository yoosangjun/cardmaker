import React from "react";
import CardAddForm from "../card_add_form/card_add_form";
import Card_edit_form from "../card_edit_form/card_edit_form";
import styles from "./editor.module.css";

const Editor = ({ cards, addCard }) => {
  return (
    <section className={styles.editor}>
      <h1 className={styles.title}>Editor</h1>
      {cards.map((card) => (
        <Card_edit_form key={card.id} card={card} />
      ))}
      <CardAddForm onAdd={addCard} />
    </section>
  );
};

export default Editor;
