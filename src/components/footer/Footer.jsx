import Testimonials from "./Testimonials";
import MessageForm from "./MessageForm";
import BrandInfo from "./BrandInfo";
import Navigations from "./Navigations";

const Footer = () => {
	return (
		<footer className="mt-[70px] lg:mt-[100px] 2xl:mt-[133px] bg-footer text-white pt-[50px] lg:pt-[70px] 2xl:pt-[127px] pb-[43px] ">
			{/*
			 * =========================================================== *
			 *							CONTAINER
			 * =========================================================== *
			 */}
			<div className="primary-container">
				{/* ============= First row ============= */}
				<div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-x-6 gap-y-10 lg:gap-x-8 ">
					<Testimonials />
					<MessageForm />
				</div>

				{/* ============= Second row ============= */}
				<section className="mt-[70px] grid grid-cols-1 lg:grid-cols-3 gap-x-4 gap-y-8 lg:gap-x-16">
					<BrandInfo />
					<Navigations />
				</section>

				{/* ============= Bottom row ============= */}
				<div className="mt-[70px] flex flex-wrap items-center justify-between gap-y-6 body-medium">
					<p className="">&copy; 2022 Biccas Inc. Copyright and rights reserved</p>

					<nav
						className="flex flex-wrap items-center gap-x-[18px] "
						aria-label="Legal Links">
						<a href="/terms-and-conditions">Terms and Conditions</a>
						<span>•</span>
						<a href="/privacy-policy">Privacy Policy</a>
					</nav>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
