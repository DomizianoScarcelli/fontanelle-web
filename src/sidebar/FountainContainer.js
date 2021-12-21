import "./Fountain.css";
import { FountainItem } from "./FountainItem";
import { useEffect, useState } from "react";

const FountainContainer = (props) => {
	const [fountainList, setFountainList] = useState([]);
	const [isLoading, setLoading] = useState(true);

	useEffect(() => {
		setLoading(true);
		fetch(`https://fontanelle-api.test.sapienzaapps.it/fountains/?latitude=${props.location.lat}&longitude=${props.location.lng}&radius=100`)
			.then((response) => response.json())
			.then((data) => {
				setFountainList(data);
				setLoading(false);
			});
	}, []);

	if (isLoading) return <div>Caricamento in corso</div>;
	return (
		<div className="fountainContainer">
			{fountainList.map((data) => {
				return <FountainItem address={data.ID} key={data.ID} />;
			})}
		</div>
	);
};

export default FountainContainer;
