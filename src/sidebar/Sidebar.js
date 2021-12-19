import "./Sidebar.css";
import "./SearchBox.js";
import React from "react";
import SearchBox from "./SearchBox.js";
import { FountainItem } from "./FountainItem";

const Sidebar = () => {
	return (
		<div class="sidebarContainer">
			<SearchBox></SearchBox>
			<div class="nearbyFountainsLabel">Fontanelle vicino a te</div>
			<FountainItem></FountainItem>
		</div>
	);
};

export default Sidebar;
