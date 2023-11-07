import { APP_LOGO_CDN_URL } from "../utils/constants";

export const Header = () => {
    return (
        <div className="header">
            {/* below logo-container can be removed and direct img tag can be used no issue */}
            <div className="logo-container"> 
                <img className='logo' src={APP_LOGO_CDN_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;