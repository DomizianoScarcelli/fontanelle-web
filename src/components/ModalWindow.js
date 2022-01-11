import React from "react";
import "../css/ModalWindow.css";

function ModalWindow(props) {
	return (
		<div className="modal">
			<div className="modal-content">
				<p>
					Sei sicuro di voler aggiungere una fontanella in: <br />
					<b>{props.value}</b>?
				</p>
				<div className="horizontalContainer buttonsContainer">
					<button
						className="buttonConfirm"
						onClick={() => {
							props.addFountain();
						}}
					>
						Conferma
					</button>
					<button
						className="buttonCancel"
						onClick={() => {
							props.setShowAddFountainPopUp(false);
						}}
					>
						Annulla
					</button>
				</div>
			</div>
		</div>
	);
}

export default ModalWindow;
