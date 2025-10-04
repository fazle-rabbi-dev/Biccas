import Section from "./Shared/Section";
import { features } from "@lib/constants";

const Features = () => {
	return (
		<Section className="">
			<header className="grid grid-cols-1 xl:grid-cols-3 items-center gap-x-4 lg:gap-x-[40px] 2xl:gap-x-[113px] gap-y-4 ">
				<h2 className="h2-semibold">Our Features you can get</h2>
				<div className="col-span-2 flex flex-col md:flex-row justify-between md:items-center gap-x-4 lg:gap-x-[70px] 2xl:gap-x-[113px] gap-y-4">
					<p className="flex-1 body-medium text-muted">
						We offer a variety of interesting features that you can help increase yor productivity at work and manage your projrct esaly
					</p>
					<div className="">
						<a
							href="#"
							className="inline-block btn-primary-full-rounded">
							Get Started
						</a>
					</div>
				</div>
			</header>

			<div className="mt-[50px] lg:mt-[74px] grid grid-cols-1 md:grid-cols-3 gap-x-4 lg:gap-x-8 2xl:gap-x-11 gap-y-8 ">
				{features?.map((feature) => (
					<div
						key={feature.title}
						className="">
						<img
							src={feature.image}
							alt={feature.title}
							className="w-full xsm:max-w-sm xsm:mx-auto md:max-w-full"
						/>
						<div className="mt-7 space-y-[10px] 2xl:space-y-[20px] ">
							<h3 className="feature-card-title">{feature.title}</h3>
							<p className="body-medium text-muted ">{feature.description}</p>
						</div>
					</div>
				))}
			</div>
		</Section>
	);
};

export default Features;
