
import ButtonLink from "../UI/ButtonLink";
import Heading from "../animation components/Heading";
import DivContainer from "../animation components/DivContainer";

/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
	return (
		<section id="contact" className="section mb-[50px]">
			<Heading className="numbered-heading" data-num="03">
				Contact
			</Heading>

			<DivContainer
				delay={0.4}
				className="text-center flex flex-col items-center max-w-[600px] mx-auto pt-10"
			>
				<h2 className="text-4xl md:text-5xl text-white capitalize mb-3 md:mb-4">
					Get in touch
				</h2>

				<p className="mb-12 text-mono-gray">
					I'm always open to new opportunities, collaborations,
					and interesting projects. Whether you have a question,
					want to discuss an idea, or simply want to connect,
					feel free to reach out. I'd love to hear from you!
				</p>

				<ButtonLink
					className="py-3 px-10"
					href="mailto:adedayoogunwolu@gmail.com"
				>
					Say hello
				</ButtonLink>
			</DivContainer>
		</section>
	);
};

export default Contact;
