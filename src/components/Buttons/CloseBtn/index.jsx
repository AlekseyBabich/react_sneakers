import React from 'react';

import styles from './CloseBtn.module.scss'

const CloseBtn = ({ closeBasketTab }) => {
  return (
    <div className={ styles.closeBtnWrapper }>
      <img className={styles.removeBtn } src="/img/btn-remove.svg" alt="closed" onClick={ closeBasketTab }/>
    </div>
  );
};

export default CloseBtn;