"use client";
import Image from "next/image";
import { PrimaryButton } from "../buttons/PrimaryButton";
import { SecondaryButton } from "../buttons/SecondaryButton";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "@/redux/slices/modalSlice";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";

const api_url = process.env.NEXT_PUBLIC_API_URL

export default function CODConfirmModal() {
	const dispatch = useDispatch();
	const router = useRouter();

	const { name, number, paymentMethod, totalPrice, cart } = useSelector(
		(state: RootState) => ({
			name: state.user.name,
			number: state.user.number,
			paymentMethod: state.user.paymentMethod,
			totalPrice: state.user.totalPrice,
			cart: state.cart.cart,
		})
	);

	const handleCancel = () => {
		dispatch(closeModal());
	};

	const handleConfirm = async () => {
		const response = await fetch(api_url + "orders/", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				name,
				number,
				paymentMethod,
				totalPrice,
				orders: cart,
			}),
		});

		if (response.status !== 201) {
			alert("Order error, please try again");
            dispatch(closeModal());
            router.push("/");
            return
		}

        router.push("/success");

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
