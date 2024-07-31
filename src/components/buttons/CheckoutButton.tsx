import Image from "next/image";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { showModal } from "@/redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import CODConfirmModal from "../modals/CODConfirmModal";

const CheckoutButton = ({ pathname }: { pathname: string }) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const cart = useSelector((state: RootState) => state.cart.cart);

	const { name, number, paymentMethod } = useSelector((state: RootState) => ({
		name: state.user.name,
		number: state.user.number,
		paymentMethod: state.user.paymentMethod,
	}));

	const [totalPrice, setTotalPrice] = useState(0);

	const handleCheckout = () => {
		if (pathname === "/checkout") {
			if (paymentMethod === "cod") {
				dispatch(showModal(<CODConfirmModal />));
			} else if (paymentMethod === "qris") {
				// TODO API Gateaway
			}
		} else {
			router.push("/checkout");
		}
	};

	useEffect(() => {
		let price = 0;

		if (cart)
			cart.map((item) => {
				price += item.price * item.amount!;
			});

		setTotalPrice(price);
	}, [cart]);

	return (
		<button
			className="rounded-full bg-dark w-full h-[54px] flex items-center justify-between p-5 text-white
                transition ease-in-out duration-150 transform 
                active:scale-[0.98]
                hover:bg-darker "
			onClick={() => handleCheckout()}
		>
			<p>
				Rp{totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
			</p>
			<div className="flex gap-2">
				<p>Checkout</p>
				<Image
					src={`/svg/icons/arrow-icon.svg`}
					alt={`arrow`}
					width={21}
					height={20}
					unoptimized
				/>
			</div>
		</button>
	);
};

CheckoutButton.displayName = "CheckoutButton";

export { CheckoutButton };
