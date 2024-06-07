import { Link } from "react-router-dom";
import LOGO from "../Assets/Logo .svg"
import res from "../Assets/res1.jpg"

function Footer() {
    return (
        <>
            <footer>
            <div className="row p-4">
                    <div className="col-xl-4">
                        <img src={LOGO} alt="The Litle Lemon Website" />
                    </div>
                    <div className="col-xl-4">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/about" className="nav-link">About US</Link>

                        </li>
                        <li className="nav-item">
                        <Link to="/menu" className="nav-link">Menus</Link>

                        </li>
                        <li className="nav-item">
                        <Link to="/reservations" className="nav-link">Reserve a Table</Link>

                        </li>
                        <li className="nav-item">
                        <Link to="/contact" className="nav-link">Contact US</Link>

                        </li>

                    </ul>
                    </div>
                    <div className="col-xl-4">
                    <img src={res} alt="The Litle Lemon Website" width={400}/>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;
