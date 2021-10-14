import React from 'react';
import './Coins.css';

const Coins = ({name, price, symbol, marketcap, volumen, image, priceChange, id}) => {
  return (
    <div className="coin_container">
      <div className="coin_row">
        <div className="coin">
          <img src={image}  alt="coin_img"/>
          <h1 className="coin_h1">{name}</h1>
          <p className="coin_symbol">{symbol}</p>
        </div>
        <div className="coin_data">
          <p className="coin_price">${price}</p>
        </div>
      </div>
    </div>
  );
}

export default Coins;
