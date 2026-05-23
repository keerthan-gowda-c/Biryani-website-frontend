import { useState } from "react";
import "./LoginForm.css";

export default function LoginForm() {

    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            {/* Order Button */}
            <div className="text-center mt-5">
                <button
                    id="order-btn"
                    className="btn btn-warning px-4 py-2 rounded-pill fw-semibold"
                    onClick={() => setShowPopup(true)}
                >
                    Order Now
                </button>
            </div>

            {/* Popup */}
            {showPopup && (
                <div className="login-overlay">

                    <div id="login-popup">

                        {/* Close Button */}
                        <button
                            className="close-btn"
                            onClick={() => setShowPopup(false)}
                        >
                            ✕
                        </button>

                        <form>

                            <h1 className="text-center mb-4">
                                Login Form
                            </h1>

                            <div className="mb-3">
                                <input
                                    type="email"
                                    className="form-control"
                                    placeholder="Enter Email"
                                />
                            </div>

                            <div className="mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    placeholder="Enter Password"
                                />
                            </div>

                            <button
                                type="submit"
                                className="btn btn-warning w-100 rounded-pill fw-semibold"
                            >
                                Login
                            </button>

                        </form>
                    </div>
                </div>
            )}
        </>
    );
}