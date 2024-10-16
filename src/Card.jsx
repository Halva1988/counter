import { useEffect, useState } from "react";
import Count from "./Count";
import ButtonContainer from "./ButtonContainer";
import ResetButton from "./ResetButton";
import Title from "./Title";
import CountButton from "./CountButton";

const Card = () => {
	const [count, setCount] = useState(0);
	const locked = count === 7 ? true : false;

	useEffect(() => {
		const handelKeydown = (e) => {
			if (!locked && e.code === "Space") {
				setCount(count + 1);
			}
		};

		window.addEventListener("keydown", handelKeydown);

		return () => {
			window.removeEventListener("keydown", handelKeydown);
		};
	}, [count, locked]);

	return (
		<div className={`card ${locked && "card--limit"}`}>
			<Title locked={locked} />
			<Count number={count} />
			<ResetButton reset={setCount} />
			<ButtonContainer>
				<CountButton locked={locked} type="minus" setCount={setCount} />
				<CountButton locked={locked} type="plus" setCount={setCount} />
			</ButtonContainer>
		</div>
	);
};

export default Card;
