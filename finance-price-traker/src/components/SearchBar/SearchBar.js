import React from 'react';
import './SearchBar.css'

const Searchbar = ({onChange}) => {
  return (
    <div className= "coin_search">
      <input 
        type="text" 
        className="coin_input"
        placeholder="Search"
        onChange={onChange}
      ></input>
    </div>
  );
}

export default Searchbar;
