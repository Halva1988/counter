const Title = ({ locked }) => {
	return (
		<h1 className="title">
			{locked ? (
				<span>
					<b>Buy</b> clicks!
				</span>
			) : (
				"Counter"
			)}
		</h1>
	);
};

export default Title;
