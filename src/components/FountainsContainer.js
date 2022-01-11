import "../css/Fountain.css";
import { FountainItem } from "./FountainItem";
import { useState } from "react";
import FountainDetails from "./FountainDetails";
import ModalWindow from "./ModalWindow";

const FountainContainer = (props) => {
	const [details, setDetails] = useState(null);
	const [showCancelFountainPopUp, setShowCancelFountainPopUp] = useState(false);

	const removeFountain = async (id) => {
		const res = await fetch(`https://fontanelle-api.test.sapienzaapps.it/fountains/${id}/`, { method: "DELETE" });
	};

	return (
		<div>
			{showCancelFountainPopUp ? (
				/*Show modal*/
				<ModalWindow
					message={"Sei sicuro di voler rimuovere la fontanella in:"}
					value={"NOME FONTANELLA"}
					onClick={() => {
						removeFountain(details.ID);
						setShowCancelFountainPopUp(false);
						window.location.reload();
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
									<FountainDetails
										fountain={details}
										onClose={() => {
											setDetails(null);
										}}
										onClick={() => {
											setShowCancelFountainPopUp(true);
										}}
									></FountainDetails>
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
