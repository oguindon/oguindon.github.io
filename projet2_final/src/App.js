import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {useState, useEffect} from "react";

// Component Imports
import Navbar from "./components/Navbar.js";
import Home from "./components/Home.js";
import BookPage from "./components/BookPage.js";
import Activity from "./components/Activity.js";
import Learn from "./components/Learn.js";
import News from "./components/News.js";
import Portfolio from "./components/Portfolio.js";
import Footer from "./components/Footer.js";
import DescriptionPage from "./components/DescriptionPage.js";
import Contact_us from "./components/Contact_us.js";
import Cart from "./components/Cart.js"
import DailyReading from "./components/DailyReading.js"

function App() {
  const [cart, setCart] = useState();

  const addToCart = (id, version) => {
    if (version) {
      setCart(id);
    } else {
      window.alert("Please select copy (digital, hardcover or paperback)")
    }
  }


  return (
    <Router>
      <div className="App">
        <Navbar/>
        <br/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/books" element={<BookPage addToCart={addToCart}/>}/>
          <Route exact path="/portfolio" element={<Portfolio/>}/>
          <Route exact path="/activity" element={<Activity/>}/> 
          <Route exact path="/news" element={<News/>}/>
          <Route exact path="/learn" element={<Learn/>}/>
          <Route exact path="/description" element = {<DescriptionPage/>}/>
          <Route exact path="/contactus" element = {<Contact_us/>}/>
          <Route exact path="/cart" element = {<Cart/>}/>
          <Route exact path="/dailyreading" element = {<DailyReading/>}/>
        </Routes>
        <Footer />
      </div>
    </Router> 
  );
}

export default App;
