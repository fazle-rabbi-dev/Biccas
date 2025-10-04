import clsx from "clsx";

const Section = ({ children, className }) => {
	return <section className={clsx("primary-container", className)}>{children}</section>;
};

export default Section;
