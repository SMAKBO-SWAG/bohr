"use client";
import { PrimaryButton } from "@/components/buttons/PrimaryButton";
import { clearCart } from "@/redux/slices/cartSlice";
import { clearUser } from "@/redux/slices/userSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function HomeModule() {
	const router = useRouter();
	const dispatch = useDispatch();

	const handleHome = () => {
		router.push("/");
	};

	useEffect(() => {
		dispatch(clearUser());
		dispatch(clearCart());
	}, []);

	return (
		<div className="relative gap-5 flex items-center justify-center h-full text-black">
			<div className="z-10 gap-4 p-10 flex flex-col items-center justify-center rounded-3xl">
				<Image
					src={`/images/illustrations/success-illustration.png`}
					alt={`success-illustration`}
					width={250}
					height={0}
					unoptimized
				/>
				<div className="flex flex-col gap-6 items-center">
					<div className="flex flex-col text-center gap-2">
						<p className="text-2xl font-bold">Order Successful!</p>
						<p className="text-s font-medium">
							You will receive a confirmation message through
							Whatsapp shortly.{" "}
						</p>
					</div>
					<PrimaryButton onClick={handleHome}>
						Back to Home
					</PrimaryButton>
				</div>
			</div>
		</div>
	);
}
