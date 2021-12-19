import "./App.css";
import MapContainer from "./mapContainer/MapContainer";
import Sidebar from "./sidebar/Sidebar.js";

function App() {
	return (
		<div className="mainContainer">
			<Sidebar></Sidebar>
			<MapContainer></MapContainer>
		</div>
	);
}

export default App;
