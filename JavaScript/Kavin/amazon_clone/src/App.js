import "./App.css";
import Header from "./Header/Header.js";
import Home from "./Home/Home.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout/Checkout.js";

function App() {
  return (
    <Router>
      <div className="App">
        
        <Switch>
          <Route path="/checkout">
            <Header />
            <Checkout/>
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
