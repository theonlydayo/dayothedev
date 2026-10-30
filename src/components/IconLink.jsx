
/* eslint-disable react/prop-types */
const IconLink = ({ href, title, className, children }) => {
	return (
		<a
			href={href}
			target="_blank"
			rel="noreferrer"
			title={title}
			className={`transition-normal text-mono-gray hover:text-white focus:text-white ${className || ""}`}
		>
			{children}
		</a>
	);
};

export default IconLink;
