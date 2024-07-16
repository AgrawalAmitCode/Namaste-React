import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API_URL } from "../utils/constants";
const RestaurantMenu = () => {
	const { resId } = useParams();
	const [resInfo, setResInfo] = useState(null);
	useEffect(() => {
		fetchMenu();
	}, []);

	console.log("useParams: ", useParams());

	const fetchMenu = async () => {
		const data = await fetch(MENU_API_URL + resId);

		const json = await data.json();
		setResInfo(json.data);
		console.log("json: ", json);
		console.log("resInfo: ", resInfo);
	};

	if (resInfo === null) return <Shimmer />;

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[2]?.card?.card?.info;

	const { itemCards } =
		// resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
			?.card || [];

	console.log("here itemCards: ", itemCards);
	console.log("resInfo: ", resInfo);

	return resInfo === null ? (
		<Shimmer />
	) : (
		<div className="menu">
			<h1>{name}</h1>
			<h2>
				{cuisines.join(", ")} - {costForTwoMessage}
			</h2>
			<ul>
				{itemCards.map((item) => (
					<li key={item.card.info.name}>
						{item.card.info.name} - {"Rs."} {item.card.info.price / 100}
					</li>
				))}
			</ul>
		</div>
	);
};

export default RestaurantMenu;
