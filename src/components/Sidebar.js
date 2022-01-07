import "../css/Sidebar.css";
import React from "react";
import FountainsContainer from "./FountainsContainer";
import { useState, useRef } from "react";
import FountainAdd from "./FountainAdd";
import { getCoordinatesFromAddress } from "../utils/LocationUtils.js";

const Sidebar = (props) => {
	/**
	 * True if the fountain is clicked and the pop up has to be shown
	 */
	const [isPopUp, setPopUp] = useState(false);
	/**
	 * True if the searchbar has focus
	 */
	const [searchFocus, setSearchFocus] = useState(false);

	const addButton = useRef(null);
	const inputAddress = useRef(null);
	const searchBar = useRef(null);

	const resetState = () => {
		setPopUp(false);
		setSearchFocus(false);
	};

	const addFountain = async () => {
		if (inputAddress.current.value != "") {
			console.log(inputAddress.current.value);
			const { lat, lng } = await getCoordinatesFromAddress(inputAddress.current.value);
			console.log(lat, lng);
		}
	};

	const showPopUpAddFountain = () => {
		setPopUp(true);
	};

	return (
		<div className="sidebarContainer">
			{/* 
				If users click on the search bar and the + button is pressed -> FountainAdd
				If the user clicks on the searchbar and the + button is not pressed -> FountainSearch
				Else -> FountainsNearby
			*/}

			{searchFocus ? (
				<div>
					{/* Searchbar */}
					<div className="searchBoxContainer">
						<input
							className="searchBox"
							ref={searchBar}
							placeholder="Cerca..."
							autoFocus={true}
							onFocus={() => {
								setSearchFocus(true);
							}}
							onBlur={() => {
								setPopUp(false);
								setSearchFocus(false);
							}}
						/>
					</div>
					<div className="greyLabel">Risulati ricerca</div>
				</div>
			) : isPopUp ? (
				<div>
					<FountainAdd resetState={resetState} addButton={addButton} inputAddress={inputAddress} />
				</div>
			) : (
				<div>
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
					<FountainsContainer location={props.location} fountainList={props.fountainList} />
				</div>
			)}

			{/* Add fountain button */}
			<div ref={addButton} className={isPopUp ? "circleIcon extendedIcon doneIcon bottomIcon" : "circleIcon addIcon bottomIcon"} onClick={isPopUp ? addFountain : showPopUpAddFountain}>
				<p className="addFountainText" style={{ opacity: isPopUp ? "1" : "0" }}>
					AGGIUNGI FONTANELLA
				</p>
			</div>
		</div>
	);
};

export default Sidebar;
