import React, { useId } from 'react';
import { Link } from 'react-router-dom';
import { Divider, Button } from 'ui';
import { useParams } from 'react-router-dom';
import { useAddsContext } from 'context';
import styles from './ProductOverview.module.css';

const ProductOverview = ({ productName, productDescription, price, productImage, id }) => {
  const addNewId = useId();
  const { productId } = useParams();
  const { addNewAdd } = useAddsContext();

  const onNewAddAdded = () => {
    const newAddToCreate = {
      productId: parseInt(productId),
      callToActionText: 'Add your CTA here',
      description: 'Add description here',
      buttonText: 'Buy now',
      addImageSrc: '/default.png',
      id: addNewId,
    };

    addNewAdd(newAddToCreate);
  };
  return (
    <article className={styles.productOverviewWrapper}>
      <div className={styles.productOverview}>
        <div className={styles.productDetails}>
          <div className={styles.productTitle}>
            <h3>{productName}</h3>
            <Divider />
            <strong>{price} &euro;</strong>
          </div>
          <Link to={`/${id}/adds/${addNewId}`}>
            <Button onClick={onNewAddAdded}>Create new add</Button>
          </Link>
        </div>
        <p className={styles.productDescription}>{productDescription}</p>
      </div>
      <div className={styles.productImage}>
        <img src={productImage} alt={productName} loading="laizy" />
      </div>
    </article>
  );
};

export default ProductOverview;
