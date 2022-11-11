import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import Cartlist from "./components/Cartlist"
/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */

  const [cartState, setCartState] = useState([])
  const [currentM, setCurrentM] = useState({text: '', price: '', key:''})

  const handleInput = (item) => {
    setCartState([...cartState, {text: item.name, price:item.price, key:Date.now()}])
  }

  

  return (
    <div className="App">
      <div class="d-flex">
      <main>
      
      <h1>Matthew's Bakery</h1> {/* TODO: personalize your bakery (if you want) */}

      {bakeryData.map((item, index) => (
        <BakeryItem item={item} handleInput={handleInput} />
      ))}
      </main>
      
      <aside>
        <h2>Cart</h2>
        <Cartlist cartState={cartState} />
      </aside>
      </div>
    </div>
  );
}

export default App;
