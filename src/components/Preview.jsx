import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "https://cdn.skypack.dev/rehype-raw@6?dts";
import rehypeHighlight from "https://esm.sh/rehype-highlight@5";

import {
  FaFreeCodeCamp,
  FaExpandArrowsAlt,
  FaCompressArrowsAlt,
} from "react-icons/fa";
import styles from "./Preview.module.css";

const Preview = (props) => {
  const [clicked, setClicked] = useState(false);

  const clickIconHandler = () => setClicked(!clicked);

  return (
    <>
      <div className={styles.previewWrap}>
        <div className={styles.toolbar}>
          <div className={styles.nameWrapper}>
            <FaFreeCodeCamp className={styles.fcc} />
            Previewer
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
        <div
          id="preview"
          className={`${styles.previewArea} ${!clicked ? "" : styles.deployed}`}
        >
          <ReactMarkdown
            children={props.data}
            remarkPlugins={[remarkGfm]}
            escapeHtml={false}
            allowDangerousHtml={true}
            rehypePlugins={[rehypeRaw, rehypeHighlight]}
          />
        </div>
      </div>
    </>
  );
};

export default Preview;
