import "./App.css";
import MapContainer from "./mapContainer/MapContainer";
import Sidebar from "./sidebar/Sidebar.js";
import { useEffect, useState } from "react";

function App() {
	const [location, setLocation] = useState({ lat: null, lng: null });

	useEffect(() => console.log(location), [location]);

	useEffect(() => {
		navigator.geolocation.getCurrentPosition((pos) => {
			const { latitude, longitude } = pos.coords;
			setLocation({ lat: latitude, lng: longitude });
		});
	}, []);

	return (
		<div>
			{!location.lat && !location.lng ? (
				<div>Errore nel fetch della posizione</div>
			) : (
				<div className="mainContainer">
					<Sidebar location={location}></Sidebar>
					<MapContainer location={location}></MapContainer>
				</div>
			)}
		</div>
	);
}

export default App;
