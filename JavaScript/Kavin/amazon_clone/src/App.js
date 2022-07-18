import "./App.css";
import Header from "./Header/Header.js";
import Home from "./Home/Home.js";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Checkout from "./Checkout/Checkout.js";

function App() {
  return (
    <BrowserRouter>
      <div className="App"></div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
