import "./Fountain.css";
import FountainLogo from "../res/place_black_24dp.svg";
import Geocode from "react-geocode";
import { useEffect, useState } from "react";

export const FountainItem = (props) => {
	Geocode.setApiKey("AIzaSyBbTz28oqCBEbXq9Y5oviGyjaL1FXTYs7s");
	const [address, setAddress] = useState("");

	const setAddressFromCoordinates = async (location) => {
		//TODO parse the address to be readable
		const res = await Geocode.fromLatLng(location.lat.toString(), location.lng.toString());
		const addressComponents = await res.results[0].address_components;
		console.log(res);
		const addressName = addressComponents[1].short_name;
		const addressNumber = addressComponents[0].short_name;
		setAddress(addressName + ", " + addressNumber);
	};

	useEffect(() => {
		setAddressFromCoordinates(props.position);
	}, [props.position, address]);

	return (
		<div className="itemContainer">
			<img src={FountainLogo} class="fountainLogo" alt="fountain-logo" />
			<div className="fountainInfoContainer">
				<div className="fountainAddress">{address}</div>
				<div className="fountainDistance">3,4km</div>
			</div>
		</div>
	);
};
