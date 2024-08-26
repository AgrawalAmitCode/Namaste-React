import RestaurantCard from "./RestaurantCard";
import { restaurantList, newRestaurantList } from "../utils/constants";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
	// local state variable - super powerful
	// Whenever state variable updates, react triggers a reconsilation cycle(re-renders the component)
	// Why react is fast - because of this reconsilation cycle process - it compares both the virtual doms and then renders the difference, that is why it is fast
	const [listOfRest, setListOfRest] = useState();
	const [searchText, setSearchText] = useState("");
	const [filteredRest, setFilteredRest] = useState();

	// useEffect will be called After Body component will be rendered
	useEffect(() => {
		const fetchData = async () => {
			const data = await fetch(
				"https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
			);

			console.log("data: ", data);

			const json = await data.json();
			console.log("json:", json);

			setListOfRest(
				json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
			);
			console.log("listOfrest: ", listOfRest);

			// updating filteredListOfRest also, since we are managing rendering using filteredRest only
			// setListOfRest is getting set only once and it will maintain all list of Restaurants
			setFilteredRest(
				json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
			);
		};

		fetchData();
	}, []);

	// this is to proof, whole body is getting re-rendered once the state is changed
	// and even before useEffect this will print then the useEffect's consoles.
	console.log("Body rendered");

	// conditional rendering
	return filteredRest === undefined ? (
		<Shimmer />
	) : (
		<div className="body">
			<div className="filter">
				<div className="search">
					<input
						type="text"
						className="search-box"
						value={searchText}
						onChange={(e) => {
							// need to set this state to show the updated value in the search bar.
							// if u comment this line, nothing will be shown on the search bar, while typing
							setSearchText(e.target.value);
						}}
					/>
					<button
						onClick={() => {
							// applying the filter from the complete list of rest i.e listOfRest
							const filteredRest = listOfRest.filter((rest) => {
								const restName = rest.info.name.toUpperCase();
								return restName.includes(searchText.toUpperCase());
							});
							console.log(filteredRest);
							setFilteredRest(filteredRest);
						}}
					>
						Search
					</button>
				</div>
				<button
					className="filter-btn"
					onClick={() => {
						const filterdList = listOfRest?.filter(
							(res) => res.info.avgRating > 4
						);
						// setFilteredRest since we don't want to change listOfRest the complete set.
						setFilteredRest(filterdList);
					}}
				>
					Top Rated Restaurant
				</button>
			</div>
			<div className="restaurant-container">
				{filteredRest?.map((resObj) => {
					console.log("amit : ", resObj);
					return (
						<Link className="link" to={"/restaurants/" + resObj.info.id}>
							{" "}
							<RestaurantCard key={resObj.info.id} resData={resObj} />
						</Link>
					);
				})}
			</div>
		</div>
	);
};

export default Body;
