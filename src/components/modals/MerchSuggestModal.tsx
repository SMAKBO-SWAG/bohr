"use client";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/slices/modalSlice";
import { useState } from "react";

const options = [
	{ value: "tshirt", label: "T-shirt" },
	{ value: "hoodie", label: "Hoodie" },
	{ value: "sweater", label: "Sweater" },
	{ value: "totebag", label: "Totebag" },
	{ value: "custom-emoney", label: "Custom E-money" },
];

export default function MerchSelector() {
	const dispatch = useDispatch();

	const [selectedOptions, setSelectedOptions] = useState<string[]>([]);
	const [otherOption, setOtherOption] = useState("");

	const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value;
		setSelectedOptions((prev: any) =>
			prev.includes(value)
				? prev.filter((option: any) => option !== value)
				: [...prev, value]
		);
	};

	const handleOtherChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setOtherOption(event.target.value);
	};

	const handleSubmit = () => {
		selectedOptions.push(otherOption);
		console.log(selectedOptions);

		// TODO BE
		dispatch(closeModal());
	};

	return (
		<div className="z-10 w-screen sm:w-[480px] mx-5 bg-white gap-8 p-10 flex flex-col items-center justify-center rounded-3xl">
			<h2 className="text-2xl font-bold">Choose Your Next Merch!</h2>
			<div className="w-full flex flex-col gap-2">
				{options.map((option) => (
					<label key={option.value}>
						<input
							type="checkbox"
							value={option.value}
							onChange={handleOptionChange}
							className="mr-2"
						/>
						{option.label}
					</label>
				))}
			</div>
			<div className="flex flex-col items-start w-full">
				<span>Or type your own merch wishes ...</span>
				<input
					type="text"
					placeholder="ex. more bracelet please..."
					value={otherOption}
					onChange={handleOtherChange}
					className="border border-gray-300 p-2 rounded-lg mt-2 w-full"
				/>
			</div>

			<div className="flex w-full justify-center gap-4">
				<PrimaryButton
					onClick={handleSubmit}
					disabled={
						selectedOptions.length === 0 && otherOption === ""
					}
				>
					Submit
				</PrimaryButton>
			</div>
		</div>
	);
}
