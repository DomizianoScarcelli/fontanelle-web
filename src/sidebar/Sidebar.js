import "./Sidebar.css";
import "./SearchBox.js";
import React from "react";
import SearchBox from "./SearchBox.js";
import FountainContainer from "./FountainContainer";

const Sidebar = (props) => {
	return (
		<div className="sidebarContainer">
			<SearchBox></SearchBox>
			<div className="nearbyFountainsLabel">Fontanelle vicino a te</div>
			<FountainContainer location={props.location} />
		</div>
	);
};

export default Sidebar;
