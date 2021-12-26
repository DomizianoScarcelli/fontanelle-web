import "./Fountain.css";
import { FountainItem } from "./FountainItem";
import { useState } from "react";
import FountainDetails from "./FountainDetails";

const FountainContainer = (props) => {
	const [details, setDetails] = useState(null);

	if (details == null) {
		return (
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
			</div>
		);
	} else return <FountainDetails fountain={details}></FountainDetails>;
};

export default FountainContainer;
