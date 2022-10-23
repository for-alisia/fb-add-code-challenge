import React from 'react';
import { useProductContext } from 'context';
import ProductCard from 'components/ProductCard/ProductCard';
import styles from './ProductPage.module.css';

const ProductsPage = () => {
  const { products } = useProductContext();

  return (
    <main>
      <header>
        <h2 className={styles.productHeader}>All Products</h2>
      </header>
      <article>
        <ul className={styles.productList}>
          {products.map((product) => (
            <li key={product.id} className={styles.productItem}>
              <ProductCard {...product} />
            </li>
          ))}
        </ul>
      </article>
    </main>
  );
};

export default ProductsPage;
