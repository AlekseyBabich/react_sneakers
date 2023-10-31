import React from 'react';

import styles from './RemoveBtn.module.scss'

const RemoveBtn = () => {
  return (
    <div className={styles.removeBtnWrapper}>
      <img className={ styles.removeBtn } src="/img/btn-remove.svg" alt="remvoe"/>
    </div>
  );
};

export default RemoveBtn;