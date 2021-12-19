import "./Fountain.css";
import { FountainItem } from "./FountainItem";
import { useEffect, useState } from "react";

const FountainContainer = (props) => {
	const [fountainList, setFountainList] = useState([]);

	useEffect(() => console.log(fountainList), [fountainList]);

	useEffect(() => {
		fetch(`https://fontanelle-api.test.sapienzaapps.it/fountains/?latitude=${props.location.lat}&longitude=${props.location.lng}&radius=100`)
			.then((response) => response.json())
			.then((data) => {
				setFountainList(data);
			});
	}, []);
	return (
		<div className="fountainContainer">
			{fountainList.map((data) => {
				return <FountainItem address={data.ID} />;
			})}
		</div>
	);
};

export default FountainContainer;
