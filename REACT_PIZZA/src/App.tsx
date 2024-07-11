import React from "react";
import './scss/app.scss'
import Header from "./components/Header";
import Categories from "./components/Categories";
import Sort from "./components/Sort";
import PizzaItem from "./components/Pizza_item";


const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">

          <div className="content__top">
            <Categories />
            <Sort />
          </div>

          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            <PizzaItem 
            title='dffdfds'
            price={500}
          
            />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
            <PizzaItem />
          </div>

        </div>
      </div>
    </div>
  );
};

export default App;