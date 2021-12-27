import "./Fountain.css";
import { FountainItem } from "./FountainItem";
import { useState } from "react";
import FountainDetails from "./FountainDetails";

const FountainContainer = (props) => {
	const [details, setDetails] = useState(null);

	let detailsHtml = "";
	if (details != null) detailsHtml = <FountainDetails fountain={details}></FountainDetails>;

	return (
		<div className="outerFountainContainer">
			{detailsHtml}
			<div className="fountainContainer">
				{props.fountainList.map((data) => {
					return (
						<FountainItem
							onClick={() => {
								setDetails(data);
							}}
							position={{ lat: data.Latitude, lng: data.Longitude }}
							key={data.ID}
							distance={data.distance}
						/>
					);
				})}
				<div className="circleIcon addFountain bottomIcon"></div>
			</div>
		</div>
	);
};

export default FountainContainer;
