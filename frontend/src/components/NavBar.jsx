import { Link } from "react-router-dom";
import '../css/NavBar.css';
function NavBar(){
    return(
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/"><h1>Movie App</h1></Link>
            </div>
            <div className="links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/favorites" className="nav-link">Favorites</Link>
            </div>
        </nav>
    )
}
export default NavBar;