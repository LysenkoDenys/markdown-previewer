import React from "react";
import { FaFreeCodeCamp } from "react-icons/fa";
import data from "../data/data";

const Editor = () => {
  return (
    <>
      <div className="editorWrap">
        <div className="toolbar">
          <FaFreeCodeCamp className="fcc" />
          Editor
        </div>
        <textarea id="editor" defaultValue={data} />
      </div>
    </>
  );
};

export default Editor;
