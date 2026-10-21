
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/About" },
    { name: "Menu", path: "/Menu" },
    { name: "Contact", path: "/Contact" },
    { name: "Cart", path: "/Cart" },
];

export default function Navbar() {
    const closeMenu = () => {
        document.activeElement?.blur();

        const offcanvas = document.getElementById("mobileNavbar");
        const closeButton = offcanvas?.querySelector(".btn-close");

        closeButton?.click();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark shadow-sm sticky-top custom-navbar">
            <div className="container-fluid px-3 px-lg-5">
                {/*logo*/}
                <NavLink
                    to="/"
                    className="navbar-brand d-flex align-items-center fw-bold fs-4"
                >
                    <img
                        src="/images/icons/favicon.ico"
                        width="55"
                        height="55"
                        alt="Gowdru Biriyani Logo"
                        className="me-2 rounded-circle border border-2 border-light navbar-logo"
                    />
                    <span>Gowdru Biriyani</span>
                </NavLink>

                {/*desktop navigation*/}
                <div className="desktop-navbar d-none d-lg-flex">
                    <ul className="navbar-nav gap-lg-3 text-center">
                        {navItems.map((item) => (
                            <li className="nav-item" key={item.path}>
                                <NavLink
                                    to={item.path}
                                    end={item.path === "/"}
                                    className="nav-link fw-semibold"
                                >
                                    {item.name}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>

                {/*mobile menu button*/}
                {/* <button
                    className="navbar-toggler border-0 d-lg-none"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobileNavbar"
                    aria-controls="mobileNavbar"
                    aria-label="Open navigation menu"
                >
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <i className="bi bi-text-indent-right text-light navbar-toggler border-0" 
               type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#mobileNavbar"
                    aria-controls="mobileNavbar"
                    aria-label="Open navigation menu"
                    ></i>

                {/*mobile offcanvas*/}
                <div
                    className="offcanvas offcanvas-end mobile-offcanvas d-lg-none"
                    tabIndex="-1"
                    id="mobileNavbar"
                    aria-labelledby="mobileNavbarLabel"
                >
                    <div className="offcanvas-header">
                        {/* <h5
                            className="offcanvas-title fw-bold"
                            id="mobileNavbarLabel"
                        >
                            Gowdru Biriyani
                        </h5> */}

                        <img
                        src="/images/icons/favicon.ico"
                        width="55"
                        height="55"
                        alt="Gowdru Biriyani Logo"
                        className="me-2 rounded-circle border border-2 border-light navbar-logo"
                    />
                        <button
                            type="button"
                            className="btn-close btn-close-white"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close menu"
                        ></button>
                    </div>

                    <div className="offcanvas-body">
                        <ul className="navbar-nav gap-2">
                            {navItems.map((item) => (
                                <li className="nav-item" key={item.path}>
                                    <NavLink
                                        to={item.path}
                                        end={item.path === "/"}
                                        className="nav-link fw-semibold"
                                        onClick={closeMenu}
                                    >
                                        {item.name}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}
