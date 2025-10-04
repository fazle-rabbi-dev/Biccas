import { useState, useEffect } from "react";
import clsx from "clsx";
import { navLinks } from "@lib/constants";

const DesktopNav = () => {
	const [activeLink, setActiveLink] = useState(window.location.pathname + window.location.hash);

	useEffect(() => {
		const updateActiveLink = () => {
			setActiveLink(window.location.pathname + window.location.hash);
		};

		window.addEventListener("hashchange", updateActiveLink);
	}, []);

	const isActive = (href) => {
		if (href === "/") return activeLink === "/";
		return activeLink === window.location.pathname + href;
	};

	return (
		<nav>
			<ul className="hidden lg:flex items-center gap-x-[40px]">
				{navLinks.map((item) => (
					<li key={item.name}>
						<a
							href={item.href}
							className={clsx(isActive(item.href) ? "link-active" : "link-inactive")}>
							{item.name}
						</a>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default DesktopNav;
