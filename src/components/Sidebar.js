import "../css/Sidebar.css";
import React from "react";
import FountainsContainer from "./FountainsContainer";
import { useState, useRef } from "react";
import CloseIcon from "../res/close_black_24dp.svg";
const Sidebar = (props) => {
	const [isPopUp, setPopUp] = useState(false);

	const popUp = useRef(null);
	const searchBar = useRef(null);

	const showPopUpAddFountain = () => {
		if (isPopUp) {
			//The fountain has been added
			setPopUp(false);
		} else {
			//The button to add a fountain has been pressed
			setPopUp(true);
			searchBar.current.focus();
		}
	};

	return (
		<div className="sidebarContainer">
			{/* Searchbar */}
			<div className="searchBoxContainer">
				<input className="searchBox" ref={searchBar} placeholder="Cerca..." />
			</div>
			<div className="nearbyFountainsLabel">Fontanelle vicino a te</div>
			<FountainsContainer location={props.location} fountainList={props.fountainList} />
			{/* Add fountain button */}
			<div className={isPopUp ? "circleIcon extendedIcon doneIcon" : "circleIcon addIcon"} onClick={showPopUpAddFountain}></div>
		</div>
	);
};

export default Sidebar;
