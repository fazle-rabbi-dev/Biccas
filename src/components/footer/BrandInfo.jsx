import Logo from "@components/Shared/Logo";

const BrandInfo = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("🎉 Thanks for joining us!");
	};

	return (
		<div className="space-y-[30px] ">
			<Logo />
			<p className="body-medium text-muted">Get started noew try our product</p>

			<form
				onSubmit={handleSubmit}
				aria-label="Subscribe to Biccas newsletter">
				<div className="relative h-[60px] rounded-full px-[20px] py-[15px] border-2 border-muted ">
					<input
						type="email"
						id="footer-email"
						name="email"
						placeholder="Enter your email here"
						required
						className="outline-0 size-full placeholder:body-medium placeholder:text-muted "
					/>
					<div className="absolute top-1 right-[7px] size-[46px] flex justify-center items-center rounded-full bg-accent ">
						<button
							type="submit"
							aria-label="Subscribe">
							<img
								src="images/icons/arrow-right.png"
								alt="Arrow right"
								className=""
							/>
						</button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default BrandInfo;
