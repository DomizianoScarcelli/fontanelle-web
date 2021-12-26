import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState, useCallback, useEffect } from "react";
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
	const [center, setCenter] = useState(null);
	const [zoom, setZoom] = useState(10);

	useEffect(() => {
		setInterval(() => {
			setCenter(props.location);
			setZoom(14);
		}, 500);
	}, [props.location]);

	const onLoad = useCallback((map) => {
		const bounds = new window.google.maps.LatLngBounds();
		map.fitBounds(bounds);
		setMap(map);
	}, []);

	const onUnmount = useCallback(() => {
		setMap(null);
	}, []);

	if (!isLoaded) return <div>Errore di caricamento</div>;
	// console.log("location", props.location);
	return (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom} onLoad={onLoad} onUnmount={onUnmount}>
			{/* Child components, such as markers, info windows, etc. */}
			{props.markers.map((marker) => {
				// console.log("Posizione marker", marker.position);
				return <Marker position={marker.position} key={marker.id}></Marker>;
			})}
			<></>
		</GoogleMap>
	);
};

export default React.memo(MapContainer);
