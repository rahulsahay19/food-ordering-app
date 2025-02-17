import logo from '../../src/images/foo-app-logo.jpg';
const Header = () =>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="Food Ordering App"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Header;