import React from 'react';

import styles from './Card.module.scss'
import CardImg from "./CardImg";
import CardFavoriteBtn from "./CardFavoriteBtn";
import CardAddBtn from "./CardAddBtn";

const Card = ({ name, price, src, onAddToBasket }) => {


  return (
    <div className={ styles.card }>
      <CardFavoriteBtn/>
      <CardImg src={ src }/>
      <h5>{ name }</h5>
      <div className={ styles.priceBox }>
        <div className={ styles.price }>
          <span>Цена:</span>
          <b>{ price } руб.</b>
        </div>
        <div className="cardImageBlock">
          <CardAddBtn name={name} price={price} src={src} onAddToBasket={onAddToBasket}/>
        </div>
      </div>
    </div>
  );
};

export default Card;