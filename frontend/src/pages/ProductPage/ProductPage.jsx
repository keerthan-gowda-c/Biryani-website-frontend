import ProductCard from "../../components/ProductCard/ProductCard"
import products_data from "../../data/products_data/product_data"
import './ProductPage.css'

export default function ProductPage(){
    return(
        <>
        
        <div className='card-section row row-cols-1 row-cols-md-4 g-4 w-100'>
            {
                products_data.map((products,index)=>(
                    <ProductCard product={products}/>
                ))
            }
            
        </div>
        </>
    )

}