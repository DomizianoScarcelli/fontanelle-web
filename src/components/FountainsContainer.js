import "../css/Fountain.css";
import { FountainItem } from "./FountainItem";
import { useState } from "react";
import FountainDetails from "./FountainDetails";
import ModalWindow from "./ModalWindow";

const FountainContainer = (props) => {
	const [details, setDetails] = useState(null);
	const [showCancelFountainPopUp, setShowCancelFountainPopUp] = useState(false);

	let detailsHtml = "";
	if (details != null)
		detailsHtml = (
			<FountainDetails
				fountain={details}
				onClose={() => {
					setDetails(null);
				}}
				onClick={() => {
					setShowCancelFountainPopUp(true);
				}}
			></FountainDetails>
		);

	return (
		<div>
			{showCancelFountainPopUp ? (
				/*Show modal*/
				<ModalWindow
					message={"Sei sicuro di voler rimuovere la fontanella in:"}
					value={"NOME FONTANELLA"}
					onClick={() => {
						console.log("Fontanella eliminata");
					}}
					onCancel={() => {
						setShowCancelFountainPopUp(false);
					}}
				/>
			) : null}
			<div className="greyLabel">Fontanelle vicino a te</div>
			<div className="outerFountainContainer">
				<div className="fountainContainer">
					{props.fountainList.map((data) => {
						return (
							<div>
								{data === details ? (
									detailsHtml
								) : (
									<FountainItem
										onClick={() => {
											setDetails(data);
										}}
										position={{ lat: data.Latitude, lng: data.Longitude }}
										key={data.ID}
										distance={data.distance}
									/>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default FountainContainer;
