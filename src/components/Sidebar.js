import "../css/Sidebar.css";
import React from "react";
import FountainsContainer from "./FountainsContainer";
import { useState, useRef } from "react";

const Sidebar = (props) => {
	/**
	 * True if the fountain is clicked and the pop up has to be shown
	 */
	const [isPopUp, setPopUp] = useState(false);
	/**
	 * True if the searchbar has focus
	 */
	const [searchFocus, setSearchFocus] = useState(false);

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
				<input
					className="searchBox"
					ref={searchBar}
					placeholder="Cerca..."
					onFocus={() => {
						setSearchFocus(true);
					}}
					onBlur={() => {
						setPopUp(false);
						setSearchFocus(false);
					}}
				/>
			</div>
			{/* 
				If users click on the search bar and the + button is pressed -> FountainAdd
				If the user clicks on the searchbar and the + button is not pressed -> FountainSearch
				Else -> FountainsNearby
			*/}
			{searchFocus === true ? (
				<div>
					<div className="nearbyFountainsLabel">Risulati ricerca</div>
				</div>
			) : (
				<div>
					<div className="nearbyFountainsLabel">Fontanelle vicino a te</div>
					<FountainsContainer location={props.location} fountainList={props.fountainList} />
				</div>
			)}
			{/* Add fountain button */}
			<div className={isPopUp ? "circleIcon extendedIcon doneIcon bottomIcon" : "circleIcon addIcon bottomIcon"} onClick={showPopUpAddFountain}>
				<p className="addFountainText" style={{ opacity: isPopUp ? "1" : "0" }}>
					AGGIUNGI FONTANELLA
				</p>
			</div>
		</div>
	);
};

export default Sidebar;
