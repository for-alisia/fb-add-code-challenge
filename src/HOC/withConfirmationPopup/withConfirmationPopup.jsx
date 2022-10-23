import React, { useState } from 'react';
import { Popup } from 'ui';

const withConfirmationPopup =
  (WrappedComponent) =>
  ({ onConfirm, confirmationText, ...props }) => {
    const [isVisible, setIsVisible] = useState(false);

    const confirmHandler = () => {
      setIsVisible(false);
      console.log(props);
      onConfirm();
    };

    const cancelHandler = () => {
      setIsVisible(false);
    };

    const openHandler = () => {
      setIsVisible(true);
    };

    return (
      <>
        <WrappedComponent {...props} onShowPopup={openHandler} />
        <Popup onConfirm={confirmHandler} onCancel={cancelHandler} isVisible={isVisible}>
          {confirmationText}
        </Popup>
      </>
    );
  };

export default withConfirmationPopup;
