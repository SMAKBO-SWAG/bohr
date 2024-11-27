import { ReactNode } from "react";
import { BackButton } from "./modals/BackButton";

interface HeaderProps {
	children: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
	return (
		<div className="w-full flex justify-between items-center">
			<BackButton />
			<p className="text-xl font-medium tracking-wide">{children}</p>
			<div className="w-[54px]"></div>
		</div>
	);
};

Header.displayName = "Header";

export { Header };
