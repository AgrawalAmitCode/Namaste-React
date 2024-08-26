import { useEffect } from "react";

const User = ({ name, location }) => {
	useEffect(() => {
		const timer = setInterval(() => {
			console.log("Inside setInterval");
		}, 1000);

		return () => {
			clearInterval(timer);
			console.log("return useFfect");
		};
	}, []);
	return (
		<div>
			<h3>Name: {name}</h3>
			<h3>Location: {location}</h3>
			<h3>gitHub: AmitAgrawalCode</h3>
		</div>
	);
};

export default User;
