import "../css/Sidebar.css";
import React from "react";
import FountainsContainer from "./FountainsContainer";
import { useState, useRef } from "react";
import CloseIcon from "../res/close_black_24dp.svg";
const Sidebar = (props) => {
	const [isPopUp, setPopUp] = useState(false);

	const popUp = useRef(null);

	const showPopUpAddFountain = () => {
		if (isPopUp) {
			setPopUp(false);
		} else {
			setPopUp(true);
		}
	};

	return (
		<div className="sidebarContainer">
			{/* Searchbar */}
			<div className="searchBoxContainer">
				<input className="searchBox" placeholder="Cerca..." />
			</div>
			<div className="nearbyFountainsLabel">Fontanelle vicino a te</div>
			<FountainsContainer location={props.location} fountainList={props.fountainList} />
			{/* Add fountain button and pop up  */}
			<div className="container" style={{ opacity: isPopUp ? 1 : 0 }}>
				<img className="closeIcon" src={CloseIcon} alt="close icon"></img>
				<input ref={popUp} className="address" name="address" placeholder="Viale Trastevere, 10"></input>
			</div>
			<div className="circleIcon addFountain" onClick={showPopUpAddFountain}></div>
		</div>
	);
};

export default Sidebar;
