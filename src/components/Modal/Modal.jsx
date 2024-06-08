import React, { useState } from "react";
import styles from "./Modal.module.css";
import Button from '@mui/material/Button';

export default function Modal({children}) {
  const [modal, setModal] = useState(true);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modal_content}>
            {children}
            <Button variant="contained" className={styles.close_modal} onClick={toggleModal}>Cancel</Button>
          </div>
        </div>
      )}
    </>
  );
}