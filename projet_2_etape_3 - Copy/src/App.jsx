import { BrowserRouter as Router, Route} from "react-router-dom";

// Component Imports
import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home.jsx";
import Activity from "./components/Activity.jsx";
import Learn from "./components/Learn.jsx";
import News from "./components/News.jsx";
import Portfolio from "./components/Portfolio.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <br/>
        <Routes>
          <Route exact path="/" component={Home}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/activity" component={Activity}/> 
          <Route exact path="/news" component={News}/>
          <Route exact path="/learn" component={Learn}/>
        </Routes>
        <Footer />
      </div>
    </Router> 
  );
}

export default App
