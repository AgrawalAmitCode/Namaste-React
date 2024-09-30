import { useState, useEffect, useContext } from "react";
import { APP_LOGO_CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import SWIGGY_LOGO from "./../assets/logo/swiggy-logo.png";
import UserContext from "../utils/UserContext";
export const Header = () => {
	const [btnName, setBtnName] = useState("Login");

	const onlineStatus = useOnlineStatus();
	// this is to proof, that whole Header component is getting re-rendered when the state 'btnName' is getting changed
	// console.log("Header rendered");

	useEffect(() => {
		// console.log("useEffect called");
	}, []);

	const data = useContext(UserContext);

	return (
		<div className="flex justify-between shadow-lg p-2">
			<img className=" ml-2 h-14" src={SWIGGY_LOGO} />
			<div className="flex items-center">
				<ul className="flex">
					<li className="m-2">Online Status: {onlineStatus ? "✅" : "🛑"}</li>
					<li className="m-2">
						<Link className="link" to="/">
							Home
						</Link>
					</li>
					<li className="m-2">
						<Link className="link" to="/about">
							About Us
						</Link>
						{/* Below href will not take the latest Context value, you need to use the correct routing mechanism to reflect the global context*/}
						{/* <a href="/about">About us</a> */}
					</li>
					<li className="m-2">
						<Link className="link" to="/contact">
							Contact Us
						</Link>
					</li>
					<li className="m-2">
						<Link className="link" to="/grocery">
							Grocery
						</Link>
					</li>
					<li className="m-2">Cart</li>
					<li className="m-2">
						<button
							className="login"
							onClick={() => {
								btnName == "Login" ? setBtnName("Logout") : setBtnName("Login");
								console.log("Btn clicked");
							}}
						>
							{btnName}
						</button>
					</li>
					<li className="m-2">{data.loggedInUser}</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
