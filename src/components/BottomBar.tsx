"use client";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { CartButton } from "./buttons/CartButton";
import { usePathname } from "next/navigation";
import { CheckoutButton } from "./buttons/CheckoutButton";

export default function BottomBar() {
	const pathname = usePathname();

	const cart = useSelector((state: RootState) => state.cart.cart);
	const [visible, setVisible] = useState(false);
	const [slideClass, setSlideClass] = useState("");

	useEffect(() => {
		if (cart.length) {
			setVisible(true);
			setSlideClass("animate-slideIn");
		} else {
			setSlideClass("animate-slideOut");
			setTimeout(() => setVisible(false), 280);
		}
	}, [cart]);

	if (!visible) return null;

	return (
		<>
			{pathname !== "/success" && (
				<div
					className={`fixed w-screen sm:w-[480px] h-full z-50 p-5 flex justify-center items-end pointer-events-none`}
				>
					<div
						className={`flex gap-4 w-full pointer-events-auto ${slideClass}`}
					>
						{pathname !== "/cart" && <CartButton />}
						<CheckoutButton pathname={pathname} />
					</div>
				</div>
			)}
		</>
	);
}
