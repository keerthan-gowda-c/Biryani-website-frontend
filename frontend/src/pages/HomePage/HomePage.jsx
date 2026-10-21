import "./HomePage.css";
import Carousel from "../../components/Carousel/Carousel";
// import carousel_data from "../../data/carousel_data/carousel_data";
import CategoriesCards from "../../components/Cards/CategoriesCards";
import content_data from "../../data/content_data/content_data";
import carousel_data from "../../data/carousel_data/carousel_data";

export default function HomePage() {
    return (
        <section className="home-page">
            {/*carousel*/}
            <div className="home-carousel">
                <Carousel images={carousel_data} />
            </div>

            {/*categories*/}
            <div className="category-section" id="category">
                <div className="category-heading">
                    <h1 className="pt-sans-regular playwrite-ie">
                        Categories
                    </h1>
                </div>

                <div className="categories">
                    {content_data.map((content, index) => (
                        <CategoriesCards
                            key={content.id || index}
                            content={content}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
