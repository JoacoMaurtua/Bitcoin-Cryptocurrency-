import axios from 'axios';

const getCryptoData = async() =>{
  try{
    const getData = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
    return getData;

  }catch(err){
    console.log('Error',err)
  }
}

export default getCryptoData;