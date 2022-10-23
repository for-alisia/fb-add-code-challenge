import React from 'react';
import { ReactComponent as MenuSVG } from './three-dots.svg';
import { ReactComponent as GlobeSVG } from './globe.svg';
import { COMPANY_URL } from 'utils/constants';
import styles from './HeaderWithLogo.module.css';

const HeaderWithLogo = () => (
  <header className={styles.headerWrapper}>
    <div className={styles.logo}>
      <img src="/logo.png" alt="Max's Sporting Goods" />
    </div>
    <div className={styles.companyDetails}>
      <strong>{COMPANY_URL}</strong>
      <div className={styles.sponsoredText}>
        <span>Sponsored · </span>
        <GlobeSVG />
      </div>
    </div>
    <div>
      <MenuSVG />
    </div>
  </header>
);

export default HeaderWithLogo;
