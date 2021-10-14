import React from 'react';
import './SearchBar.css'

const Searchbar = () => {
  return (
    <div className= "coin_search">
      <input 
        type="text" 
        className="coin_input"
        placeholder="Search"
      ></input>
    </div>
  );
}

export default Searchbar;
