import { useState, useEffect } from "react";
import { APP_LOGO_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

export const Header = () => {
	const [btnName, setBtnName] = useState("Login");

	// this is to proof, that whole Header component is getting re-rendered when the state 'btnName' is getting changed
	console.log("Header rendered");

	useEffect(() => {
		console.log("useEffect called");
	}, []);

	return (
		<div className="header">
			{/* below logo-container can be removed and direct img tag can be used no issue */}
			<div className="logo-container">
				<img className="logo" src={APP_LOGO_CDN_URL} />
			</div>
			<div className="nav-items">
				<ul>
					<li>
						<Link className="link" to="/">
							Home
						</Link>
					</li>
					<li>
						<a href="/about">About us</a>
					</li>
					<li>
						<Link className="link" to="/contact">
							Contact Us
						</Link>
					</li>
					<li>Cart</li>
					<button
						className="login"
						onClick={() => {
							btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
							console.log("Btn clicked");
						}}
					>
						{btnName}
					</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
