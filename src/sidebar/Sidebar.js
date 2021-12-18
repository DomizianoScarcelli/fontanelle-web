import "./Sidebar.css";
import "./SearchBox.js";
import React from "react";
import SearchBox from "./SearchBox.js";

const Sidebar = () => {
	return (
		<div class="sidebarContainer">
			<SearchBox></SearchBox>
		</div>
	);
};

export default Sidebar;
