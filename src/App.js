import "./css/App.css";
import "./css/Shared.css";
import MapContainer from "./components/MapContainer";
import Sidebar from "./components/Sidebar.js";
import { useEffect, useState } from "react";

function App() {
	const [isLoading, setLoading] = useState(true);
	const [location, setLocation] = useState();
	const [fountainList, setFountainList] = useState([]);
	const [markers, setMarkers] = useState([]);

	const getDistanceBetweenCoordinates = (lat1, lon1, lat2, lon2) => {
		var R = 6371; // km
		var dLat = toRad(lat2 - lat1);
		var dLon = toRad(lon2 - lon1);
		var lat1 = toRad(lat1);
		var lat2 = toRad(lat2);

		var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.sin(dLon / 2) * Math.sin(dLon / 2) * Math.cos(lat1) * Math.cos(lat2);
		var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
		var d = R * c;
		return d;
	};

	const toRad = (value) => {
		return (value * Math.PI) / 180;
	};

	useEffect(() => {
		//TODO sta cosa è provvisoria, vedi come risolverla
		const script = document.createElement("script");
		script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}&libraries=places`;
		script.async = true;

		document.body.appendChild(script);
		setLoading(true);
		navigator.geolocation.getCurrentPosition(async (pos) => {
			const { latitude, longitude } = pos.coords;
			setLocation({ lat: latitude, lng: longitude });

			const response = await fetch(`https://fontanelle-api.test.sapienzaapps.it/fountains/?latitude=${latitude}&longitude=${longitude}&radius=100`);
			const data = await response.json();
			let orderedFountainList = [];

			data.forEach((fountain) => {
				const fountainDistance = Math.round(getDistanceBetweenCoordinates(fountain.Latitude, fountain.Longitude, latitude, longitude) * 100) / 100;
				orderedFountainList.push({ Latitude: fountain.Latitude, Longitude: fountain.Longitude, ID: fountain.ID, distance: fountainDistance });
				// setFountainList((fountainList) => [...fountainList, { Latitude: fountain.Latitude, Longitude: fountain.Longitude, ID: fountain.ID, distance: fountainDistance }]);
			});

			orderedFountainList.sort((fount1, fount2) => {
				if (fount1.distance < fount2.distance) return -1;
				if (fount1.distance > fount2.distance) return 1;
				return 0;
			});
			setFountainList(orderedFountainList);

			data.forEach((fountain) => {
				setMarkers((markers) => [...markers, { position: { lat: fountain.Latitude, lng: fountain.Longitude }, id: fountain.ID }]);
			});
			setLoading(false);
		});
	}, []);

	if (isLoading) return <div>Caricamento in corso</div>;

	return (
		<div className="mainContainer">
			<Sidebar location={location} fountainList={fountainList}></Sidebar>
			<MapContainer location={location} markers={markers}></MapContainer>
		</div>
	);
}

export default App;
