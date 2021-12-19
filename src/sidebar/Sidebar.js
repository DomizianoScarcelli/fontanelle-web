import "./Sidebar.css";
import "./SearchBox.js";
import React from "react";
import SearchBox from "./SearchBox.js";
import { FountainItem } from "./FountainItem";

const Sidebar = () => {
	return (
		<div className="sidebarContainer">
			<SearchBox></SearchBox>
			<div className="nearbyFountainsLabel">Fontanelle vicino a te</div>
			<FountainItem></FountainItem>
		</div>
	);
};

export default Sidebar;
