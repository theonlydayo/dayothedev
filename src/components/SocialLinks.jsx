
import data from "../data";

const { socials } = data;

const SocialLinks = () => {
	return (
		<ul className="flex items-center space-x-3 md:space-x-0 md:justify-start md:flex-col">
			{socials.map((social) => (
				<li key={social.id}>
					<a
						href={social.link}
						title={social.name}
						className="p-[10px] inline-block transition-normal hover:-translate-y-[3px] hover:text-white text-mono-gray"
						target="_blank"
						rel="noreferrer"
					>
						<social.icon size={20} />
					</a>
				</li>
			))}
			<span className="hidden md:block w-[1px] h-[90px] bg-mono-gray-dark mt-5 mx-auto"></span>
		</ul>
	);
};

export default SocialLinks;
