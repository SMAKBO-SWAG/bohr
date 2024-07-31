import Image from "next/image";

const BackButton = () => {
	return (
		<button
			className="rounded-full bg-dark min-w-[50px] h-[50px] flex items-center justify-center
                transition ease-in-out duration-150 transform 
                active:scale-95
                hover:bg-darker rotate-180"
			onClick={() => window.history.back()}
		>
			<Image
				src={`/svg/icons/arrow-icon.svg`}
				alt={`arrow`}
				width={20}
				height={20}
				unoptimized
			/>
		</button>
	);
};

BackButton.displayName = "BackButton";

export { BackButton };
