import Tongue from "./Tongue";

function Nose() {
	return (
		<div
			className="group relative"
			onClick={() => alert("Watch out his nose!")}
		>
			<Tongue />
			<div className="h-32 rounded-full aspect-square bg-green-dark border-4 border-gray hover:bg-green-light transition cursor-pointer"></div>
			<div className="absolute top-8  w-full flex justify-center gap-3.5 left-0">
				<div className=" h-2 rounded-full aspect-square bg-gray"></div>
				<div className=" h-2 rounded-full aspect-square bg-gray"></div>
			</div>
		</div>
	);
}

export default Nose;
