import "../css/Fountain.css";
import { FountainItem } from "./FountainItem";
import { useState } from "react";
import FountainDetails from "./FountainDetails";

const FountainContainer = (props) => {
	const [details, setDetails] = useState(null);

	let detailsHtml = "";
	if (details != null)
		detailsHtml = (
			<FountainDetails
				fountain={details}
				onClose={() => {
					setDetails(null);
				}}
			></FountainDetails>
		);

	return (
		<div>
			<div className="greyLabel">Fontanelle vicino a te</div>
			<div className="outerFountainContainer">
				<div className="fountainContainer">
					{props.fountainList.map((data) => {
						return (
							<div>
								{data === details ? (
									detailsHtml
								) : (
									<FountainItem
										onClick={() => {
											setDetails(data);
										}}
										position={{ lat: data.Latitude, lng: data.Longitude }}
										key={data.ID}
										distance={data.distance}
									/>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default FountainContainer;
