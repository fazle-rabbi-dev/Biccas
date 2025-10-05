const Hero = () => {
	return (
		<section className="primary-container relative mt-[30px] lg:mt-[100px] xl:mt-[130px] grid grid-cols-1 lg:grid-cols-2 gap-[35px] ">
			<header className="space-y-[25px] lg:space-y-[35px] xl:space-y-[50px] order-2 lg:order-1 text-center lg:text-start ">
				<h1 className="hero-title ">We’re here to Increase your Productivity</h1>

				{/* ============= Decorative image ============= */}
				<div className="-mt-6">
					<img
						src="images/misc/underline.png"
						alt=""
						aria-hidden="true"
						className="mx-auto lg:mx-0"
					/>
				</div>

				<p className="body-medium">
					Let's make your work more organized and easier using the Taskio Dashboard, with many of the latest features to manage your work every
					day.
				</p>
				<div className="flex justify-center lg:justify-start items-center gap-x-[40px] gap-y-[20px] flex-wrap">
					<a
						href="#"
						className="btn-primary-full-rounded ">
						Try free trial
					</a>
					<a
						href="#"
						className="flex items-center gap-[14px] text-lg font-medium text-dark-50 ">
						<img
							src="images/icons/play.png"
							alt="Play demo"
							className="size-[40px] "
						/>
						<span>View Demo</span>
					</a>
				</div>
			</header>

			<div className="order-1 lg:order-2">
				<img
					src="images/misc/hero-man.png"
					alt="Hero Man"
					className="w-full"
					loading="eager"
					decoding="async"
					height={600}
				/>
			</div>
		</section>
	);
};

export default Hero;
