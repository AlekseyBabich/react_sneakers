import React from 'react';

import styles from './CloseBtn.module.scss'

const CloseBtn = ({ close, clear }) => {
  return (
    <div className={ styles.closeBtnWrapper }>
      <img className={styles.removeBtn } src="/img/btn-remove.svg" alt="closed" onClick={ close || clear }/>
    </div>
  );
};

export default CloseBtn;