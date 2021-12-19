import "./FountainItem.css";
import FountainLogo from "../res/place_black_24dp.svg";

export const FountainItem = () => {
	return (
		<div className="fountainContainer">
			<img src={FountainLogo} class="fountainLogo" alt="fountain-logo" />
			<div className="fountainInfoContainer">
				<div className="fountainAddress">Via di casal selce, 294</div>
				<div className="fountainDistance">3,4km</div>
			</div>
		</div>
	);
};
