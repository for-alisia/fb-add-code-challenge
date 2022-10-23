import React from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useAddsContext, useNotificationContext } from 'context';
import withConfirmationPopup from 'HOC/withConfirmationPopup/withConfirmationPopup';
import { Button } from 'ui';
import AddCard from 'components/AddCard/AddCard';
import styles from './EditPage.module.css';

const DeleteAdd = ({ onShowPopup }) => (
  <Button color="danger" onClick={onShowPopup}>
    Delete this add
  </Button>
);

const DeleteAddWithPopup = withConfirmationPopup(DeleteAdd);

const EditAddPage = () => {
  const { productId, addId } = useParams();
  const navigate = useNavigate();
  const { adds, updateAdd, deleteAdd } = useAddsContext();
  const { addNotification } = useNotificationContext();

  const addById = adds[productId].find(({ id }) => id === addId);

  const fileUploadHandler = (event) => {
    const imageLink = window.URL.createObjectURL(event.target.files[0]);

    updateAdd({ addId, productId, update: imageLink, field: 'addImageSrc' });
  };

  const fieldUpdateHandler = (field) => (value) => {
    updateAdd({ addId, productId, update: value, field });
  };

  const deleteAddHandler = () => {
    navigate(`/${productId}/adds`, { replace: true });
    deleteAdd({ productId, addId });
    addNotification({ type: 'success', message: 'Add was deleted' });
  };

  return (
    <div>
      <header className={styles.editAddHeader}>
        <DeleteAddWithPopup
          onConfirm={deleteAddHandler}
          confirmationText="Do you want to delete this add?"
        />
        <Link to={`/${productId}/adds`}>
          <Button>Back to other adds</Button>
        </Link>
      </header>
      <AddCard
        {...addById}
        onFileUpload={fileUploadHandler}
        isEditMode
        onFieldUpdated={fieldUpdateHandler}
      />
    </div>
  );
};

export default EditAddPage;
