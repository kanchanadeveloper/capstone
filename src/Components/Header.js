import Logo from "../../src/Assets/Logo .svg";
import "./Header.css"
import { Link } from "react-router-dom";
function Header() {
    return (
        <>
            <div className="container d-flex justify-content-between head">
                <Link to="/" className="logo">
                    <img src={Logo} alt="The Little Lemon Website Logo" />
                </Link>
                <nav className="navbar navbar-expand-sm navbar-light">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link">About Us</Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/menu" className="nav-link">Menus</Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/reservations" className="nav-link">Reserve a Table</Link>

                            </li>
                            <li className="nav-item">
                                <Link to="/contact" className="nav-link">Contact Us</Link>

                            </li>

                        </ul>
                    </div>

                </nav>
            </div>


        </>
    );
}

export default Header;
