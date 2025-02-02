import styles from './styles.module.css'
import Card from '../../components/Card/Card';
import FilterBlock from '../../components/FilterBlock/FilterBlock';
import CoinsList from '../../components/CoinsList/CoinsList';

const Main = ({balance, setBalance, coins, setCoins}) => {

    return(
        <main className={styles.main}>
            <Card balance={balance} setBalance={setBalance}/>
            <FilterBlock setCoins={setCoins} />
            {coins.length > 0 ? <CoinsList /> : <div>Loading...</div>}
        </main>
    )
}

export default Main;