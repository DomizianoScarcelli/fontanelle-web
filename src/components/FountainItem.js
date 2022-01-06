import FountainLogo from "../res/place_black_24dp.svg";
import { useEffect, useState } from "react";
import { setAddressFromCoordinates } from "../utils/LocationUtils";
import "../css/FountainItem.css";

export const FountainItem = (props) => {
	const [address, setAddress] = useState("");

	useEffect(() => {
		changeAddress(props.position);
	}, [props.position, address]);

	const changeAddress = async (position) => {
		const address = await setAddressFromCoordinates(position);
		setAddress(address);
	};

	return (
		<div className="itemContainer" onClick={props.onClick}>
			<img src={FountainLogo} className="fountainLogo" alt="fountain-logo" />
			<div className="fountainInfoContainer">
				<div className="fountainAddress">{address}</div>
				<div className="fountainDistance">{props.distance} km</div>
			</div>
		</div>
	);
};
