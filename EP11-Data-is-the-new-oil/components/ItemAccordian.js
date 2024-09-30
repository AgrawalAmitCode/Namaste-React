import { useState } from "react";
import ItemAccordianBody from "./ItemAccordianBody";

const ItemAccordian = ({ itemCategories, showAccordianBody, setShowIndex }) => {
	// console.log("here itemCategories: ", itemCategories);
	// const [showAccordianBody, setShowAccordianBody] = useState(false);
	return (
		<div className="w-6/12 m-2 p-4 shadow-lg mx-auto">
			<div
				className="flex justify-between cursor-pointer"
				onClick={setShowIndex}
			>
				<h2 className="font-medium">
					{itemCategories.card.card.title} (
					{itemCategories.card.card.itemCards.length})
				</h2>
				<span>✅</span>
			</div>
			{showAccordianBody ? (
				<ItemAccordianBody itemCards={itemCategories.card.card.itemCards} />
			) : null}
		</div>
	);
};

export default ItemAccordian;
