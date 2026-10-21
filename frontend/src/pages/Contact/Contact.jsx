import "./Contact.css";

export default function Contact() {
    return (
        <section className="contact-wrapper">
            {/*heading*/}
            <div className="contact-header">
                <h1 className="contact-heading">
                    Get In Touch With <span>Gowdru Biryani</span>
                </h1>

                <p className="contact-subtitle">
                    Have a question, feedback, or craving? We’d love to hear from you.
                </p>
            </div>

            {/*contact form*/}
            <div className="contact-form-container">
                <form className="contact-section">
                    <div className="contact-fields">
                        <div className="contact-field">
                            <label className="contact-label">Name</label>
                            <input
                                type="text"
                                className="contact-input"
                                placeholder="Enter your name"
                                required
                            />
                        </div>

                        <div className="contact-field">
                            <label className="contact-label">Email ID</label>
                            <input
                                type="email"
                                className="contact-input"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="contact-field">
                            <label className="contact-label">Mobile Number</label>
                            <input
                                type="tel"
                                className="contact-input"
                                placeholder="Enter mobile number"
                                required
                            />
                        </div>

                        <div className="contact-field">
                            <label className="contact-label">Your City</label>
                            <input
                                type="text"
                                className="contact-input"
                                placeholder="Enter your city"
                                required
                            />
                        </div>
                    </div>

                    <div className="contact-field contact-message-field">
                        <label className="contact-label">Your Query</label>
                        <textarea
                            className="contact-input contact-textarea"
                            rows="5"
                            placeholder="Write your message..."
                            required
                        />
                    </div>

                    <div className="contact-submit">
                        <button type="submit" className="contact-submit-btn">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
