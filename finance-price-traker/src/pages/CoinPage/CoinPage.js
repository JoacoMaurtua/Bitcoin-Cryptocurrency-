import React,{useState,useEffect} from 'react';
import { useHistory,useParams } from 'react-router-dom';
import axios from 'axios';
import logo from '../../images/logo.png';
import './CoinPage.css';

const Coinpage = () => {
  const [coin,setCoin] = useState([]);

  const history = useHistory();

  const {id} = useParams();

  useEffect(() =>{
    axios.get(`https://api.coingecko.com/api/v3/coins/${id}`)
        .then(response => setCoin(response.data))
  },[id]);

  const onClick = () => {
    history.push(`/`);
  };

  console.log('coin: ',coin);

  return (
    <div className="coin_page">
      <div className="coin_logo">
        <img src={logo} alt="logo" onClick={onClick} style={{ width: '20%' }} />
      </div>
      <div className="coin_container">
       {/*  <img src={coin.image.large} alt={coin.name} className="coin_image" />  */}
        <h1 className="coin_name">{coin.name}</h1>
        <p className="coin_ticker">{coin.symbol}</p>
     {/*  <p className="coin_current">{coin.market_data.current_price.usd}</p>  */}
      </div> 
    </div>
  );
};

export default Coinpage;

