import React, { useState } from 'react';

import styles from './HeaderMenu.module.scss'

const HeaderMenu = ({ openBasketTab }) => {

  return (
    <div className={ styles.menuWrapper }>
      <li  onClick={ openBasketTab }>
        <img src='/img/basket.svg' width={ 18 } height={ 18 } alt='basket'/>
        <span>1209 руб.</span>
      </li>
      <li>
        <img src='/img/favorites.svg' width={ 18 } height={ 18 } alt='logo'/>
        <span>Избранное</span>
      </li>
      <li>
        <img src='/img/profile.svg' width={ 18 } height={ 18 } alt='logo'/>
        <span>Профиль</span>
      </li>

    </div>
  );
};

export default HeaderMenu;