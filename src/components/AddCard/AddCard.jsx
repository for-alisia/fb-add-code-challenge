import React from 'react';
import { COMPANY_URL } from 'utils/constants';
import { HeaderWithLogo, FooterWithIcons, FileUpload, Input } from 'ui';
import styles from './AddCard.module.css';

const AddCard = ({
  callToActionText,
  addImageSrc,
  description,
  buttonText,
  onFileUpload,
  isEditMode,
  onFieldUpdated,
}) => {
  return (
    <article className={`${styles.cardWrapper} ${!isEditMode ? styles.wrapperShadow : ''}`}>
      <HeaderWithLogo />
      <main>
        {isEditMode ? (
          <Input currentValue={callToActionText} updateValue={onFieldUpdated('callToActionText')} />
        ) : (
          <p className={styles.ctaText}>{callToActionText}</p>
        )}
        <figure className={styles.mainBlock}>
          <div className={styles.imageWrapper}>
            {isEditMode && <FileUpload onFileUpload={onFileUpload} />}
            <img src={addImageSrc} alt={callToActionText} />
          </div>
          <figcaption className={styles.addDetails}>
            <div className={styles.addDetailsText}>
              <p className={styles.companyUrl}>{COMPANY_URL.toUpperCase()}</p>
              {isEditMode ? (
                <Input
                  currentValue={callToActionText}
                  updateValue={onFieldUpdated('callToActionText')}
                  className={styles.noMarginInput}
                />
              ) : (
                <p className={styles.ctaMain}>{callToActionText}</p>
              )}
              {isEditMode ? (
                <Input
                  currentValue={description}
                  updateValue={onFieldUpdated('description')}
                  className={styles.noMarginInput}
                />
              ) : (
                <p className={styles.ctaDescription}>{description}</p>
              )}
            </div>
            <div>
              <button className={styles.actionBtn}>{buttonText}</button>
            </div>
          </figcaption>
        </figure>
        <FooterWithIcons />
      </main>
    </article>
  );
};

export default AddCard;
