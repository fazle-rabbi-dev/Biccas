import { useState } from "react";
import { Menu, X } from "lucide-react";

import Logo from "../Shared/Logo";
import DesktopNavBar from "./DesktopNavBar";
import UserActions from "./UserActions";
import MobileNavBar from "./MobileNavBar";

const Header = () => {
	const [isOpenMenu, setIsOpenMenu] = useState(false);

	const toggleMenu = () => {
		setIsOpenMenu((prev) => !prev);

		// * NOTE: isOpenMenu here refers to the previous state, so the scrollbar will be hidden when opening the menu and restored when closing.
		document.body.style.overflow = isOpenMenu ? "auto" : "hidden";
	};

	return (
		<div className="relative">
			<header className="relative max-w-[1440px] mx-auto flex items-center justify-between lg:mt-[20px] px-4 lg:px-10 py-3">
				{/* ============= Gradient Effect - Top Left ============= */}
				<div className="-z-10 absolute left-0 -top-10">
					<img
						src="images/misc/Ellipse-36.avif"
						alt=""
						className="w-full"
					/>
				</div>

				{/* ============= Gradient Effect - Top Right Bottom ============= */}
				<div className="-z-10 absolute right-0 -top-10">
					<img
						src="images/misc/Ellipse-37.avif"
						alt=""
						className="w-full"
					/>
				</div>

				{/*
				 * =========================================================== *
				 *							HEADER CONTENT
				 * =========================================================== *
				 */}
				<Logo />

				<div className="flex-1 flex justify-end items-center gap-4">
					<div className="flex items-center lg:gap-x-[130px] ">
						<DesktopNavBar />
						<UserActions />
					</div>
					<Menu
						className="lg:hidden"
						onClick={toggleMenu}
					/>
				</div>
			</header>

			{/* ============= MOBILE NAV-BAR ============= */}
			{isOpenMenu && (
				<div className="z-50 fixed inset-0 w-full h-full p-10 bg-black/80 backdrop-blur ">
					<div className="bg-white rounded-2xl p-10">
						<button
							className="ms-auto block mb-4 sm:mb-2"
							onClick={toggleMenu}>
							<X />
						</button>
						<MobileNavBar />
					</div>
				</div>
			)}
		</div>
	);
};

export default Header;
