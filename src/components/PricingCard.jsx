import clsx from "clsx";

const PricingCard = ({ name, price, description, features, buttonText, save }) => {
	const isProPlan = name === "Pro";

	return (
		<article
			className={clsx(
				"relative rounded-[20px] pt-[40px] pb-[24px] overflow-y-hidden",
				isProPlan ? "bg-accent text-white" : "border border-black-2/10 "
			)}>
			{/* ============= CIRCLE OVERLAY ON THE PRO PLAN CARD ============= */}
			{isProPlan && (
				<div className="absolute top-[24%] bottom-0 inset-x-0 pointer-events-none ">
					<img
						src="images/misc/circle-bg.png"
						alt=""
						className="w-full h-full"
					/>
				</div>
			)}

			{/* ============= CARD HEADER ============= */}
			<header className="max-w-sm mx-auto relative space-y-[10px] text-center px-[60px] 2xl:px-[82px]">
				<h3 className="pricing-card-title">{name}</h3>
				<p className={clsx("body-medium", isProPlan ? "text-white " : "text-muted")}>{description}</p>
				<p className="mt-[39px] relative">
					<span className={clsx("absolute top-[-26px]", !isProPlan && "text-muted")}>$</span>
					<span className="pricing-card-price pl-3">{price}</span>
				</p>
				{isProPlan && <button className="h-[40px] rounded-[10px] bg-[#85DAB9] px-[10px] py-[5px] ">{save}</button>}
			</header>

			{/* ============= CARD MAIN CONTENT ============= */}
			<div className="relative mt-[30px] bg-white rounded-[10px] text-black-2 mx-[20px] px-[37px] py-[25px]">
				<div className="">
					<ul className="space-y-[22px]">
						{features?.map((feature) => (
							<li
								key={feature}
								className="flex gap-x-[10px]">
								<img
									src="images/icons/check.png"
									alt="Check mark"
									className="size-[26px] "
								/>
								<span>{feature}</span>
							</li>
						))}
					</ul>
					<button className={clsx("mt-[27px] w-full", isProPlan ? "pricing-card-button-green" : "pricing-card-button-white shadow-minimal")}>
						{buttonText}
					</button>
				</div>
			</div>
		</article>
	);
};

export default PricingCard;
