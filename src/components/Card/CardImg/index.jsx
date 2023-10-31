import React from 'react';

import styles from './CardImg.module.scss'

const CardImg = ({ src, alt }) => {
  return (
    <div>
      <img className={ styles.cardImage } src={ src } width={ 133 } height={ 112 } alt={ alt || '4' }/>
    </div>
  );
};

export default CardImg;