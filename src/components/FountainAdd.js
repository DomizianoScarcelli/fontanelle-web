import "../css/FountainAdd.css";
import ArrowBack from "../res/arrow_back_blue_24dp.svg";

function FountainAdd(props) {
	return (
		<div>
			<div className="horizontalContainer">
				<img onClick={props.onClose} src={ArrowBack} alt="back" />
				<div className="greyLabel">Aggiungi una fontanella</div>
			</div>

			<form className="addFountainForm">
				<div>
					<label>Indirizzo</label>
					<input type="text"></input>
				</div>
				<div>
					<label>Stato</label>
					<div className="dropdownMenu"></div>
				</div>
			</form>
		</div>
	);
}

export default FountainAdd;
