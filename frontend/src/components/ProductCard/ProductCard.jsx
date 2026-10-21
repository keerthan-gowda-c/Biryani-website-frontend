import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const navigate = useNavigate();
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (!showToast) return;

        const timer = setTimeout(() => {
            setShowToast(false);
        }, 2800);

        return () => clearTimeout(timer);
    }, [showToast]);

    const cartProduct = {
        id: product.id,
        name: product.product_title,
        price: Number(
            String(product.product_price).replace(/[₹,\s]/g, "")
        ),
        image: product.thumbnail
    };

    const handleAddToBag = () => {
        addToCart(cartProduct);
        setShowToast(true);
    };

    const handleOrderNow = () => {
        addToCart(cartProduct);
        navigate("/Checkout");
    };

    return (
        <>
            <div className="product-card">
                <img
                    src={product.thumbnail}
                    className="product-img"
                    alt={product.product_title}
                />

                <div className="product-card-body">
                    <h5 className="product-title">
                        {product.product_title}
                    </h5>

                    <p className="product-description">
                        {product.product_description}
                    </p>

                    <p className="product-price">
                        {product.product_price}
                    </p>

                    <div className="product-buttons">
                        <button
                            className="add-to-bag-btn"
                            onClick={handleAddToBag}
                            type="button"
                        >
                            Add to Bag
                        </button>

                        <button
                            className="order-btn"
                            onClick={handleOrderNow}
                            type="button"
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            </div>

            {showToast && (
                <div className="cart-toast" role="status">
                    <span className="toast-check">✓</span>

                    <div className="toast-content">
                        <strong>Added to Bag!</strong>
                        <p>{product.product_title} added successfully.</p>
                    </div>

                    <button
                        className="toast-close"
                        onClick={() => setShowToast(false)}
                        aria-label="Close notification"
                        type="button"
                    >
                        ×
                    </button>
                </div>
            )}
        </>
    );
};

export default ProductCard;
