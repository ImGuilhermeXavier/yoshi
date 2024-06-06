import { tv } from "tailwind-variants";

const green = tv({
	base: "absolute h-16 w-11 rounded-full",
	variants: {
		part: {
			outside: "bg-green-light top-1",
			inside: "bg-white top-3",
		},
		isFirst: {
			true: "left-1",
		},
	},
});

const black = tv({
	base: "absolute left-2 top-7 h-8 w-3 rounded-full bg-gray ",
	variants: {
		isFirst: {
			true: "left-6",
		},
	},
});

interface IEye {
	isFirst?: boolean;
}

function Eye({ isFirst = false }: IEye) {
	return (
		<div className="relative">
			<div className="h-24 w-12 rounded-full bg-gray -mb-14"></div>
			<div className={green({ isFirst, part: "outside" })}></div>
			<div className={green({ isFirst, part: "inside" })} />
			<div className={black({ isFirst })} />
		</div>
	);
}

export default Eye;
