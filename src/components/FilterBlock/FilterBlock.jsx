import './styles.css'
import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CoinsContext } from "../../context/coinsContext";
import { useFilterCoins } from '../../helpers/hooks/useFilterCoins';

const FilterBlock = ({setCoins}) => {

    const coinsContext = useContext(CoinsContext);
    const {coins} = coinsContext;
    
    const {value, setValue} = useFilterCoins(coins, setCoins);

    return (
        <div className="filter-block">
            <input 
                onChange={(e) => setValue (e.target.value)}
                value={value}
                className='input'
                type='text'
                placeholder='bitcoin'
            />
        </div>
    )
};

export default React.memo(FilterBlock);