import "./cart.css";
import Modal from "../ui/Modal/Modal";
import { useContext } from "react";
import AppContext from "../../store/app-context";

function Cart() {
    const { showCart, closeCart, cartItems, incQuantity, decQuantity } = useContext(AppContext);


    if (cartItems && cartItems.length > 0) {
        return (
            <div>
                {showCart && (
                    <Modal show={showCart} onClose={closeCart}>
                        <div className="cart-container">
                            <div className="cart-heading">Cart</div>
                            {cartItems.map(item => (
                                <div key={item.idx} className="item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="productname">{item.name}</div>
                                    <div className="quantity">
                                        Qty: {item.quantity}
                                        <button className="increase-quantity" onClick={() => incQuantity(item.idx)}>+</button>
                                        <button className="decrease-quantity" onClick={() => decQuantity(item.idx)}>-</button>
                                    </div>
                                </div>
                            ))}
                            <div className="cart-footer">
                                <button className="close-button" onClick={closeCart}>Close</button>
                                <button className="checkout-button" onClick={closeCart}>Checkout</button>
                            </div>
                        </div>
                    </Modal>
                )}
            </div>
        );
    }

    return (
        <div>
            {showCart && (
                <Modal show={showCart} onClose={closeCart}>
                    <div className="cart-container">
                        <div className="cart-heading">Cart</div>
                        <div className="empty">Your Cart Is Empty</div>
                        <div className="cart-footer">
                            <button className="close-button" onClick={closeCart}>Close</button>
                        </div>
                    </div>
                </Modal>
            )}
        </div>
    );
}

export default Cart;
