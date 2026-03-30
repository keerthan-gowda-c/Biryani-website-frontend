import './ProductCard.css';

const ProductCard = ({ product }) => {

    return (
        <>
        <div id='product-card' className="card col-12 col-sm-6 col-md-4 col-lg-3  shadow-lg mb-5 p-2 bg-body-primary" >
           
  <img src={product.thumbnail} class="card-img-top product-img" alt="..."/>
            

  <div class="card-body">
    <h5 class="card-title">{product.product_title}</h5>
    <p class="card-text description"> {product.product_description}</p>
    <p class="card-text"> {product.product_price}</p>
    <div className='buttons'>
    <a href="#" class="btn btn-warning">Add to Bag</a>
    <a href="#" class="btn btn-success">Order Now</a>
    </div>
  </div>
</div>

        </>
    )
}

export default ProductCard;