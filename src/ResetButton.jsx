import { ResetIcon } from "@radix-ui/react-icons";

const ResetButton = ({ reset }) => {
	const handelClickReset = (e) => {
		reset(0);
		e.currentTarget.blur();
	};
	return (
		<button className="reset-btn" onClick={handelClickReset}>
			<ResetIcon className="reset-btn-icon"/>
		</button>
	);
};

export default ResetButton;
