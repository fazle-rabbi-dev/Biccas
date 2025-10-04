const MessageForm = () => {
	const handleSubmit = (e) => {
		e.preventDefault();
		alert("📩 We got your message! Thanks for contacting us.");
	};

	return (
		<section className="bg-[#222938] px-4 sm:px-5 lg:px-10 xl:px-[86px] py-[40px] space-y-[10px] rounded-[20px] ">
			<img
				src="images/icons/coin.png"
				alt="Coin icon"
				className="w-[72px] h-[86px] mx-auto "
			/>
			<h3 className="footer-form-title">Get Started</h3>

			<form
				onSubmit={handleSubmit}
				className="space-y-[20px] ">
				<label
					className="block body-medium"
					htmlFor="email-input">
					Email
				</label>
				<input
					type="email"
					id="email-input"
					name="email"
					placeholder="Enter your email"
					required
					className="footer-form-input placeholder:base-medium"
				/>

				<label
					className="block body-medium"
					htmlFor="message-input">
					Message
				</label>
				<textarea
					id="message-input"
					name="message"
					placeholder="What are you say ?"
					rows="3"
					className="resize-none footer-form-input placeholder:base-medium"></textarea>

				<button
					type="submit"
					className="footer-form-button">
					Request Demo
				</button>
			</form>

			<p className="text-end small-medium ">
				<span className="text-muted">or</span>{" "}
				<a
					className="text"
					href="#">
					Start Free Trial
				</a>
			</p>
		</section>
	);
};

export default MessageForm;
