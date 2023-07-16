import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "./store/getSlice";

function App() {
  const dispatch = useDispatch();
  const getData = useSelector((state) => {
    return state.getOne;
  });
  return (
    <div className="App">
      <header className="App-header"></header>
      <div id="searchDiv">
        <input id="searchInput" placeholder="Enter the crypto name" />
        <button
          id="searchButton"
          onClick={() =>
            dispatch(getProducts(document.getElementById("searchInput").value))
          }
        >
          Search
        </button>
      </div>
      <div id="cardsList">
        {Array.isArray(getData) && getData.flat(1).map((val) => (
          <div id="card">
            <p>Symbol: {val.symbol}</p>
            <p>High: {val.high}</p>
            <p>Low: {val.low}</p>
            <p>Volume: {val.volume}</p>
            <p>Quote Volume: {val.quoteVolume}</p>
            <p>Percent Change: {val.percentChange}</p>
            <p>Updated At: {val.updatedAt}</p>
          </div>
        ))}
        {!Array.isArray(getData) && 
          <div id="card">
            <p>Symbol: {getData.symbol}</p>
            <p>High: {getData.high}</p>
            <p>Low: {getData.low}</p>
            <p>Volume: {getData.volume}</p>
            <p>Quote Volume: {getData.quoteVolume}</p>
            <p>Percent Change: {getData.percentChange}</p>
            <p>Updated At: {getData.updatedAt}</p>
          </div>
        }
      </div>

      <footer></footer>
    </div>
  );
}

export default App;
