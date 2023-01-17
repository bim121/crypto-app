import React from 'react'
import "./Coins/Coins.css"

const CoinItem = (props) => {
  return (
    <div className='coinRow'>
        <p>{props.coins.market_cap_rank}</p>
        <div className='imgSymbol'>
            <img src = {props.coins.image} alt = '' />
            <p>{props.coins.symbol.toUpperCase()}</p>
        </div>
        <p>{props.coins.current_price.toLocaleString()} UAH</p>
        <p>{props.coins.price_change_percentage_24h.toFixed(2)}%</p>
        <p className='hideMobile'>{props.coins.total_volume.toLocaleString()} UAH</p>
        <p className='hideMobile'>{props.coins.market_cap.toLocaleString()} UAH</p>
    </div>
  )
}

export default CoinItem;