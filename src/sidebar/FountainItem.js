import "./FountainItem.css";
import FountainLogo from "../res/place_black_24dp.svg";

export const FountainItem = () => {
	return (
		<div class="fountainContainer">
			<img src={FountainLogo} class="fountainLogo" alt="fountain-logo" />
			<div class="fountainInfoContainer">
				<div class="fountainAddress">Via di casal selce, 294</div>
				<div class="fountainDistance">3,4km</div>
			</div>
		</div>
	);
};
