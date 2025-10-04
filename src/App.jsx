import { useEffect } from "react";

import Header from "@components/header/Header";
import Hero from "@components/Hero";
import TrustedByTeams from "@components/TrustedByTeams.jsx";
import HowWeSupportPartners from "@components/HowWeSupportPartners";
import Features from "@components/Features";
import Benifits from "@components/Benifits";
import PricingPlan from "@components/PricingPlan";
import Footer from "@components/footer/Footer";

const App = () => {
	useEffect(() => {
		console.clear();

		console.log("%c⚡ Welcome to Biccas ⚡", "color: #ffffff; background: #000000; font-size:16px; padding:8px 12px; border-radius:8px;");

		console.log("%c👨‍💻 Built by Fazle Rabbi | MERN Stack Developer", "color:#00bcd4; font-size:14px;");

		console.log("%c💡 Tip: Stay curious, keep building!", "color:#4caf50; font-size:13px; font-style:italic;");
	}, []);

	return (
		<>
			<Header />
			<main>
				<Hero />
				<TrustedByTeams />
				<HowWeSupportPartners />
				<Features />
				<Benifits />
				<PricingPlan />
			</main>
			<Footer />
		</>
	);
};

export default App;
