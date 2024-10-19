import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import ItemAccordian from "./ItemAccordian";
import { useState } from "react";
const RestaurantMenu = () => {
	const { resId } = useParams();
	const resInfo = useRestaurantMenu(resId);
	const [showIndex, setShowIndex] = useState(null);
	if (!resInfo) return <Shimmer />;

	console.log("here resInfo: ", resInfo);

	const { name, cuisines, costForTwoMessage } =
		resInfo?.cards[2]?.card?.card?.info;

	const { itemCards } =
		// resInfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
			?.card || [];

	const categories =
		resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter(
			(card) =>
				card.card.card["@type"] ===
				"type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
		);

	console.log("here itemCards: ", itemCards);
	console.log("resInfo: ", resInfo);

	console.log("here categories: ", categories);

	return resInfo === null ? (
		<Shimmer />
	) : (
		<div className="text-center">
			<h1 className="mt-4 font-bold font-sans text-2xl">{name}</h1>
			<h2 className="mt-1 mb-4 text-md text-gray-400">
				{cuisines.join(", ")} - {costForTwoMessage}
			</h2>
			<div className="text-center">
				{categories.map((category, index) => (
					<ItemAccordian
						key={index}
						itemCategories={category}
						showAccordianBody={index === showIndex}
						setShowIndex={() => {
							index === showIndex ? setShowIndex(null) : setShowIndex(index);
						}}
					/>
				))}
			</div>

			{/* <ul>
				{itemCards.map((item) => (
					<li key={item.card.info.name}>
						{item.card.info.name} - {"Rs."} {item.card.info.price / 100}
					</li>
				))}
			</ul> */}
		</div>
	);
};

export default RestaurantMenu;
