import React, { useState } from 'react';

import styles from './CardAddBtn.module.scss'

const CardAddBtn = ({ onAddToBasket, name, price, src }) => {
  const [ handle, setHandle ] = useState(false)

  const addBasket = () => {
    setHandle(true)
    !handle && onAddToBasket({ name, price, src })
  }

  return (
    <button className={ styles.addButton } onClick={ addBasket }>
      {
        handle
          ? <img src="/img/btn-checked.svg" alt="plus" width={ 30 } height={ 30 }/>
          : <img src="/img/plus.svg" alt="plus" width={ 11 } height={ 11 }/>
      }

    </button>
  )
    ;
};

export default CardAddBtn;