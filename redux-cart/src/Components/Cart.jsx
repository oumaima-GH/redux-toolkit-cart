import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, increment, decrement, clearCart, selectTotalPrice } from '../features/Cart/cartSlice';

const Cart = () => {
    const cartItems = useSelector(selectCartItems);
    const totalPrice = useSelector(selectTotalPrice);
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(true); 
    const toggleCart = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('slideCart', !isOpen);
    };

    return (
        <div>
            <div className={`icon ${isOpen ? 'open' : ''}`} onClick={toggleCart}>
                <i className="fa-solid fa-cart-shopping">
                    <span>{cartItems.length}</span>
                </i>
            </div>
            <div className={`cart ${isOpen ? 'open' : ''}`}>
                <h2 className="shopCart">Your Cart</h2>
                <div className="cartList">
                    {cartItems.map(item => (
                        <div key={item.id} className="item">
                            <img src={item.image} alt={item.title} />
                            <h4>${item.price}</h4>
                            <button onClick={() => dispatch(increment(item.id))}>+</button>
                            <span className="quantity">{item.quantity}</span>
                            <button onClick={() => dispatch(decrement(item.id))}>-</button>
                        </div>
                    ))}
                </div>
                <div className="total">Total: $ <span className="display-tot">{totalPrice.toFixed(2)}</span></div>

                <div className="cartBtns">
                    <button className="exit" onClick={() => dispatch(clearCart())}>Clear</button>
                    <button className="checkout" onClick={toggleCart}>Exit</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;
