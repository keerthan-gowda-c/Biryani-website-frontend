
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./CartPage.css";

function CartPage() {
    const {
        cartItems,
        updateQuantity,
        removeFromCart,
        cartTotal
    } = useCart();

    if (cartItems.length === 0) {
        return (
            <section className="cart-page container">
                <div className="empty-cart">
                    <div className="empty-cart-icon">🛍️</div>
                    <h2>Your Bag is Empty</h2>
                    <p>Add your favourite biryani to get started.</p>
                    <Link to="/Menu" className="btn btn-danger">
                        Explore Menu
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="cart-page container">
            <h2 className="cart-heading">Your Shopping Bag</h2>

            <div className="row g-4">
                <div className="col-lg-8">
                    {cartItems.map((item) => (
                        <div className="cart-item card" key={item.id}>
                            {item.image && (
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="cart-item-image"
                                />
                            )}

                            <div className="cart-item-details">
                                <h3>{item.name}</h3>
                                <p className="cart-item-price">
                                    ₹{Number(item.price).toFixed(2)}
                                </p>

                                <div className="quantity-control">
                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                item.quantity - 1
                                            )
                                        }
                                        disabled={item.quantity === 1}
                                        aria-label={`Decrease ${item.name} quantity`}
                                    >
                                        −
                                    </button>

                                    <span>{item.quantity}</span>

                                    <button
                                        className="btn btn-outline-danger"
                                        onClick={() =>
                                            updateQuantity(
                                                item.id,
                                                item.quantity + 1
                                            )
                                        }
                                        aria-label={`Increase ${item.name} quantity`}
                                    >
                                        +
                                    </button>
                                </div>

                                <p className="cart-item-total">
                                    Item Total: ₹
                                    {(item.price * item.quantity).toFixed(2)}
                                </p>

                                <button
                                    className="remove-item"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="col-lg-4">
                    <div className="cart-summary card">
                        <h3>Order Summary</h3>

                        <div className="summary-row">
                            <span>Subtotal</span>
                            <span>₹{cartTotal.toFixed(2)}</span>
                        </div>

                        <div className="summary-row">
                            <span>Delivery</span>
                            <span>Calculated at checkout</span>
                        </div>

                        <hr />

                        <div className="summary-row summary-total">
                            <span>Total</span>
                            <span>₹{cartTotal.toFixed(2)}</span>
                        </div>

                        <Link
                            to="/Checkout"
                            className="btn btn-danger checkout-btn"
                        >
                            Proceed to Checkout
                        </Link>

                        <Link to="/Menu" className="continue-shopping">
                            ← Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CartPage;
