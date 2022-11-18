import {useState, useEffect} from 'react'

/* 우리나라 1400원 = 1달라 */

function App() {
  const [selected, setselected] = useState("")
  const [loading, setLoading] = useState(true)
  const [coins, setCoins] = useState([])

  const money = (e) => {
    console.log(e.target.value)
    let tmp = Math.round(e.target.value) * 1400
    setselected(tmp)
  }

  useEffect(() => {
    fetch("	https://api.coinpaprika.com/v1/tickers")
    .then((response) => response.json())
    .then((json) => {
      setCoins(json)
      setLoading(false)
    })
  }, [])
  return (
    <div>
      <h1>The Couns! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : 
      (
      <select onChange={money}>
        {coins.map((coin) => 
        <option key={coin.id} value={coin.quotes.USD.price}>{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD</option>
        )}
      </select>
      )  
    } 
    <h2>한화 (환율 : 1400원 = 1달라)</h2>
    <input type="text" placeholder={selected} disabled></input>
    </div>
  ); 
}

export default App;
