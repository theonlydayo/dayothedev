/* eslint-disable react/prop-types */
import useHover from "../../hooks/use-hover";

const ProjectImage = ({ live, isOdd, image }) => {
	const [isHovering, handleMouseOver, handleMouseOut] = useHover();

	return (
		<a
			href={live}
			target="_blank"
			rel="noreferrer"
			className={`project-image ${isOdd && "min-[1200px]:order-2"}`}
			onMouseOver={handleMouseOver}
			onMouseOut={handleMouseOut}
		>
			<div
				className={`transition-normal ease-out ${
					isHovering && "grayscale"
				}`}
			>
				<img
					src={image}
					alt="project image"
					className="block w-full h-auto object-cover"
				/>
			</div>
		</a>
	);
};

export default ProjectImage;