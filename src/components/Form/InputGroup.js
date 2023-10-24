import styles from "./InputGroup.module.css";

function InputGroup({ id1, id2, text1, text2, inputDetails, formError }) {
  return (
    <div className={styles["input-group"]}>
      <p>
        <label htmlFor={id1}>{text1}</label>
        <input
          type="number"
          id={id1}
          className={
            formError[`${id1}-error`]
              ? styles["input-error"]
              : styles["input-class"]
          }
          onChange={inputDetails}
        />
        {formError[`${id1}-error`] && (
          <p className={styles.error}>You shouldn't leave this empty</p>
        )}
      </p>
      <p>
        <label htmlFor={id2}>{text2}</label>
        <input
          type="number"
          id={id2}
          className={
            formError[`${id2}-error`]
              ? styles["input-error"]
              : styles["input-class"]
          }
          onChange={inputDetails}
        />
        {formError[`${id2}-error`] && (
          <p className={styles.error}>You shouldn't leave this empty</p>
        )}
      </p>
    </div>
  );
}

export default InputGroup;
