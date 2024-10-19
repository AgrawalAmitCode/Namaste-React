import User from "./User";
import UserClass from "./UserClass";

const About = () => {
	return (
		<div>
			<h1>About</h1>
			<h2>This is Namaste React Web Series</h2>
			<User name={"Amit Agrawal"} location={"Mhow"}></User>
			<UserClass name={"Amit Agrawal"} location={"Mhow"}></UserClass>
			<UserClass name={"Amit Agrawal"} location={"Mhow"}></UserClass>
		</div>
	);
};

export default About;
