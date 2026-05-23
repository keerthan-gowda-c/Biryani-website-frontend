import "./AboutPage.css";

export default function AboutPage() {
    return (
        <section className="about-section container py-5">

            {/* Heading */}
            <div className="text-center mb-5">
                <p className="about-head">
                    Welcome To <br />
                    <span>Gowdru Biryani</span>
                </p>
            </div>

            {/* Content */}
            <div className="about-container row align-items-center g-5">

                {/* Image */}
                <div className="col-lg-6 text-center">
                    <div className="about-img-wrapper">
                        <img
                            src="images/icons/favicon.ico"
                            className="img-fluid about-img"
                            alt="Gowdru Biryani"
                        />
                    </div>
                </div>

                {/* Text */}
                <div className="col-lg-6">
                    <div className="about-content">
                        <h2 className="mb-4">
                            Authentic Taste, Royal Experience
                        </h2>

                        <p>
                            Gowdru Biryani is your destination for rich,
                            authentic biryani crafted using premium spices,
                            aromatic basmati rice, and carefully selected
                            ingredients.
                        </p>

                        <p>
                            Every plate delivers the perfect balance of flavor,
                            aroma, and tradition — from spicy chicken biryani
                            to hearty family meals made with passion.
                        </p>

                        <p>
                            We believe biryani is more than food; it’s an
                            experience that brings people together.
                        </p>

                        <a className="btn btn-warning rounded-pill px-4 py-2 mt-3 fw-semibold" href="/Menu">
                            Explore Menu
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}