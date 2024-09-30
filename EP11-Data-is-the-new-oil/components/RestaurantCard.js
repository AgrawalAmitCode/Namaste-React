import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
	const { resData } = props;
	const {
		name,
		cuisines,
		cloudinaryImageId,
		avgRating,
		deliveryTime,
		costForTwo,
	} = resData?.info;

	return (
		<div className=" flex flex-col my-2 w-56 h-80 justify-end rounded-lg ">
			{/* below res-image can be removed and direct img tag can be used no issue */}
			<div className="flex-1 rounded-md">
				<div>
					<img
						alt="res-image"
						className="w-56 h-40 rounded-lg"
						src={IMG_CDN_URL + cloudinaryImageId}
					/>
				</div>
				<div className="p-3">
					<div className="flex justify-between">
						<h3 className="font-bold">{name}</h3>
						<h3 className="font-mono">{avgRating}</h3>
					</div>
					<div className="w-48 max-h-12  overflow-hidden overflow-ellipsis">
						<span className="font-mono ">{cuisines.join(", ")}</span>
					</div>
				</div>
			</div>
			<div>
				<h3 className="p-2 font-mono">{costForTwo}</h3>
			</div>
		</div>
	);
};

// Higher Order Component

// input-RestaurantCrd => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
	return (props) => {
		return (
			<div>
				{/* <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
					Promoted
				</label> */}
				<RestaurantCard {...props} />
			</div>
		);
	};
};

export default RestaurantCard;
