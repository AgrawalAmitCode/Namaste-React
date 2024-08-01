import React from "react";

class UserClass extends React.Component {
	constructor(props) {
		super(props);

		console.log(this.props.name + " constructor");
		this.state = {
			userInfo: {
				name: "Dummy",
				location: "Default",
			},
		};
	}

	async componentDidMount() {
		console.log(this.props.name + " componentDidMount");
		const response = await fetch(
			"https://api.github.com/users/AgrawalAmitCode"
		);
		const responseData = await response.json();
		console.log("API response: ", responseData);
		this.setState({
			userInfo: responseData,
		});
	}

	render() {
		const { name, location, avatar_url } = this.state.userInfo;
		console.log(name + " render");
		const { count } = this.state;
		return (
			<div
				style={{ border: "1px solid black", margin: "10px", padding: "10px" }}
			>
				<h3>Name: {name}</h3>
				<h3>Location: {location}</h3>
				<h3>gitHub: AmitAgrawalCode</h3>
				<img src={avatar_url}></img>
			</div>
		);
	}

	componentDidUpdate() {
		console.log("here componentDidUpdate");
	}

	componentWillUnmount() {
		console.log("here componentWillUnmount");
	}
}

export default UserClass;
