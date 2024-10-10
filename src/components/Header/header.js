import { useContext } from "react";
import "./header.css";
import AppContext from "../../store/app-context";

function Header() {
  const {openCart, openMenu} = useContext(AppContext);
  return (
    <div className="header">
      <h1>Pussy-Cliq</h1>
      <div className="button-container">
        <button className="add-button" onClick={openMenu}>
          <div className="add-product">Add Product</div>
        </button>
        <button className="cart-button" onClick={openCart}>
          <div className="cart-name">Cart</div>
        </button>
      </div>
    </div>
  );
}

export default Header;
