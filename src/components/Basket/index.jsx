import React, { useEffect, useState } from 'react';
import CardBasket from "./CardBasket";
import GreenBtn from "../Buttons/GreenBtn";

import styles from './Basket.module.scss'
import CloseBtn from "../Buttons/CloseBtn";


const Basket = ({ closeBasketTab, basketItems, removeItem }) => {



  return (
    <div className={ styles.overlay } >
      <div className={ styles.basket }>
        <h2>
          Корзина
          <CloseBtn close={closeBasketTab}/>
        </h2>
        <div className={styles.items}>
          { basketItems.map(card => (
            <CardBasket key={card.id} id={card.id} name={ card.name } price={ card.price } src={ card.src } removeItem={removeItem}/>
          )) }
        </div>

        <div className={ styles.cartBottomBlock }>
          <ul>
            <li>
              <span>Итого:</span>
              <div></div>
              <b>21498 руб.</b>
            </li>
            <li>
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>

          <GreenBtn name={'Оформить заказ'}/>

        </div>
      </div>
    </div>
  );
};

export default Basket;