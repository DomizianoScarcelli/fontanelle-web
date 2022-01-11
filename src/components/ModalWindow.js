import React from "react";
import "../css/ModalWindow.css";

function ModalWindow(props) {
	return (
		<div className="modal">
			<div className="modal-content">
				<p>
					{props.message} <br />
					<b>{props.value}</b>?
				</p>
				<div className="horizontalContainer buttonsContainer">
					<button className="buttonConfirm" onClick={props.onClick}>
						Conferma
					</button>
					<button className="buttonCancel" onClick={props.onCancel}>
						Annulla
					</button>
				</div>
			</div>
		</div>
	);
}

export default ModalWindow;
