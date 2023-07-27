import React from "react";
import {
  FaFreeCodeCamp,
  FaExpandArrowsAlt,
  FaCompressArrowsAlt,
} from "react-icons/fa";
import data from "../data/data";
import Button from "../UI/Button";

const Editor = () => {
  return (
    <>
      <div className="editorWrap">
        <div className="toolbar">
          <div className="nameWrapper">
            <FaFreeCodeCamp className="fcc" />
            Editor
          </div>
          <Button />
          {1 ? (
            <FaExpandArrowsAlt className="fcc2" />
          ) : (
            <FaCompressArrowsAlt className="fcc2" />
          )}
        </div>
        <textarea id="editor" defaultValue={data} onChange={() => {}} />
      </div>
      <textarea cols="30" rows="10" defaultValue={data}></textarea>
    </>
  );
};

export default Editor;
