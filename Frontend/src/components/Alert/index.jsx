import React from "react";
import styles from "./alert.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleExclamation } from "@fortawesome/free-solid-svg-icons";

const Alert = ({ handleAccept, handleCancel }) => {

  return (
    <section className={styles.alert_container}>
      <div className={styles.alert_box}>
        <section>
          <FontAwesomeIcon icon={faCircleExclamation} color="black" size="2x"/>
          <h2>Are you sure?</h2>
          <p>You won't be able to revert this</p>
        </section>
        <div className={styles.button_row}>
          <button className={styles.button} onClick={handleCancel}>
            Cancel
          </button>
          <button onClick={handleAccept} className={styles.button} style={{ backgroundColor: "var(--main-color)", color: "white"}}>
            Yes
          </button>
        </div>
      </div>
    </section>
  )
}

export default Alert