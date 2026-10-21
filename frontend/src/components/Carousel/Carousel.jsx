import { useEffect, useState } from "react";
import "./Carousel.css";

const Carousel = ({ images }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;

        const interval = setInterval(() => {
            setActiveIndex((current) => (current + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    if (!images.length) return null;

    const previousSlide = () => {
        setActiveIndex((current) =>
            (current - 1 + images.length) % images.length
        );
    };

    const nextSlide = () => {
        setActiveIndex((current) =>
            (current + 1) % images.length
        );
    };

    return (
        <div className="custom-carousel">


            {images[activeIndex].img_title && (
                <div className="carousel-track">
                    <img
                        src={images[activeIndex].img_src}
                        className="carousel-image"
                        alt={images[activeIndex].img_title || "Carousel image"}
                    />
                    <div className="carousel-caption">
                        <h5>{images[activeIndex].img_title}</h5>
                        <p>{images[activeIndex].img_description}</p>
                    </div>
                </div>
            )}


            {images.length > 1 && (
                <>
                    <button
                        className="carousel-control carousel-prev"
                        onClick={previousSlide}
                        aria-label="Previous slide"
                        type="button"
                    >
                        &#10094;
                    </button>

                    <button
                        className="carousel-control carousel-next"
                        onClick={nextSlide}
                        aria-label="Next slide"
                        type="button"
                    >
                        &#10095;
                    </button>

                    <div className="carousel-indicators">
                        {images.map((image, index) => (
                            <button
                                key={image.img_src || index}
                                className={
                                    index === activeIndex
                                        ? "carousel-indicator active"
                                        : "carousel-indicator"
                                }
                                onClick={() => setActiveIndex(index)}
                                aria-label={`Go to slide ${index + 1}`}
                                aria-current={index === activeIndex}
                                type="button"
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Carousel;
