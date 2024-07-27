import { allProducts } from "@/data/products";
import { setCart } from "@/redux/slices/cartSlice";
import { show } from "@/redux/slices/modalSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CheckoutButton = ({ pathname }: { pathname: string }) => {
	const router = useRouter();
    const dispatch = useDispatch()
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
                dispatch(
                    show({
                        illustration: "/svg/illustrations/cod-confirm-illustration.svg",
                        title: "Confirm COD Order",
                        body: "Are you sure you want to proceed with the COD payment method?",
                        button: "Proceed",
                        action: "proceedCOD",
                        params: { name, number, paymentMethod, totalPrice, cart},
                    })
                );
			} else if (paymentMethod === "qris") {
				// TODO API Gateaway
                // TODO BE
			}

		} else {
			router.push("/checkout");
		}
	};

	const getPrice = (name: string) => {
		const product = allProducts.find((item) => item.name === name);

		if (product) {
			const price = product.price;
			return price;
		}

		return -1;
	};

	useEffect(() => {
		let price = 0;

		if (cart)
			cart.map((item) => {
				price += getPrice(item.name) * item.amount;
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
			<p>Rp{totalPrice}</p>
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
