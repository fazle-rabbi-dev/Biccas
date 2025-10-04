import { benifits } from "@lib/constants";
import Section from "./Shared/Section";

const Benifits = () => {
	return (
		<Section className="grid grid-cols-1 lg:grid-cols-2 gap-x-[40px] lg:gap-x-[65px] ">
			<div className="">
				<header>
					<h2 className="h2-bold">What Benifit Will You Get</h2>
				</header>
				<ul className="mt-8 lg:mt-12 space-y-7 ">
					{benifits?.map(({ icon, title }) => (
						<li
							key={title}
							className="flex items-center gap-x-[10px] xl:gap-x-[20px] ">
							<img
								src={icon}
								alt="Check mark"
								className="size-8"
							/>
							<span className="body-medium">{title}</span>
						</li>
					))}
				</ul>
			</div>

			<div className="mt-8 lg:mt-0 lg:flex lg:justify-end">
				<div className="relative">
					<img
						src="images/misc/laptop.png"
						alt="Laptop at desk"
						className=" w-full h-full max-w-[450px] max-h-[529px] mx-auto"
					/>

					{/* ============= Laptop image + overlays ============= */}
					<img
						src="images/misc/Group 111.png"
						alt=""
						className="absolute top-[36px] left-0 lg:left-[-124px] "
					/>
					<img
						src="images/misc/Group 112.png"
						alt=""
						className="absolute top-[121px] right-[10px] 2xl:right-[-69px] "
					/>
					<img
						src="images/misc/Group 113.png"
						alt=""
						className="absolute top-[200px] lg:top-[275px] left-0 lg:left-[-70px] "
					/>
					<img
						src="images/misc/Group 114.png"
						alt=""
						className="absolute left-0 lg:left-[-106px] bottom-[-14px] "
					/>
				</div>
			</div>
		</Section>
	);
};

export default Benifits;
