import { howWeSupportPartners } from "@lib/constants";
import Section from "./Shared/Section";

const Supports = () => {
	return (
		<Section className="grid grid-cols-1 lg:grid-cols-2 gap-x-[27px] gap-y-[35px] py-[40px] xl:py-[60px] bg-[#F9F8FE] ">
			{/*
			 * =========================================================== *
			 *							LEFT COLUMN
			 * =========================================================== *
			 */}
			<header className="">
				<h2 className="h2-bold">How we support our partner all over the world</h2>
				<p className="base-medium mt-[30px]">
					SaaS become a common delivery model for many business application, including office software, messaging software, payroll processing
					software, DBMS software, management software
				</p>
				<div className="mt-[30px] lg:mt-[73px] flex flex-wrap items-center gap-x-[20px] lg:gap-x-[80px] ">
					<div className="space-y-[18px] ">
						<img
							src="images/misc/5star.png"
							alt="5 Star"
							className=""
						/>
						<p className="">
							<span className="font-bold">4.9</span>
							<span> / </span>
							<span className="font-medium">5 rating</span>
						</p>
						<p className="text-lg font-bold text-muted ">Databricks</p>
					</div>
					<div className="space-y-[18px] ">
						<img
							src="images/misc/4star.png"
							alt="5 Star"
							className=""
						/>
						<p className="">
							<span className="body-bold">4.8</span>
							<span> / </span>
							<span className="body-medium">5 rating</span>
						</p>
						<p className="body-bold text-muted ">Chainalysis</p>
					</div>
				</div>
			</header>

			{/*
			 * =========================================================== *
			 *							RIGHT COLUMN
			 * =========================================================== *
			 */}
			<ul className="space-y-[30px] ">
				{howWeSupportPartners?.map((item) => (
					<li
						key={item.id}
						className="flex items-start gap-x-[21px] ">
						<div className="size-[60px] bg-white flex items-center justify-center shadow-[0px_4px_9px_rgba(0,0,0,0.05)]">
							<img
								src={item.icon}
								alt={item.title}
								className="size-[30px]"
							/>
						</div>
						<div className="flex-1 space-y-[10px] ">
							<h3 className="support-card-title">{item.title}</h3>
							<p className="body-medium text-muted">{item.description}</p>
						</div>
					</li>
				))}
			</ul>
		</Section>
	);
};

export default Supports;
