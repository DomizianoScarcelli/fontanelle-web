import "../css/FountainAdd.css";
import ArrowBack from "../res/arrow_back_blue_24dp.svg";

function FountainAdd(props) {
	return (
		<div>
			<div className="horizontalContainer">
				<img onClick={props.resetState} src={ArrowBack} alt="back" />
				<div className="greyLabel">Aggiungi una fontanella</div>
			</div>

			<form name="addFountainForm" className="addFountainForm" ref={props.addFountainForm}>
				<div>
					<label>Indirizzo</label>
					<input type="text" name="indirizzo" />
				</div>
			</form>
		</div>
	);
}

export default FountainAdd;
