import React from 'react';
import { createPortal } from 'react-dom';
import Button from 'ui/Button/Button';
import styles from './Popup.module.css';

const Popup = ({ isVisible, onConfirm, onCancel, children }) => {
  return createPortal(
    <>
      {isVisible && (
        <div className={styles.popupWrapper}>
          <section role="dialog" className={styles.popupContent}>
            <header className={styles.popupTitle}>
              <h5>Please confirm your action</h5>
            </header>
            <div className={styles.popupText}>{children}</div>
            <footer className={styles.popupFooter}>
              <Button onClick={onCancel}>Cancel</Button>
              <Button color="confirm" onClick={onConfirm}>
                Confirm
              </Button>
            </footer>
          </section>
        </div>
      )}
    </>,
    document.getElementById('modals')
  );
};

export default Popup;
