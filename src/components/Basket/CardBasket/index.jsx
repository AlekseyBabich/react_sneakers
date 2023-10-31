import React from 'react';
import RemoveBtn from "../../Buttons/RemoveBtn";

import styles from './CardBasket.module.scss'

const CardBasket = ({ desc, price, url }) => {
  return (
    <div className={ styles.cartItem }>
      <img style={ { marginTop: '-20px' } } src={ url } alt="4" width={ 70 } height={ 70 }/>
      <div className={ styles.cartText }>
        <p>{ desc }</p>
        <b>{ price } руб.</b>
      </div>
     <RemoveBtn/>
    </div>
  );
};

export default CardBasket;