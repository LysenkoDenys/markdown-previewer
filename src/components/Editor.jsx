import React, { useState } from "react";
import {
  FaFreeCodeCamp,
  FaExpandArrowsAlt,
  FaCompressArrowsAlt,
} from "react-icons/fa";
import data from "../data/data";
import styles from "./Editor.module.css";
import Preview from "./Preview";

const Editor = () => {
  const [clicked, setClicked] = useState(false);
  const [dataContent, setDataContent] = useState(data);

  const clickIconHandler = () => setClicked(!clicked);

  const handleChange = (event) => {
    setDataContent(event.target.value);
  };

  return (
    <>
      <div className={styles.editorWrap}>
        <div className={styles.toolbar}>
          <div className={styles.nameWrapper}>
            <FaFreeCodeCamp className={styles.fcc} />
            Editor
          </div>
          {clicked ? (
            <FaCompressArrowsAlt
              className={styles.fcc2}
              onClick={clickIconHandler}
            />
          ) : (
            <FaExpandArrowsAlt
              className={styles.fcc2}
              onClick={clickIconHandler}
            />
          )}
        </div>
        <textarea
          className={`${styles.textarea} ${!clicked ? "" : styles.deployed}`}
          id="editor"
          // defaultValue={dataContent ? dataContent : ""}
          placeholder={dataContent}
          onChange={handleChange}
        />
      </div>
      <Preview data={dataContent} />
    </>
  );
};

export default Editor;
