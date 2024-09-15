import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
	const { resId } = useParams();
	const resInfo = useRestaurantMenu(resId);
	if (resInfo === null) return <Shimmer />;

	console.log("here resInfo: ", resInfo);

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
