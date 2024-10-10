import Header from "./components/Header/header";
import Products from "./components/products/products";
import Cart from "./components/cart/cart";
import React from "react";
import Addproductmenu from "./components/addproductmenu/addproductmenu";
import { ContextProvider } from "./store/ContextProvider";

function App() {
  
  return (
    <ContextProvider>
      <Header />
      <Cart />
      <Addproductmenu />
      <Products />
    </ContextProvider>
  );
}

export default App;
