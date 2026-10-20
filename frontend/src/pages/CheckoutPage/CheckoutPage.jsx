
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";
import "./CheckoutPage.css";

function CheckOutPage() {
    const { cartItems, cartTotal, clearCart } = useCart();
    const navigate = useNavigate();

    const [customer, setCustomer] = useState({
        name: "",
        phone: "",
        address: ""
    });

    const [orderPlaced, setOrderPlaced] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;

        setCustomer((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (cartItems.length === 0) return;

        clearCart();
        setOrderPlaced(true);
    };

    if (orderPlaced) {
        return (
            <section className="checkout-page container">
                <div className="checkout-success">
                    <div className="success-icon">✓</div>
                    <h2>Order Placed Successfully!</h2>
                    <p>Thank you, {customer.name}!</p>
                    <p className="success-message">
                        This is a demo confirmation. Your order has not
                        been sent to a restaurant.
                    </p>

                    <button
                        className="btn btn-danger"
                        onClick={() => navigate("/Menu")}
                    >
                        Continue Shopping
                    </button>
                </div>
            </section>
        );
    }

    if (cartItems.length === 0) {
        return (
            <section className="checkout-page container">
                <div className="checkout-empty">
                    <h2>Your Bag Is Empty</h2>
                    <p>Add your favourite biryani before checking out.</p>
                    <Link to="/Menu" className="btn btn-danger">
                        Explore Menu
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="checkout-page container">
            <h2 className="checkout-heading">Checkout</h2>

            <div className="row g-4">
                <div className="col-lg-7">
                    <div className="checkout-card card">
                        <h3>Delivery Details</h3>

                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label
                                    htmlFor="customer-name"
                                    className="form-label"
                                >
                                    Full Name
                                </label>

                                <input
                                    id="customer-name"
                                    className="form-control"
                                    type="text"
                                    name="name"
                                    value={customer.name}
                                    onChange={handleChange}
                                    autoComplete="name"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label
                                    htmlFor="customer-phone"
                                    className="form-label"
                                >
                                    Phone Number
                                </label>

                                <input
                                    id="customer-phone"
                                    className="form-control"
                                    type="tel"
                                    name="phone"
                                    value={customer.phone}
                                    onChange={handleChange}
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                    inputMode="numeric"
                                    autoComplete="tel"
                                    title="Enter a 10-digit phone number"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label
                                    htmlFor="customer-address"
                                    className="form-label"
                                >
                                    Delivery Address
                                </label>

                                <textarea
                                    id="customer-address"
                                    className="form-control"
                                    name="address"
                                    rows="4"
                                    value={customer.address}
                                    onChange={handleChange}
                                    autoComplete="street-address"
                                    placeholder="Enter your complete delivery address"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-danger place-order-btn"
                            >
                                Place Order · ₹{cartTotal.toFixed(2)}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="col-lg-5">
                    <div className="checkout-summary card">
                        <h3>Order Summary</h3>

                        {cartItems.map((item) => (
                            <div className="checkout-product" key={item.id}>
                                <div>
                                    <p className="checkout-product-name">
                                        {item.name}
                                    </p>
                                    <span>
                                        Quantity: {item.quantity}
                                    </span>
                                </div>

                                <strong>
                                    ₹{(
                                        item.price * item.quantity
                                    ).toFixed(2)}
                                </strong>
                            </div>
                        ))}

                        <hr />

                        <div className="checkout-total">
                            <span>Total</span>
                            <span>₹{cartTotal.toFixed(2)}</span>
                        </div>

                        <Link
                            to="/Cart"
                            className="edit-cart-link"
                        >
                            ← Back to Shopping Bag
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CheckOutPage;
