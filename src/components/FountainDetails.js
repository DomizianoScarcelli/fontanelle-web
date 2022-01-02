import { useEffect, useState } from "react";
import { setAddressFromCoordinates } from "../utils/LocationUtils";
import "../css/FountainDetails.css";

const FountainDetails = (props) => {
	const [address, setAddress] = useState("");

	useEffect(() => {
		changeAddress({ lat: props.fountain.Latitude, lng: props.fountain.Longitude });
	}, [props.fountain]);

	const changeAddress = async (position) => {
		const address = await setAddressFromCoordinates(position);
		setAddress(address);
	};

	return (
		<div className="detailsContainer verticalFlex">
			<div className="address">{address}</div>
			<div className="horizontalFlex">
				<div className="circleIcon directionsIcon"></div>
				<div className="circleIcon saveIcon"></div>
				<div className="circleIcon secondary flagIcon"></div>
			</div>
		</div>
	);
};

export default FountainDetails;
