import { useEffect, useState } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) => {
	const [resInfo, setResInfo] = useState();
	useEffect(() => {
		fetchData();
	}, []);

	const fetchData = async () => {
		const res = await fetch(MENU_API_URL + resId);
		const jsonData = res.json();
		setResInfo(jsonData.data);
	};

	return resInfo;
};

export default useRestaurantMenu;
