import React, { useRef } from 'react';
import { ReactComponent as PlusSVG } from './plus-circle.svg';
import styles from './FileUpload.module.css';

const FileUpload = ({ onFileUpload }) => {
  const inputRef = useRef(null);

  const fileUploadHandler = () => {
    inputRef.current.click();
  };

  return (
    <>
      <input
        type="file"
        className={styles.input}
        ref={inputRef}
        onChange={onFileUpload}
        accept="image/png, image/jpeg, image/jpg, image/gif"
      />
      <button onClick={fileUploadHandler} className={styles.uploadBtn}>
        <PlusSVG />
      </button>
    </>
  );
};

export default FileUpload;
