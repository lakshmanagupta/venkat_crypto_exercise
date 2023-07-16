import './App.css';
import {useDispatch,useSelector} from "react-redux"
import {getProducts} from "./store/getSlice"

function App() {
  const dispatch = useDispatch()
  const getData = useSelector((state)=>{
  return state.getAllSummary
})
  return (
    <div className="App">
      <header className="App-header">
      </header>
           <div id="searchDiv">
            <input id="searchInput" placeholder='Enter the crypto name'/>
            <button id="searchButton" onClick={()=>dispatch(getProducts(document.getElementById("searchInput").value))}>Search</button>
            <div id="itemList">a</div>
           </div>
           {getData.map((val)=> (
             <div>
               <p>Symbol: {val.symbol}</p>
               <p>High: {val.high}</p>
               <p>Low: {val.low}</p>
               <p>Volume: {val.volume}</p>
               <p>Quote Volume: {val.quoteVolume}</p>
               <p>Percent Change: {val.percentChange}</p>
               <p>Updated At: {val.updatedAt}</p>
             </div>
           ))}
      <footer>
      </footer>
    </div>
  );
}

export default App;
