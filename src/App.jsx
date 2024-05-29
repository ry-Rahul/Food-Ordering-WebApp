import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import PlaceOrder from "./pages/placeOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import { useState, useEffect } from "react";
import LoginPopup from "./components/LoginPopup/LoginPopup";

function App() {

  const [showLogin, setShowLogin] = useState(false);

  // Use useEffect to add/remove the no-scroll class to the body
  useEffect(() => {
    if (showLogin) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [showLogin]);

  return (
    <div>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app"> 
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
