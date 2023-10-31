import React from 'react';
import Logo from "./Logo";

import styles from './Header.module.scss'
import HeaderMenu from "./HeaderMenu";

const Header = ({ openBasketTab }) => {
  return (
    <header>
      <div className={ styles.headerLeft }>
        <Logo/>
      </div>

      <ul className={ styles.headerRight }>
        <HeaderMenu openBasketTab={ openBasketTab }/>
      </ul>

    </header>
  );
};

export default Header;