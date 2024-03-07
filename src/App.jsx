import Navbar from "./layouts/Navbar";
import ProductsList from "./views/Products";
import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Cart from "./views/Cart";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<ProductsList />} />
          <Route exact path="/products" element={<ProductsList />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
