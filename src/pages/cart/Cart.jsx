import React, { useContext } from "react";
import "./cart.css";
import { StoreContext } from "../../context/StoreContext";

export default function Cart() {
  const { food_list, cartItem, setCartItem, addToCart, removeFromCart } =
    useContext(StoreContext);

  return (
    <div className="cart-box">
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItem[item._id] > 0) {
            return (
              <>
                <div key={index} className="cart-items-title cart-items-item">
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₹ {item.price}</p>
                  <p>{cartItem[item._id]}</p>
                  <p>₹ {item.price * cartItem[item._id]}</p>
                  <button
                    className="cross"
                    onClick={() => removeFromCart(item._id)}
                  >
                    x
                  </button>
                </div>
                <hr />
              </>
            );
          }
        })}
        <div className="cart-bottom">
          <div className="cart-total">
            <h2>Cart Total</h2>
            <div>
              <div className="cart-total-details">
                <p>Subtotal</p>
                <p>{0}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <p>Delivery Fee</p>
                <p>{2}</p>
              </div>
              <hr />
              <div className="cart-total-details">
                <b>Total</b>
                <b>{0}</b>
              </div>
            </div>
            <button>PROCEED TO CHEKCOUT</button>
          </div>
          <div className="cart-promocode">
            <div>
              <p>If you have a promo code, Enter it here</p>
              <div className="cart-promocode-input">
                <input type="text" placeholder="Enter Promocode" />
                <button>Submit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
