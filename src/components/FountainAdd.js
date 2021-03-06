import "../css/FountainAdd.css";
import "@reach/combobox/styles.css";
import ArrowBack from "../res/arrow_back_blue_24dp.svg";
import { Combobox, ComboboxInput, ComboboxPopover, ComboboxOption } from "@reach/combobox";
import usePlacesAutocomplete from "use-places-autocomplete";
import ModalWindow from "./ModalWindow";

function FountainAdd(props) {
	const {
		ready,
		value,
		suggestions: { status, data },
		setValue,
		clearSuggestions,
	} = usePlacesAutocomplete({
		requestOptions: {
			location: { lat: () => 41.90966526061749, lng: () => 12.349924969103029 }, //TODO cambia in modo da prendere location attuale
			radius: 100 * 1000,
		},
	});

	return (
		<div>
			{props.showAddFountainPopUp ? (
				/*Show modal*/
				<ModalWindow
					message={"Sei sicuro di voler aggiungere la fontanella in:"}
					value={value}
					onClick={async () => {
						await props.addFountain();
						window.location.reload();
					}}
					onCancel={() => {
						props.setShowAddFountainPopUp(false);
					}}
				/>
			) : null}
			<div className="horizontalContainer">
				<img onClick={props.resetState} src={ArrowBack} alt="back" />
				<div className="greyLabel">Aggiungi una fontanella</div>
			</div>

			<form name="addFountainForm" className="addFountainForm">
				<div>
					<label>Indirizzo</label>
					<Combobox
						onSelect={(address) => {
							setValue(address);
							clearSuggestions();
						}}
					>
						<ComboboxInput
							ref={props.inputAddress}
							value={value}
							onChange={(e) => {
								setValue(e.target.value);
							}}
							disabled={!ready}
							placeholder="Viale Trastevere, 46"
						/>
						<ComboboxPopover>{status === "OK" && data.map(({ id, description }) => <ComboboxOption key={id} value={description} />)}</ComboboxPopover>
					</Combobox>
				</div>
			</form>
		</div>
	);
}

export default FountainAdd;
