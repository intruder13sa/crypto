import './styles.css'
import { useContext } from 'react';
import { CoinsContext } from "../../context/coinsContext";

const CoinsList = () => {

    const coinsContext = useContext(CoinsContext);
    const {filteredCoins} = coinsContext;

    return (
        <ul className='coins-list'>
            {filteredCoins.map((coin) => {
                return <li className='coins-item' key={coin.uuid}>
                    <div className='coins-item__info'>
                        <img
                            className='coins-item__logo'
                            src={coin.iconUrl}
                            alt={coin.name}
                        />
                        <p style={{color: coin.color}}>{coin.name}/USD</p>
                    </div>
                    <div className='coin-item__price'>
                        <p style={{color: coin.color}}>{(+coin.price).toFixed(2)} USD</p>
                        <p style={{color: coin.color}}>{(+coin.btcPrice).toFixed(2)} BTC</p>
                    </div>
                </li>
            })}
        </ul>
    )
};

export default CoinsList;