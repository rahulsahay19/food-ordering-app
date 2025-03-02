import "./Cart.css";
const Cart = () =>{
    return (
        <div className="cart-container">
            <h2 className="cart-title">🛒 Shopping Cart</h2>
            {/* Empty Cart Message */}
            <p className="empty-cart">Your cart is empty...</p>

            {/* Cart Content */}
            <div className="cart-content">
                {/* Cart Items list */}
                <div className="cart-items">
                    <div className="cart-item">
                        <img src="" alt="item-name" className="cart-item-image"/>
                        <div className="cart-item-details">
                            <h3>Item Name</h3>
                            <p>₹ Price</p>
                        </div>
                        <button className="remove-button">❌ Remove</button>
                    </div>
                    <div className="cart-item">
                        <img src="" alt="item-name" className="cart-item-image"/>
                        <div className="cart-item-details">
                            <h3>Item Name</h3>
                            <p>₹ Price</p>
                        </div>
                        <button className="remove-button">❌ Remove</button>
                    </div>
                </div>
                {/* Summamry section */}
                <div className="cart-summary">
                    <h3>Order Summary</h3>
                    <p>Total Items: <strong>0</strong></p>
                    <p>Total Price: <strong>0</strong></p>
                    <button className="clear-cart-button">🗑️ Clear Cart</button>
                    <button className="checkout-button">✅ Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;