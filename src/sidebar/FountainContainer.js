import "./Fountain.css";
import { FountainItem } from "./FountainItem";
import { useEffect } from "react";

const FountainContainer = (props) => {
	useEffect(() => {
		fetch(`https://fontanelle-api.test.sapienzaapps.it/fountains/?latitude=${props.location.lat}&longitude=${props.location.lng}&radius=100`)
			.then((response) => response.json())
			.then((data) => console.log(data));
	}, []);
	return (
		<div className="fountainContainer">
			<FountainItem address="Via di casal selce, 294" />
			<FountainItem address="Via di casal selce, 294" />
			<FountainItem address="Via di casal selce, 294" />
		</div>
	);
};

export default FountainContainer;
