/* eslint-disable react/prop-types */

const buttonStyles =
	"relative block transition-normal border rounded-md border-white hover:-translate-x-1 hover:-translate-y-1 text-white";

const ButtonLink = ({ children, href, className, bgColor, download, target }) => {
	return (
		<a
			className="relative focus:outline-none capitalize"
			href={href}
			target={target}
			download={download}
			rel={target === "_blank" ? "noreferrer" : undefined}
		>
			<span
				className={`${buttonStyles} ${className || "px-4 py-2"} ${
					bgColor || "bg-black"
				}`}
			>
				{children}
			</span>

			<span className="absolute inset-0 rounded-md -z-10 bg-white"></span>
		</a>
	);
};

export default ButtonLink;