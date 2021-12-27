import Geocode from "react-geocode";

export const setAddressFromCoordinates = async (location) => {
	Geocode.setApiKey("AIzaSyBbTz28oqCBEbXq9Y5oviGyjaL1FXTYs7s");
	const res = await Geocode.fromLatLng(location.lat.toString(), location.lng.toString());
	const addressComponents = await res.results[0].address_components;
	const addressName = addressComponents[1].short_name;
	const addressNumber = addressComponents[0].short_name;
	return addressName + ", " + addressNumber;
};
