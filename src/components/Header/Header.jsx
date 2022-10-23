import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as HomeSVG } from './house-fill.svg';
import styles from './Header.module.css';

const Header = () => (
  <header className={styles.headerWrapper}>
    <nav>
      <Link to="/">
        <div className={styles.homeLink}>
          <HomeSVG />
        </div>
      </Link>
    </nav>
    <h1 className={styles.companyName}>Max's Sporting Goods</h1>
    <div className={styles.companyDetails}>
      <img src="/logo.png" alt="Max's Sporting Goods" />
    </div>
  </header>
);

export default Header;
