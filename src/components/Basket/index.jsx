import React from 'react';
import CardBasket from "./CardBasket";
import GreenBtn from "../Buttons/GreenBtn";
import CloseBtn from "../Buttons/CloseBtn";
import EmptyBasket from "./EmptyBasket";

import styles from './Basket.module.scss'


const Basket = ({ closeBasketTab, basketItems, removeItem }) => {

  const totalPrice = basketItems.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.price
  }, 0)

  const taxes = (totalPrice * 5) / 100


  return (
    <div className={ styles.overlay }>
      <div className={ styles.basket }>
        <h2>
          Корзина
          { basketItems.length > 0 ? <CloseBtn close={ closeBasketTab }/> : null }
        </h2>
        <div className={ styles.contentWrapper }>
          {
            basketItems.length > 0
              ? <div className={ styles.itemsWrapper }>
                <div className={ styles.items }>
                  { basketItems.map(card => (
                    <CardBasket key={ card.id }
                                id={ card.id }
                                name={ card.name }
                                price={ card.price }
                                src={ card.src }
                                removeItem={ removeItem }/>
                  )) }
                </div>
                <div className={ styles.cartBottomBlock }>
                  <ul>
                    <li>
                      <span>Итого:</span>
                      <div></div>
                      <b>{ totalPrice } руб.</b>
                    </li>
                    <li>
                      <span>Налог 5%:</span>
                      <div></div>
                      <b>{ taxes } руб.</b>
                    </li>
                  </ul>
                  <GreenBtn name={ 'Оформить заказ' }/>
                </div>
              </div>
              : <EmptyBasket closeBasketTab={ closeBasketTab }/>
          }
        </div>
      </div>
    </div>
  );
};

export default Basket;