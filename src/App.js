import logo from './logo.svg';
import './App.css';
import Items from "./components/Items";
import Cart from "./components/Cart";

function App() {
  return (
    <div className="App">
       <Items name="MacBook pro" price={100000}/>
       <Items name="PenDrive" price={4000}/>
       <Items name="CellPhone" price={40000}/>
       <Items name="Smart Watch" price={1000}/>
       <Cart/>
    </div>
  );
}

export default App;
