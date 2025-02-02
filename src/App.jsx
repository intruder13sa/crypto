import { useEffect, useState } from "react";
import { CoinsContext } from "./context/coinsContext";
import { getCoins } from "./api/api";
import Header from "./components/Header/header";
import Main from "./pages/Main/Main";

function App() {

  const [balance, setBalance] = useState(35000);
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getCoins();
      setCoins(data.coins);
      setFilteredCoins(data.coins);
    }
    fetchData();
  }, []);

  return (
    <>
      <CoinsContext.Provider value={{coins, filteredCoins}}>
        <Header />
        <Main
          balance={balance}
          setBalance={setBalance}
          coins={coins}
          setCoins={setFilteredCoins}
          filteredCoins={filteredCoins}
        />
      </CoinsContext.Provider>
    </>
  )
}

export default App
