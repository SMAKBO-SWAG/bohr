import { ReactNode } from "react";

const PrimaryButton = ({
	children,
	disabled,
	onClick,
}: {
	children: ReactNode;
	disabled?: boolean;
	onClick: () => void;
}) => {
	return (
		<button
			className={`${
				disabled ? "bg-[#7D7D7D]" : "bg-dark hover:bg-darker"
			} rounded-full px-5 py-2 flex items-center justify-center text-white transition ease-in-out duration-150 transform active:scale-95`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

PrimaryButton.displayName = "PrimaryButton";

export { PrimaryButton };
