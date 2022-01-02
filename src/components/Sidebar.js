import "../css/Sidebar.css";
import React from "react";
import FountainsContainer from "./FountainsContainer";
import { useState, useRef } from "react";

const Sidebar = (props) => {
	const [isPopUp, setPopUp] = useState(false);

	const searchBar = useRef(null);

	const showPopUpAddFountain = () => {
		if (isPopUp) {
			//The fountain has been added
			setPopUp(false);
			//TODO add a popup to let the user know the fountain has been added
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
			<div className={isPopUp ? "circleIcon extendedIcon doneIcon" : "circleIcon addIcon"} onClick={showPopUpAddFountain}>
				<p className="addFountainText" style={{ opacity: isPopUp ? "1" : "0" }}>
					AGGIUNGI FONTANELLA
				</p>
			</div>
		</div>
	);
};

export default Sidebar;
