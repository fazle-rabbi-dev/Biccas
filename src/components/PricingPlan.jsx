import { pricingPlans } from "@lib/constants";
import Section from "./Shared/Section";
import PricingCard from "./PricingCard";

const PricingPlan = () => {
	return (
		<Section className="relative">
			{/* ============= Gradient Effect ============= */}
			<div className="size-[1200px] -z-10 absolute right-0 top-[-60%] pointer-events-none">
				<img
					src="images/misc/Ellipse-40.avif"
					alt=""
					className="w-full h-full"
				/>
			</div>

			<header className="space-y-[20px] lg:space-y-[40px] lg:text-center ">
				<h2 className="h2-bold leading-[73px]">Choose Plan That’s Right For You</h2>
				<p className="body-bold text-muted">Choose plan that works best for you, feel free to contact us</p>
				<div className="w-full sm:w-[345px] xsm:h-[70px] mx-auto flex flex-col xsm:flex-row justify-center items-center gap-y-4 rounded-[10px] bg-white shadow-minimal py-[20px] pr-[7px] ">
					<button className="body-medium px-[37px]">Bill Monthly</button>
					<button className="w-[160px] h-[56px] rounded-[10px] bg-accent body-medium text-white ">Bill Yearly</button>
				</div>
			</header>

			{/* ============= Pricing Cards ============= */}
			<div className="mt-[52px] lg:mt-[67px] grid grid-cols-1 lg:grid-cols-3 gap-x-[3px] xl:gap-x-[29px] gap-y-4 items-center ">
				{pricingPlans?.map((plan) => (
					<PricingCard
						key={plan.name}
						{...plan}
					/>
				))}
			</div>
		</Section>
	);
};

export default PricingPlan;
