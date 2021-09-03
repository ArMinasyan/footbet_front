// hooks
import { useEffect } from "react";
import { useState } from "react";
// styles
import styles from "./FileInput.module.scss";
// icons
import plusIcon from "/public/images/register/plus.svg";

export function FileInput({ id, type, other }) {
  const // for img input
    [imgInput, setImgInput] = useState("");

  return (
    <div className={styles.uploadImageConteiner}>
      <label htmlFor={id}>
        <div className={styles.uploadImageContent}>
          {imgInput ? (
            <img
              className={styles["image-preview"]}
              src={URL.createObjectURL(imgInput)}
              alt=""
            />
          ) : (
            <img src={plusIcon.src} />
          )}
          <input
            type={type}
            id={id}
            style={{ display: "none" }}
            onInput={(e) => setImgInput(e.target.files[0])}
            {...other}
          />
        </div>
      </label>
    </div>
  );
}
