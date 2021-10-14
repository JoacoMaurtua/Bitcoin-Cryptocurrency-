import React from 'react';
import Searchbar from '../../components/SearchBar/SearchBar';

const Main = () => {
  return (
    <div>
      <Searchbar type="text" placeholder="Search"/>
    </div>
  );
}

export default Main;

export const getServerSideProps = async() =>{
  const res = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')

  const filteredCoins = await res.json()

  return{
    props:{
      filteredCoins
    }
  };
};
