import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

const CountButton = ({ locked, type, setCount }) => {
	const handelClickMinus = (e) => {
		setCount((prev) => {
			const current = prev - 1;

			if (current < 0) {
				return 0;
			}

			return current;
		});
		e.currentTarget.blur();
	};

	const handelClickPlus = (e) => {
		setCount((prev) => prev + 1);
		e.currentTarget.blur();
	};

	return (
		<button
			disabled={locked}
			onClick={type === "minus" ? handelClickMinus : handelClickPlus}
			className={`count-btn ${
				type === "minus" ? "count-btn--minus" : "count-btn--plus"
			}`}
		>
			{type === "minus" ? (
				<MinusIcon className="count-btn-icon" />
			) : (
				<PlusIcon className="count-btn-icon" />
			)}
		</button>
	);
};

export default CountButton;
