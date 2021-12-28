import "../css/Sidebar.css";
import React from "react";
import FountainContainer from "./FountainContainer";

const Sidebar = (props) => {
	return (
		<div className="sidebarContainer">
			<div className="searchBoxContainer">
				<input className="searchBox" placeholder="Cerca..." />
			</div>
			<div className="nearbyFountainsLabel">Fontanelle vicino a te</div>
			<FountainContainer location={props.location} fountainList={props.fountainList} />
		</div>
	);
};

export default Sidebar;
