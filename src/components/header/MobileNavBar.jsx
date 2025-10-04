import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";
import { navLinks } from "@lib/constants";

const MobileNavBar = () => {
	const [activeLink, setActiveLink] = useState(window.location.pathname + window.location.hash);

	useEffect(() => {
		const updateActiveLink = () => {
			setActiveLink(window.location.pathname + window.location.hash);
		};

		window.addEventListener("hashchange", updateActiveLink);

		return () => {
			window.removeEventListener("hashchange", updateActiveLink);
		};
	}, []);

	const isActive = (href) => {
		if (href === "/") return activeLink === "/";

		return activeLink === window.location.pathname + href;
	};

	return (
		<nav>
			<ul className="flex flex-col items-center gap-7 leading-[10px] text-secondary ">
				{navLinks?.map((item) => {
					return (
						<li key={item.name}>
							<a
								href={item.href}
								className={clsx(isActive(item.href) ? "link-active" : "link-inactive")}>
								{item.name}
							</a>
						</li>
					);
				})}
			</ul>
		</nav>
	);
};

export default MobileNavBar;
