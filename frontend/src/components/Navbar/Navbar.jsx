import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-brown " data-bs-theme='light'>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <div className="logo">
                            <img src="images\icons\favicon.ico" width={'60px'} alt="" /> Gowdru Biriyani
                        </div>

                    </a>
                    <br />

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse  align-right" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item d-flex ">
                                <NavLink to='/' id="home-login-button" className='nav-link'>Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/About' className='nav-link'>About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to='/Contact' className='nav-link'>Contact</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to='/Menu' className='nav-link'>Menu</NavLink>
                            </li>

                        </ul>
                        <div className="authentication justify-content-space-around">
                            <ul className="navbar-nav">
                                <li className="nav-item d-flex">
                                    <NavLink to='/Login' className='nav-link'>Login</NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

