import React, { useState } from 'react';

import styles from './CardAddBtn.module.scss'

const CardAddBtn = () => {
  const [ handle, setHandle ] = useState(false)

  const handleImg = () => {
    setHandle(!handle)
  }

  return (
    <button className={ styles.addButton } onClick={ handleImg }>
      {
        handle
          ? <img src="/img/btn-checked.svg" alt="plus" width={ 30 } height={ 30 } onClick={ handleImg }/>
          : <img src="/img/plus.svg" alt="plus" width={ 11 } height={ 11 } />
      }

    </button>
  )
    ;
};

export default CardAddBtn;