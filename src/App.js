import "./App.css";
import MapContainer from "./mapContainer/MapContainer";
import Sidebar from "./sidebar/Sidebar.js";
import { useEffect, useState } from "react";

function App() {
	const [isLoading, setLoading] = useState(true);
	const [location, setLocation] = useState();

	useEffect(() => {
		setLoading(true);
		navigator.geolocation.getCurrentPosition((pos) => {
			const { latitude, longitude } = pos.coords;
			setLocation({ lat: latitude, lng: longitude });
			setLoading(false);
		});
	}, []);

	if (isLoading) return <div>Caricamento in corso</div>;
	console.log("La posizione corrente: ", location);
	return (
		<div className="mainContainer">
			<Sidebar location={location}></Sidebar>
			<MapContainer location={location}></MapContainer>
		</div>
	);
}

export default App;
