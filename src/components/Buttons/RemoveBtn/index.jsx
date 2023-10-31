import React from 'react';

import styles from './RemoveBtn.module.scss'

const RemoveBtn = ({ removeItem, id }) => {
  return (
    <div className={ styles.removeBtnWrapper } onClick={ () => removeItem(id) }>
      <img className={ styles.removeBtn } src="/img/btn-remove.svg" alt="remvoe"/>
    </div>
  );
};

export default RemoveBtn;