import Image from "next/image";

interface BraceletFilterButtonProps {
	onChange: () => void;
	type: string;
	checked: boolean;
}

const BraceletFilterButton = ({
	onChange,
	type,
	checked,
}: BraceletFilterButtonProps) => {
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
					src={`/svg/illustrations/size-bracelet-illustration-${type}.svg`}
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

BraceletFilterButton.displayName = "BraceletFilterButton";

export { BraceletFilterButton };
