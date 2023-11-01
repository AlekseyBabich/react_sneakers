import React from 'react';

import styles from './emptyBasket.module.scss'
import GreenBtn from "../../Buttons/GreenBtn";

const EmptyBasket = ({ closeBasketTab }) => {
  return (
    <div className={styles.emptyWrapper}>
      <img src="/img/empty-basket.svg" width={120} height={120} alt=""/>
      <h2>Корзина пустая</h2>
      <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
      <GreenBtn name={'Вернуться назад'} onClickBtn={closeBasketTab}/>
    </div>
  );
};

export default EmptyBasket;