import Check from "./Check";
import Eyes from "./Eyes";
import Nose from "./Nose";

function Head() {
	return (
		<article className="relative">
			<Eyes />
			<Check />
			<Nose />
		</article>
	);
}

export default Head;
