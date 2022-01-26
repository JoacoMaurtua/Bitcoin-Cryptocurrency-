import React from 'react';
import { Link } from 'react-router-dom';
import './Coins.css';

const Coins = ({
  key,
  name,
  price,
  symbol,
  marketcap,
  volume,
  image,
  priceChange,
}) => {

  //const {id} = useParams();


  return (
    <Link to={`coin/${key}`}>
      <div className="coin_container">
        <div className="coin_row">
          <div className="coin">
            <img src={image} className="coin_img" alt="coin_img" />
            <h1 className="coin_h1">{name}</h1>
            <p className="coin_symbol">{symbol}</p>
          </div>
          <div className="coin_data">
            <p className="coin_price">${price}</p>
            <p className="coin_volume">${volume.toLocaleString()}</p>
            {priceChange < 0 ? (
              <p className="coin_percent red">{priceChange.toFixed(2)}%</p>
            ) : (
              <p className="coin_percent green">{priceChange.toFixed(2)}%</p>
            )}
            <p className="coin_marketcap">
              Mkt Cap: ${marketcap.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Coins;
