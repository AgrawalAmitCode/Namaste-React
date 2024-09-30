import "./index.css";
// import './constants.js'
import { IMG_CDN_URL, restaurantList } from "./utils/constants.js";
import { Header } from "./components/Header";
import Body from "./components/Body";
import UserContext from "./utils/UserContext";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
// import UserContext from "./utils/UserContext";z

/**
 * #### FoodAppComponent will have all these components ####
 *
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *  - Search Component
 *  - Restaurant Container
 *      - RestaurantCard
 *          - img
 *          - Name of Restaurant, Start Raiting, Cuisine, Dilevery time
 * Footer
 *  - Copyright
 *  - Links
 *  - Address
 *  - Contact
 *
 */

export const FoodAppComponent = () => {
	const [userName, setUserName] = useState("Amit");
	return (
		<div className="app">
			<UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
				<Header />
				<Outlet />
			</UserContext.Provider>
		</div>
	);
};
