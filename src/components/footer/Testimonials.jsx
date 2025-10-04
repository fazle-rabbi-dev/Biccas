import Customers from "./Customers";

const Testimonials = () => {
	return (
		<section className="space-y-[42px]">
			<header className="space-y-[20px] ">
				<h2 className="h2-semibold">People are Saying About DoWhith</h2>
				<p className="body-medium text-muted ">Everything you need to accept to payment and grow your money of manage anywhere on planet</p>
			</header>

			<figure className="space-y-[40px]">
				<img
					src="images/icons/quote.png"
					alt="Quotation"
					className="w-[45px] h-[38px] "
				/>
				<blockquote cite="[A URL for the source, if available]">
					<p className="body-medium text-muted">
						I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even
						I can pay a short time <span aria-hidden="true">😍</span>
					</p>
				</blockquote>

				<figcaption>
					<cite className="body-medium text-muted">_Aria Zinanrio</cite>
				</figcaption>
			</figure>

			<ul
				className="flex flex-wrap items-center gap-x-[20px] gap-y-3 "
				role="list"
				aria-label="Profiles of satisfied customers">
				<Customers />
			</ul>
		</section>
	);
};

export default Testimonials;
