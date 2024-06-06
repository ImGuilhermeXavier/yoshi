import { useState } from "react";
import Head from "./components/Head";

function App() {
	const [count, setCount] = useState(0);

	return (
		<section className="flex items-center justify-center h-svh bg-amber-900 -z-20">
			<Head />
		</section>
	);
}

export default App;
