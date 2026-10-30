
/* eslint-disable react/prop-types */

const buttonStyles =
	"relative block transition-normal border rounded-md border-white hover:-translate-x-1 hover:-translate-y-1 text-white";

const Button = ({ children, className, innerClassName, bgColor, onClick }) => {
	return (
		<button
			className={`relative block focus:outline-none capitalize ${className || ""}`}
			onClick={onClick}
		>
			<span
				className={`${buttonStyles} ${innerClassName || "px-4 py-2"} ${
					bgColor || "bg-black"
				}`}
			>
				{children}
			</span>

			<span className="absolute inset-0 rounded-md -z-10 bg-white"></span>
		</button>
	);
};

export default Button;
