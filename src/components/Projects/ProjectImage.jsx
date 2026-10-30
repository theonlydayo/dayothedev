
/* eslint-disable react/prop-types */
import useHover from "../../hooks/use-hover";

const ProjectImage = ({ live, isOdd, image }) => {
	const [isHovering, handleMouseOver, handleMouseOut] = useHover();

	console.log("Project image:", image);

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
					isHovering ? "grayscale" : ""
				}`}
			>
				<img
					src={image}
					alt="Project screenshot"
					className="block w-full h-auto object-cover"
					onLoad={() => console.log("Image loaded:", image)}
					onError={() => console.error("Image failed:", image)}
				/>
			</div>
		</a>
	);
};

export default ProjectImage;
