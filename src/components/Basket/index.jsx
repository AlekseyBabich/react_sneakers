import React from 'react';
import CardBasket from "./CardBasket";
import GreenBtn from "../Buttons/GreenBtn";
import CloseBtn from "../Buttons/CloseBtn";

import styles from './Basket.module.scss'
import EmptyBasket from "./EmptyBasket";


const Basket = ({ closeBasketTab, basketItems, removeItem }) => {

  return (
    <div className={ styles.overlay }>
      <div className={ styles.basket }>
        <h2>
          Корзина
          { basketItems.length > 0 ? <CloseBtn close={ closeBasketTab }/> : null }
        </h2>
        <div className={ styles.contentWrapper }>
          { basketItems.length > 0
            ? <div className={styles.itemsWrapper}>
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
                    <b>21498 руб.</b>
                  </li>
                  <li>
                    <span>Налог 5%:</span>
                    <div></div>
                    <b>1074 руб.</b>
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