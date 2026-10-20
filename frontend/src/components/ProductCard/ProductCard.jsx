import { useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';
import { useEffect, useState } from 'react';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (!showToast) return;

    const timer = setTimeout(() => { setShowToast(false) }, 2500)

    return () => clearTimeout(timer)
  }, [showToast])

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
    setShowToast(true)
  }

  return (
    <>
      <div id='product-card' className="card col-12 col-sm-6 col-md-4 col-lg-3  shadow-lg mb-5 p-2 bg-body-primary" >

        <img src={product.thumbnail} className="card-img-top product-img" alt="..." />


        <div class="card-body">
          <h5 class="card-title">{product.product_title}</h5>
          <p class="card-text description"> {product.product_description}</p>
          <p class="card-text"> {product.product_price}</p>
          <div className='buttons'>
            <button className="btn add-to-bag-btn" onClick={() => handleAddToBag()}>
              Add to Bag
            </button>
            <button id='order-btn' className='btn btn-success' onClick={() => { addToCart(cartProduct); navigate("/Checkout") }}>Order Now</button>
          </div>
        </div>
      </div>
{showToast && (
  <div className='cart-toast alert alert-sucess'>
    <span className='toast-check'>✓</span>
    <div><strong>Added to Bag!</strong>
    <p>{product.product_title} added successfully.</p>
    </div>
    <button className='toast-close' onClick={()=>setShowToast(false)} aria-label='Close notification'>x</button>
  </div>
)}
    </>
  )
}

export default ProductCard;