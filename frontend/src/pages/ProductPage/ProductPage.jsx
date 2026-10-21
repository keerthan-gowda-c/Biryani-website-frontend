
import ProductCard from "../../components/ProductCard/ProductCard";
import products_data from "../../data/products_data/product_data";
import "./ProductPage.css";

export default function ProductPage() {
    return (
        <div className="card-section">
            {products_data.map((product, index) => (
                <ProductCard
                    key={product.id || index}
                    product={product}
                />
            ))}
        </div>
    );
}
