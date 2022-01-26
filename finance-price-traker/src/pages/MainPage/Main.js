import React, { useState, useEffect } from 'react';
import CoinList from '../../components/CoinList/CoinList';
import Searchbar from '../../components/SearchBar/SearchBar';
import getCryptoData from '../../actions/coinsDB';
import logo from '../../images/logo.png';


const Main = () => {
  const [cryptoData, setcryptoData] = useState([]);
  const [search,setSearch] = useState('');


  useEffect(() => {
    const loadingData = async () => {
      const coins = await getCryptoData();
      setcryptoData(coins.data);
    };
    loadingData();
  }, []);

  const allCoins = cryptoData.filter(coin =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleChange = e => {
    e.preventDefault();

    setSearch(e.target.value.toLowerCase());
  };

  console.log('allCoins: ',allCoins);
  return (
 
      <div className="coin_app">
        <div className="coin_logo">
          <img src={logo} alt="logo"/>
        </div> 
        <Searchbar value={search} onChange={handleChange}/>
        <CoinList filteredCoins={allCoins} />
      </div>
 
    
  );
};

export default Main;

