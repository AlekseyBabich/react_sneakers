import React, { useEffect, useState } from 'react';
import Card from "./components/Card";
import Header from "./components/Header";
import Basket from "./components/Basket";
import CloseBtn from "./components/Buttons/CloseBtn";

import axios from "axios";


function App() {

  const [ basketItems, setBasketItems ] = useState([])
  const [ items, setItems ] = useState([])
  const [ openBasket, setOpenBasket ] = useState(false)
  const [ searchValue, setSearchValue ] = useState('')

  const openBasketTab = () => {
    setOpenBasket(true)
  }
  const closeBasketTab = () => {
    setOpenBasket(false)
  }

  const onChangeSearchInput = (e) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    axios.get('https://6540801245bedb25bfc20160.mockapi.io/items')
      .then((res) => setItems(res.data))

    axios.get('https://6540801245bedb25bfc20160.mockapi.io/cartItem')
      .then((res) => setBasketItems(res.data))
  }, [])

  const onAddToBasket = (obj) => {
    axios.post('https://6540801245bedb25bfc20160.mockapi.io/cartItem', obj);
    setBasketItems((prev) => [ ...prev, obj ]
    )
  }
  const removeItemBasket = (id) => {
    axios.delete(`https://6540801245bedb25bfc20160.mockapi.io/cartItem/${id}`);
    setBasketItems((prev) => prev.filter((item) => item.id !== id))
  }

  return (
    <div className="wrapper">
      { openBasket && <Basket removeItem={removeItemBasket} basketItems={ basketItems } closeBasketTab={ closeBasketTab }/> }
      <Header openBasketTab={ openBasketTab }/>
      <div className="content">
        <div className='content-title'>
          <div>
            {
              searchValue ? <h3>Поиск по запросу: <p>{ searchValue }</p></h3> : <h1>Все кроссовки</h1>
            }
          </div>
          <div className="search-block">
            <img src="/img/search.svg" alt="search"/>
            <input onChange={ onChangeSearchInput } value={ searchValue } placeholder='Поиск по имени ...'/>
            { searchValue &&
              <div className={ "close-btn-wrapper" }>
                <CloseBtn clear={ () => setSearchValue('') }/>
              </div>
            }
          </div>
        </div>
        <div className="cards">
          { items
            .filter((item) => item.name.toLowerCase().includes(searchValue.toLowerCase()))
            .map(card => (
              <Card onAddToBasket={onAddToBasket} key={ card.id } name={ card.name } price={ card.price } src={ card.src }/>
            )) }
        </div>
      </div>
    </div>
  );
}

export default App;
