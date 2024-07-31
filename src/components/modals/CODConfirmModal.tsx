"use client";
import Image from "next/image";
import { PrimaryButton } from "../buttons/PrimaryButton";
import SecondaryButton from "../buttons/SecondaryButton";
import { useDispatch } from "react-redux";
import { closeModal } from "@/redux/slices/modalSlice";

export default function CODConfirmModal() {
	const dispatch = useDispatch();

	const handleCancel = () => {
		dispatch(closeModal());
	};

	const handleConfirm = () => {
		//TODO COD
		dispatch(closeModal());
	};

	return (
		<div className="z-10 w-screen sm:w-[480px] mx-5 bg-white gap-4 p-10 flex flex-col items-center justify-center rounded-3xl">
			<Image
				src="/svg/illustrations/cod-confirm-illustration.svg"
				alt="deletion-confirm-illustration"
				width={250}
				height={0}
				unoptimized
			/>
			<div className="flex flex-col gap-6 items-center">
				<div className="flex flex-col text-center gap-2">
					<p className="text-2xl font-bold">Confirm COD Order</p>
					<p className="text-s font-medium">
						Are you sure you want to proceed with the COD payment
						method?
					</p>
				</div>

				<div className="flex w-full justify-center gap-4">
					<SecondaryButton onClick={handleCancel}>
						Cancel
					</SecondaryButton>
					<PrimaryButton onClick={handleConfirm}>
						Confirm
					</PrimaryButton>
				</div>
			</div>
		</div>
	);
}
