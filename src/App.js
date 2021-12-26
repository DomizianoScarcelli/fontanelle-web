import "./App.css";
import MapContainer from "./mapContainer/MapContainer";
import Sidebar from "./sidebar/Sidebar.js";
import { useEffect, useState } from "react";

function App() {
	const [isLoading, setLoading] = useState(true);
	const [location, setLocation] = useState();
	const [fountainList, setFountainList] = useState([]);
	const [markers, setMarkers] = useState([]);

	useEffect(() => {
		setLoading(true);
		navigator.geolocation.getCurrentPosition((pos) => {
			const { latitude, longitude } = pos.coords;
			setLocation({ lat: latitude, lng: longitude });
			fetch(`https://fontanelle-api.test.sapienzaapps.it/fountains/?latitude=${latitude}&longitude=${longitude}&radius=100`)
				.then((response) => response.json())
				.then((data) => {
					setFountainList(data);
					data.forEach((fountain) => {
						setMarkers((markers) => [...markers, { position: { lat: fountain.Latitude, lng: fountain.Longitude }, id: fountain.ID }]);
					});
					setLoading(false);
				});
		});
	}, []);

	if (isLoading) return <div>Caricamento in corso</div>;
	// console.log("La posizione corrente: ", location);
	console.log("Lista fontane:", fountainList);
	console.log("I markers", markers);
	return (
		<div className="mainContainer">
			<Sidebar location={location} fountainList={fountainList}></Sidebar>
			<MapContainer location={location} markers={markers}></MapContainer>
		</div>
	);
}

export default App;
