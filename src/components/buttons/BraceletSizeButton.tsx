import Image from "next/image";

interface BraceletSizeButtonProps {
	onChange: () => void;
	type: string;
	checked: boolean;
}

const BraceletSizeButton = ({
	onChange,
	type,
	checked,
}: BraceletSizeButtonProps) => {
	const defaultInputClass = `hidden peer`;

	return (
		<div className="w-full transition ease-in-out duration-150 transform active:scale-95 cursor-pointer">
			<input
				type="radio"
				name="bracelet-size"
				id={type}
				className={defaultInputClass}
				onChange={() => onChange()}
				checked={checked}
			/>
			<label
				htmlFor={type}
				className="w-full rounded-xl border border-transparent peer-checked:border-darker peer-checked:border-2 inline-block"
			>
				<Image
					src={`/images/illustrations/size-bracelet-illustration-${type}.png`}
					alt={`size-bracelet-${type}`}
					width={0}
					height={0}
					className="w-full aspect-[1/1] rounded-xl"
					unoptimized
				/>
			</label>
		</div>
	);
};

BraceletSizeButton.displayName = "BraceletFilterButton";

export { BraceletSizeButton };
