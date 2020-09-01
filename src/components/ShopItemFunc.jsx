import React from 'react';
import "../css/main.css";
import PropTypes from "prop-types";
import ItemModel from '../models/ItemModel.js';

const ShopItemFunc = (props) => {

  const {item} = props;

  return (
    <>
      <div class="main-content">
        <h2>{item.brand}</h2>
        <h1>{item.title}</h1>
        <h3>{item.description}</h3>
        <div class="description">{item.descriptionFull}</div>
        <div class="highlight-window mobile">
          <div class="highlight-overlay"></div>
        </div>
        <div class="divider"></div>
        <div class="purchase-info">
          <div class="price">{item.currency}{item.price}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    </>
  );
}

ShopItemFunc.propTypes = {
  item: PropTypes.instanceOf(ItemModel),
};

export default ShopItemFunc;