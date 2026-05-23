import "./Contact.css";

export default function Contact() {
    return (
        <section className="contact-wrapper container p-5">

            {/* Heading */}
            <div className="text-center mb-5">
                <h1 className="contact-heading">
                    Get In Touch With <span>Gowdru Biryani</span>
                </h1>

                <p className="contact-subtitle">
                    Have a question, feedback, or craving? We’d love to hear from you.
                </p>
            </div>

            {/* Contact Form */}
            <div className="row justify-content-center">
                <div className="col-lg-7">

                    <form className="contact-section">

                        <div className="row">

                            <div className="col-md-6 mb-4">
                                <label className="form-label">
                                    Name
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your name"
                                    required
                                />
                            </div>

                            <div className="col-md-6 mb-4">
                                <label className="form-label">
                                    Email ID
                                </label>

                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter your email"
                                    required
                                />
                            </div>

                        </div>

                        <div className="row">

                            <div className="col-md-6 mb-4">
                                <label className="form-label">
                                    Mobile Number
                                </label>

                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Enter mobile number"
                                    required
                                />
                            </div>

                            <div className="col-md-6 mb-4">
                                <label className="form-label">
                                    Your City
                                </label>

                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Enter your city"
                                    required
                                />
                            </div>

                        </div>

                        <div className="mb-4">
                            <label className="form-label">
                                Your Query
                            </label>

                            <textarea
                                className="form-control"
                                rows="5"
                                placeholder="Write your message..."
                                required
                            ></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                className="btn btn-warning px-5 py-2 rounded-pill fw-semibold"
                            >
                                Submit
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </section>
    );
}