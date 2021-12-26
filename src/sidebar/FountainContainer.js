import "./Fountain.css";
import { FountainItem } from "./FountainItem";

const FountainContainer = (props) => {
	return (
		<div className="fountainContainer">
			{props.fountainList.map((data) => {
				// console.log(data);
				return <FountainItem position={{ lat: data.Latitude, lng: data.Longitude }} key={data.ID} distance={data.distance} />;
			})}
		</div>
	);
};

export default FountainContainer;
