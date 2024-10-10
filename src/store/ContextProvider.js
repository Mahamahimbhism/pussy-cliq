import React, { useEffect } from 'react';
import AppContext from './app-context';
import { useState } from 'react';

export const ContextProvider = ({children}) => {

  const [showCart, setShowCart] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const [loading, setLoading] = useState(false);

  const openCart =() => setShowCart(true);
  const closeCart =() => setShowCart(false);

  const openMenu =()=> setShowMenu(true);
  const closeMenu =()=> setShowMenu(false);

  const addProductFunc =(name, link)=> {
    console.log(name);
    console.log(link);
    const product={
      id: productsData.length+1,
      name: name,
      image: link,
    };
    sendProducts(product);
    setProductsData((state) => {
      return { ...state, [Object.keys(state).length+1]: product };
  });
    closeMenu();
  }
  
  const sendProducts = async (product) => {
    const response = await fetch("https://react-store-71039-default-rtdb.firebaseio.com/products.json",
      {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(product),
      }
    );
    const data = await response.json();
    console.log(data);
  };

  const incQuantity =(id) => {
    const productInCartIndex = cartItems.findIndex(
      (item) => item.idx === id
    );
    const updatedCartItems = [...cartItems];
      updatedCartItems[productInCartIndex].quantity+=1;
      setCartItems(updatedCartItems);
  };

  const decQuantity =(id) => {
    const productInCartIndex = cartItems.findIndex(
      (item) => item.idx === id
    );
    const updatedCartItems = [...cartItems];
      updatedCartItems[productInCartIndex].quantity-=1;
      if (updatedCartItems[productInCartIndex].quantity === 0) {
        updatedCartItems.splice(productInCartIndex, 1); // Remove the item
      }
      setCartItems(updatedCartItems);
  };


  const handleOnAddToCart = (id, name, img) => {
    const productInCartIndex = cartItems.findIndex(
      (item) => item.idx === id
    );
    if(productInCartIndex === -1)  
    {
      setCartItems((state) => [...state, 
        {
          idx: id,
          name: name,
          image: img,
          quantity: 1,
        },
      ]);
    }
    else{
      const updatedCartItems = [...cartItems];
      updatedCartItems[productInCartIndex].quantity+=1;
      setCartItems(updatedCartItems);
    }
  }

  useEffect(() => {
    const fetchProducts = async () =>{
      setLoading(true);
      const response = await fetch("https://react-store-71039-default-rtdb.firebaseio.com/products.json");
      const data=await response.json();
      setProductsData(data);
      setLoading(false);
    }
    fetchProducts();
  }, []);

  const appContextValue={
    showCart,
    showMenu,
    cartItems,
    productsData,
    openCart,
    openMenu,
    closeCart,
    closeMenu,
    addProductFunc,
    incQuantity,
    decQuantity,
    handleOnAddToCart,
    loading,
    };
  return (
    <AppContext.Provider value={appContextValue}>{ children }</AppContext.Provider>
  )
}