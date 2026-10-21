
import "./CategoriesCards.css";

const CategoriesCards = ({ content }) => {
    return (
        <div className="category-card" id="category-card">
            <img
                src={content.img_src}
                className="category-img"
                alt={content.title}
            />
            <p className="category-title">{content.title}</p>
        </div>
    );
};

export default CategoriesCards;
