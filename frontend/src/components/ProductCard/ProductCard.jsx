import './ProductCard.css';

const ProductCard = ({ product }) => {

    return (
        <>

            <div >

                <div className="card">
                    <img src={product.thumbnail} />
                    <h4 className='text-center'>
                        {product.product_title}
                    </h4>
                    <p className='text-center'>
                        {product.product_description}
                    </p>
                    <p >
                        {product.product_price}
                    </p>
                    <div className='buttons'>
                        <button className='btn btn-warning'>
                            Add to Bag
                        </button>
                        <button className='btn btn-success'>
                            Order Now
                        </button>
                    </div>


                </div>

            </div>


        </>
    )
}

export default ProductCard;