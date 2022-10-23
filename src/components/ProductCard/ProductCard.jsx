import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ProductCard.module.css';

const ProductCard = ({ id, productName, productDescription, productImage, price }) => {
  return (
    <article className={styles.productCardWrapper}>
      <header className={styles.productCardHeader}>
        <Link to={`/${id}/adds`}>
          <h3 className={styles.productTitle}>{productName}</h3>
        </Link>
        <div>
          <strong>{price} &euro;</strong>
        </div>
      </header>
      <figure className={styles.productDetails}>
        <img
          src={productImage}
          alt={productName}
          width="100%"
          loading="lazy"
          className={styles.productImage}
        />
        <figcaption className={styles.productDescription}>{productDescription}</figcaption>
      </figure>
    </article>
  );
};

export default ProductCard;
