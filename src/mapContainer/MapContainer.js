import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useState, useCallback } from "react";
const containerStyle = {
	width: "100vw",
	height: "100vh",
};
/**
 * Container for the google map
 */
const MapContainer = (props) => {
	const { isLoaded } = useJsApiLoader({
		id: "google-map-script",
		googleMapsApiKey: "AIzaSyBbTz28oqCBEbXq9Y5oviGyjaL1FXTYs7s",
	});

	const [map, setMap] = useState(null);

	const onLoad = useCallback((map) => {
		const bounds = new window.google.maps.LatLngBounds();
		map.fitBounds(bounds);
		setMap(map);
	}, []);

	const onUnmount = useCallback(() => {
		setMap(null);
	}, []);

	return isLoaded ? (
		<GoogleMap mapContainerStyle={containerStyle} center={props.location} zoom={16} onLoad={onLoad} onUnmount={onUnmount}>
			{/* Child components, such as markers, info windows, etc. */}
			<></>
		</GoogleMap>
	) : (
		<div>Errore di caricamento</div>
	);
};

export default MapContainer;
