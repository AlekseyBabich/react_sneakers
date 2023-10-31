import React, { useState } from 'react';

import styles from './CardFavoriteBtn.module.scss'

const CardFavoriteBtn = () => {
  const [ handle, setHandle ] = useState(false)

  const handleImg = () => {
    setHandle(!handle)
  }

  return (
    <div className={ styles.favorite }>
      <img src={ handle ? "/img/heart-like.svg" : "/img/heart-unlike.svg" } alt="heart-like" width={ 32 } height={ 32 }
           onClick={ handleImg }/>
    </div>
  );
};

export default CardFavoriteBtn;