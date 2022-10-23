import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useProductContext, useAddsContext } from 'context';
import ProductOverview from 'components/ProductOverview/ProductOverview';
import AddCard from 'components/AddCard/AddCard';
import styles from './AddsPage.module.css';

const AddsPage = () => {
  const { productId } = useParams();

  const { products } = useProductContext();

  const { adds } = useAddsContext();

  const product = products.find(({ id }) => id === parseInt(productId));

  const addsForProduct = adds[productId];

  return (
    <main>
      <ProductOverview {...product} />
      {addsForProduct && addsForProduct.length ? (
        <ul className={styles.addsList}>
          {addsForProduct.map((add) => (
            <li key={add.id}>
              <Link to={`/${productId}/adds/${add.id}`}>
                <AddCard {...add} />
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <div className={styles.noAddsInfo}>
          <p>No adds for this product. Start adding something...</p>
        </div>
      )}
    </main>
  );
};

export default AddsPage;
