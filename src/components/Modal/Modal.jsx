import styles from "./Modal.module.css";
import Button from '@mui/material/Button';

export default function Modal({children, btnHandler}) {

  return (
    
      <div className={styles.modal}>
          <div onClick={btnHandler} className={styles.overlay}></div>
          <div className={styles.modal_content}>
            {children}
            <Button variant="contained" className={styles.close_modal} onClick={btnHandler}>Cancel</Button>
          </div>
        </div>
  );
}