import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top"
            style={{ backgroundColor: "#5C2E00" }}
        >
            <div className="container">
                
                {/* Logo */}
                <NavLink
                    to="/"
                    className="navbar-brand d-flex align-items-center fw-bold fs-4"
                >
                    <img
                        src="images/icons/favicon.ico"
                        width="55"
                        height="55"
                        alt="Gowdru Biriyani Logo"
                        className="me-2 rounded-circle border border-2 border-light"
                    />
                    Gowdru Biriyani
                </NavLink>

                {/* Mobile Toggle */}
                <button
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 gap-lg-3 text-center">

                        <li className="nav-item">
                            <NavLink
                                to="/"
                                className="nav-link fw-semibold"
                            >
                                Home
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/About"
                                className="nav-link fw-semibold"
                            >
                                About
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/Menu"
                                className="nav-link fw-semibold"
                            >
                                Menu
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/Contact"
                                className="nav-link fw-semibold"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    {/* Login Button */}
                    <div className="d-flex justify-content-center">
                        <NavLink
                            to="/Login"
                            className="btn btn-warning fw-bold px-4 rounded-pill shadow-sm"
                        >
                            Login
                        </NavLink>
                        <NavLink
                            to="/Register"
                            className="btn btn-warning fw-bold px-4 rounded-pill shadow-sm"
                        >
                            Register
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}