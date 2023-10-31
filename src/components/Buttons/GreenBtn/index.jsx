import React from 'react';

import styles from './GreenBtn.module.scss'

const GreenBtn = ({ name }) => {
  return (
    <div>
      <button className={styles.greenButton}>
        <p>{name}</p>
        <img src="/img/arrow.svg" alt="arrow" width={ 13 } height={ 12 }/>
      </button>
    </div>
  );
};

export default GreenBtn;