import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./scenes/home/Home";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import ItemDetails from "./scenes/itemDetails/ItemDetails";
import CartMenu from "./scenes/global/CartMenu";
import Checkout from "./scenes/checkout/Checkout";
import Confirmation from "./scenes/checkout/Confirmation";
import ProductForm from "./admin/admin";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Login from './components/Login';
import Signup from './components/Signup';
import TermsAndConditions from "./components/TermosCondicoes";
import PrivacyPolicy from "./components/PoliticaPrivacidade";



const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
          <Route path="item/:id" element={<ItemDetails />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="checkout/success" element={<Confirmation />} />
          <Route path="/termosecondicoes" element={<TermsAndConditions />} />
          <Route path="/politicadeprivacidade" element={<PrivacyPolicy />} />
          <Route path="admin" element={
            <ProtectedRoute>
              <ProductForm />
            </ProtectedRoute>
          } />
        </Routes>
        <CartMenu />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
