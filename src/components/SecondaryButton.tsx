import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const SecondaryButton = ({ children, onClick }: { children: ReactNode, onClick: () => void }) => {
	const router = useRouter();
	return (
		<button
			className="rounded-full border-2 border-dark px-5 py-2 flex items-center justify-center text-dark
                transition ease-in-out duration-150 transform 
                active:scale-95
                hover:bg-light"
			onClick={onClick}
		>
			{children}
		</button>
	);
};

SecondaryButton.displayName = "SecondaryButton";

export { SecondaryButton };
