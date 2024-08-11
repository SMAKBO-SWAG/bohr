"use client";
import Image from "next/image";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { useDispatch } from "react-redux";
import { remove } from "@/redux/slices/cartSlice";
import { closeModal } from "@/redux/slices/modalSlice";

export default function DeletionConfirmModal({
	name,
	size,
}: {
	name: string;
	size: string;
}) {
	const dispatch = useDispatch();

	const handleCancel = () => {
		dispatch(closeModal());
	};

	const handleRemove = () => {
		dispatch(remove({ name, size }));
		dispatch(closeModal());
	};

	return (
		<div className="z-10 w-screen sm:w-[480px] mx-5 bg-white gap-4 p-10 flex flex-col items-center justify-center rounded-3xl">
			<Image
				src="/images/illustrations/deletion-confirm-illustration.png"
				alt="deletion-confirm-illustration"
				width={250}
				height={0}
				unoptimized
			/>
			<div className="flex flex-col gap-6 items-center">
				<div className="flex flex-col text-center gap-2">
					<p className="text-2xl font-bold">Confirm Deletion</p>
					<p className="text-s font-medium">
						Are you sure you want to remove this item from your
						cart?
					</p>
				</div>

				<div className="flex w-full justify-center gap-4">
					<PrimaryButton onClick={handleCancel}>Cancel</PrimaryButton>
					<SecondaryButton onClick={handleRemove}>
						Remove
					</SecondaryButton>
				</div>
			</div>
		</div>
	);
}
