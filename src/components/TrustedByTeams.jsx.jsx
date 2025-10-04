import { companyLogos } from "@lib/constants";
import Section from "./Shared/Section";

const TrustedByTeams = () => {
	return (
		<Section className="text-center">
			<h2 className="h2-bold-sm">More than 25,000 teams use Collabs</h2>
			<div className="mt-[40px] lg:mt-[60px] flex flex-wrap justify-center items-center gap-x-[50px] gap-y-[30px] ">
				{companyLogos?.map((logo) => (
					<img
						key={logo.id}
						src={logo.src}
						alt={logo.alt}
						className="w-[180px] h-[38px] "
					/>
				))}
			</div>
		</Section>
	);
};

export default TrustedByTeams;
