// import { IMG_CDN_URL } from "../utils/constants";

import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../utils/constants";

import { addItem } from "../utils/cartSlice";
const ItemAccordianBody = ({ itemCards }) => {
	const dispatch = useDispatch();
	const handleAddItem = (dish) => {
		//Dispatch an action
		console.log("e: ", dish);
		dispatch(addItem(dish));
	};

	const len = itemCards.length;
	return (
		<div>
			{itemCards.map((itemCard, index) => {
				return (
					<div className="flex justify-between my-2" key={index}>
						<div
							className={
								index < len - 1
									? "text-left p-2 flex-1 border-b-2"
									: "text-left p-2 flex-1 "
							}
						>
							<h2>{itemCard.card.info.name}</h2>
							<h2>Rs. {itemCard.card.info.price / 100}</h2>
							<h2>{itemCard.card.info.description}</h2>
						</div>
						<div>
							<img
								className="w-28 h-auto py-3 "
								alt="img"
								src={IMG_CDN_URL + itemCard.card.info.imageId}
							/>
							<div className="absolute -my-8 mx-9">
								<button
									className="bg-black text-gray-300 p-1 px-2 rounded-md shadow-xl"
									onClick={() => handleAddItem(itemCard)}
								>
									Add +
								</button>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default ItemAccordianBody;
