import Image from "next/image";

const AddToCartButton = ({
	disabled,
	onClick,
}: {
	disabled: boolean;
	onClick: () => void;
}) => {
	return (
		<button
			disabled={disabled}
			onClick={(e) => {
				e.stopPropagation();
				onClick();
			}}
			className={`${disabled ? "bg-[#7D7D7D]" : "bg-dark hover:bg-darker"}
                flex py-2 px-4 gap-2 text-white items-center justify-center rounded-full
                transition ease-in-out duration-150 transform 
                active:scale-95
                shadow-[
                    0px_43px_12px_0px_rgba(0,0,0,0.00),
                    0px_27px_11px_0px_rgba(0,0,0,0.01),
                    0px_15px_9px_0px_rgba(0,0,0,0.05),
                    0px_7px_7px_0px_rgba(0,0,0,0.09),
                    0px_2px_4px_0px_rgba(0,0,0,0.10)
                    ]`}
		>
			<Image
				src={`/svg/icons/add-to-cart-icon.svg`}
				alt={`add-to-cart-icon`}
				width={21}
				height={21}
				unoptimized
			/>
			<p>{disabled? "Sold Out!" : "Add to Cart" }</p>
		</button>
	);
};

AddToCartButton.displayName = "AddToCartButton";

export { AddToCartButton };
