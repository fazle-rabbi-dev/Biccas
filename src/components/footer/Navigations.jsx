import { footerNavigationData } from "@lib/constants";

const Navigations = () => {
	return (
		// Container for entire navigation area (right column of second row)
		<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 ">
			{footerNavigationData?.map((navColumn) => (
				<nav
					key={navColumn.title}
					className="body-medium">
					<h4 className="">{navColumn?.title}</h4>
					<ul className="mt-[30px] space-y-7 ">
						{navColumn?.links.map((link) => (
							<li key={link.name}>
								<a
									key={link.href}
									href={link.href}
									className="text-muted">
									{link.name}
								</a>
							</li>
						))}
					</ul>
				</nav>
			))}
		</div>
	);
};

export default Navigations;
