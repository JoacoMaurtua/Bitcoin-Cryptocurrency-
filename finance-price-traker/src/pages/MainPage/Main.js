import React, { useState, useEffect } from 'react';
import CoinList from '../../components/CoinList/CoinList';
import Searchbar from '../../components/SearchBar/SearchBar';
import getCryptoData from '../../actions/coinsDB';
import logo from '../../images/logo.png';


const Main = () => {
  const [cryptoData, setcryptoData] = useState([]);

  /* useEffect(() =>{
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
         .then(res => setcryptoData(res.data))
         .catch(err => console.error(err))
  },[]) */

  useEffect(() => {
    const loadingData = async () => {
      const coins = await getCryptoData();
      setcryptoData(coins.data);
    };
    loadingData();
  }, []);

  console.log(cryptoData);
  return (
 
      <div className="coin_app">
        <div className="coin_logo">
          <img src={logo} alt="logo"/>
        </div> 
        <Searchbar />
        <CoinList filteredCoins={cryptoData} />
      </div>
 
    
  );
};

export default Main;

//22 min
