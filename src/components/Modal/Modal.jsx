import React from "react";
import styles from "./Modal.module.css";
export default function Modal({ children, modal }) {
  const classes = modal
    ? `${styles.modalWrap}`
    : `${styles.modalWrapDis} ${styles.modalWrap}`;
  return (
    <div className={classes}>
      <div className={styles.modalBody}>{children}</div>
    </div>
  );
}
