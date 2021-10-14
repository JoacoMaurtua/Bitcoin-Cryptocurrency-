import React, {useState,useEffect} from 'react';
import CoinList from '../../components/CoinList/CoinList';
import Searchbar from '../../components/SearchBar/SearchBar';
import getCryptoData from '../../actions/coinsDB';
import axios from 'axios';


const Main = () => {
  const [data,setData] = useState([]);

  useEffect(() =>{
    axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
         .then(res => setData(res))
         .catch(err => console.error(err))
  },[])

  /* useEffect(() =>{
    const loadingData =async()=>{
      const coins = await getCryptoData();
      setData(coins);
    }
    loadingData();
  },[]); */

  
  console.log('coins',data);
  return (
    <div>
      <Searchbar/>
      <CoinList filteredCoins={data}/>
    </div>
  );
}

export default Main;


