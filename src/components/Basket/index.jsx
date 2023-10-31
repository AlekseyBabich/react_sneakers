import React from 'react';
import CardBasket from "./CardBasket";
import GreenBtn from "../Buttons/GreenBtn";

import styles from './Basket.module.scss'
import CloseBtn from "../Buttons/CloseBtn";


const arr = [
  {
    desc: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    url: '/img/sneakers/4.jpg'
  },
  {
    desc: 'Мужские Кроссовки Nike Air Max 270',
    price: 11999,
    url: '/img/sneakers/3.jpg'
  },
  {
    desc: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    url: '/img/sneakers/2.jpg'
  },
  {
    desc: 'Мужские Кроссовки Nike Air Max 270',
    price: 11999,
    url: '/img/sneakers/1.jpg'
  },
]

const Basket = ({ closeBasketTab }) => {
  return (
    <div className={ styles.overlay } >
      <div className={ styles.basket }>
        <h2>
          Корзина
          <CloseBtn closeBasketTab={closeBasketTab}/>
        </h2>
        <div className={styles.items}>
          { arr.map(card => (
            <CardBasket desc={ card.desc } price={ card.price } url={ card.url }/>
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