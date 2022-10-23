import React from 'react';
import { ReactComponent as LikeSVG } from './hand-thumbs-up.svg';
import { ReactComponent as CommentSVG } from './chat-square.svg';
import { ReactComponent as ShareSVG } from './reply.svg';
import styles from './FooterWithIcons.module.css';

const FooterWithIcons = () => (
  <footer className={styles.footerWrapper}>
    <ul className={styles.iconsList}>
      <li>
        <LikeSVG />
        <span>Like</span>
      </li>
      <li>
        <CommentSVG />
        <span>Comment</span>
      </li>
      <li>
        <ShareSVG />
        <span>Share</span>
      </li>
    </ul>
  </footer>
);

export default FooterWithIcons;
