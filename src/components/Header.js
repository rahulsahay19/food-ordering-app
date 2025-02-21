import { Link } from 'react-router-dom';
import logo from '../../src/images/foo-app-logo.jpg';
const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Food Ordering App"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;