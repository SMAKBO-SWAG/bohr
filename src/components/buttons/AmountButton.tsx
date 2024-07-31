import { ReactNode } from "react";

const AmountButton = ({
	onClick,
	children,
	disabled,
}: {
	onClick: () => void;
	children: ReactNode;
	disabled?: boolean;
}) => {
	return (
		<button
			className={`rounded-full ${
				disabled ? "bg-[#7D7D7D]" : "bg-dark hover:bg-darker"
			} w-[35px] h-[35px] flex items-center justify-center text-white
                transition ease-in-out duration-150 transform 
                active:scale-95`}
			onClick={onClick}
			disabled={disabled}
		>
			{children}
		</button>
	);
};

AmountButton.displayName = "AmountButton";

export { AmountButton };
