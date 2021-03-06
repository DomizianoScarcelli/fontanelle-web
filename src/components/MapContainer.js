import React from "react";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { useState, useCallback, useEffect } from "react";
import { Circle } from "@react-google-maps/api";

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
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
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
	return (
		<GoogleMap mapContainerStyle={containerStyle} center={center} zoom={zoom} onLoad={onLoad} onUnmount={onUnmount}>
			{props.markers.map((marker) => {
				return (
					<Marker
						position={marker.position}
						key={marker.id}
						// icon={{
						// 	url: "../res/pin.png",
						// 	scaledSize: new window.google.maps.Size(50, 50),
						// }}
					></Marker>
				);
			})}
			<Marker position={props.location}></Marker>
			<Circle center={center} radius={2 * 1000} />
		</GoogleMap>
	);
};

export default React.memo(MapContainer);
