import Geocode from "react-geocode";

export const getAddressFromCoordinates = async (location) => {
	Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
	const res = await Geocode.fromLatLng(location.lat.toString(), location.lng.toString());
	const addressComponents = await res.results[0].address_components;
	const addressName = addressComponents[1].short_name;
	const addressNumber = addressComponents[0].short_name;
	return addressName + ", " + addressNumber;
};

export const getCoordinatesFromAddress = async (address) => {
	Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);
	const res = await Geocode.fromAddress(address);
	const { lat, lng } = await res.results[0].geometry.location;
	return { lat, lng }; //TODO error handling
};
