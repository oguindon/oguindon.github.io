import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {useState, useEffect} from "react";

// Component Imports
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import BookPage from "./components/BookPage.js";
import Footer from "./components/Footer.js";
import DescriptionPage from "./components/DescriptionPage.js";
import Contact_us from "./components/Contact_us.js";
import Cart from "./components/Cart.js"
import DailyReading from "./components/DailyReading.js"

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (id, version, price) => {
    if (version) {
      setCart(cart.push({id: id, data: {version: version, price: price}}))
      window.alert("Added item " + id + " to cart")
    } else {
      window.alert("Please select copy (digital, hardcover or paperback)")
    }
  }

  const removeFromCart = (id) => {
    var i = cart.findIndex(e => e.id === id);
    if (i > -1) {
      setCart(cart.splice(i, 1));
    }
  }

  const cartTotal = () => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      total += cart[0].data.price
    }
    return total;
  }

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <br/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/books" element={<BookPage addToCart={addToCart}/>}/>
          <Route exact path="/description" element = {<DescriptionPage/>}/>
          <Route exact path="/contactus" element = {<Contact_us/>}/>
          <Route exact path="/cart" element = {<Cart cart={cart} removeFromCart={removeFromCart} cartTotal={cartTotal}/>}/>
          <Route exact path="/dailyreading" element = {<DailyReading/>}/>
        </Routes>
        <Footer />
      </div>
    </Router> 
  );
}

export default App;
