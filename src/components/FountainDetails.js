import { useEffect, useState } from "react";
import { getAddressFromCoordinates } from "../utils/LocationUtils";
import CloseIcon from "../res/close_black_24dp.svg";
import "../css/FountainDetails.css";

const FountainDetails = (props) => {
	const [address, setAddress] = useState("");

	useEffect(() => {
		changeAddress({ lat: props.fountain.Latitude, lng: props.fountain.Longitude });
	}, [props.fountain]);

	const changeAddress = async (position) => {
		const address = await getAddressFromCoordinates(position);
		setAddress(address);
	};

	return (
		<div className="detailsContainer verticalFlex">
			<div className="horizontalFlex topContainer">
				<div className="address">{address}</div>
				<img className="closeIcon" src={CloseIcon} alt="close" onClick={props.onClose}></img>
			</div>
			<div className="horizontalFlex">
				<div className="circleIcon directionsIcon"></div>
				<div className="circleIcon saveIcon"></div>
				<div className="circleIcon secondary deleteIcon" onClick={props.onClick}></div>
			</div>
		</div>
	);
};

export default FountainDetails;
