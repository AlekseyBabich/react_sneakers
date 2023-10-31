import React, { useState } from 'react';
import Card from "./components/Card";
import Header from "./components/Header";
import Basket from "./components/Basket";

import mockData from '../src/mockData.json'


function App() {
  const [openBasket, setOpenBasket] = useState(false)

  const openBasketTab = () => {
    setOpenBasket(true)
  }
  const closeBasketTab = () => {
    setOpenBasket(false)
  }

  return (
    <div className="wrapper">
      { openBasket && <Basket closeBasketTab={closeBasketTab}/> }
      <Header openBasketTab={openBasketTab}/>
      <div className="content">
        <div className='content-title'>
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search.svg" alt="search"/>
            <input placeholder='Поиск ...'/>
          </div>
        </div>
        <div className="cards">
          { mockData.map(card => (
            <Card name={ card.name } price={ card.price } src={ card.src }/>
          )) }
        </div>
      </div>
    </div>
  );
}

export default App;
