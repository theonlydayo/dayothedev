/* eslint-disable react/prop-types */

const Card = ({ className, children }) => {
	return (
		<div
			className={`rounded-md bg-black-light shadow-normal ${className || ""}`}
		>
			{children}
		</div>
	);
};

export default Card;
