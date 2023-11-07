import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../utils/constants";
import { useState } from "react";

const Body = () => {
	const [listOfRest, setListOfRest] = useState(restaurantList);
	return (
		<div className="body">
			{/* <div className='search'>
                Search
            </div> */}
			<div className="filter">
				<button
					className="filter-btn"
					onClick={() => {
						const filterdList = listOfRest.filter(
							(res) => res.data.avgRating > 4
						);
						setListOfRest(filterdList);
					}}
				>
					Top Rated Restaurant
				</button>
			</div>
			<div className="restaurant-container">
				{listOfRest.map((resObj) => (
					<RestaurantCard key={resObj.data.id} resData={resObj} />
				))}
			</div>
		</div>
	);
};

export default Body;
