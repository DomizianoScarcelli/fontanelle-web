import "./Fountain.css";
import FountainLogo from "../res/place_black_24dp.svg";

export const FountainItem = (props) => {
	return (
		<div className="itemContainer">
			<img src={FountainLogo} class="fountainLogo" alt="fountain-logo" />
			<div className="fountainInfoContainer">
				<div className="fountainAddress">{props.address}</div>
				<div className="fountainDistance">3,4km</div>
			</div>
		</div>
	);
};
