import UserClass from "./UserClass";
import React from "react";

class AboutClass extends React.Component {
	constructor(props) {
		super(props);
		console.log(this.props.name + "constructor");
	}
	componentDidMount() {
		console.log(this.props.name + " componentDidMount");
	}
	render() {
		console.log(this.props.name + " render");
		return (
			<>
				<UserClass name={"first"} />
				<UserClass name={"Second"} />
			</>
		);
	}
}

export default AboutClass;
