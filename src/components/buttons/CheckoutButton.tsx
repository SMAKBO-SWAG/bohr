import Image from "next/image";
import { RootState } from "@/redux/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { showModal } from "@/redux/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import CODConfirmModal from "../modals/CODConfirmModal";
import { setTotalPrice, setIsValid } from "@/redux/slices/userSlice";
import validator from "validator";

const API_URL = process.env.NEXT_PUBLIC_API_URL;

const CheckoutButton = ({ pathname }: { pathname: string }) => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { cart } = useSelector((state: RootState) => state.cart);

	const [disabled, setDisabled] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState(false)

	const { name, number, province, city, address, paymentMethod, ongkir, totalPrice } =
		useSelector((state: RootState) => state.user);

    const province_name = province?.split("-")[1]
    const city_name = city?.split("-")[1]

	const handleCheckout = async () => {
		if (pathname === "/checkout") {
            setIsLoading(true)
            
			if (!validator.isMobilePhone(number, "id-ID")) {
				dispatch(setIsValid(false));
                setIsLoading(false)
				return;
			} else {
				dispatch(setIsValid(true));
			}

			if (paymentMethod === "cod") {
				dispatch(showModal(<CODConfirmModal />));
			} else {
				try {

                    const finalPrice = paymentMethod === "qris100" ? totalPrice : 0.5 * totalPrice

					const response = await fetch(API_URL + "/payment/", {
						method: "POST",
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							name,
							number,
							paymentMethod,
							totalPrice: finalPrice,
							orders: cart,
						}),
					});

					if (!response.ok) {
						throw new Error("Network response was not ok");
					}

					const transaction: { token: string } =
						await response.json();

					if (!transaction || !transaction.token) {
						throw new Error("Invalid transaction response");
					}

					(window as any).snap.pay(transaction.token, {
						onSuccess: async function (result: any) {
							const response = await fetch(API_URL + "/orders/", {
								method: "POST",
								headers: {
									"Content-Type": "application/json",
								},
								body: JSON.stringify({
									name,
									number,
									paymentMethod,
									totalPrice,
                                    ongkir,
                                    address: (paymentMethod === "ship") ? [address, city_name, province_name].join(", ") : null,
									orders: cart,
                                    preOrder: 2
								}),
							});

							if (response.status === 201) {
								router.push("/success");
							}
						},
						onClose: function () {},
					});
				} catch (error) {
					console.error("Fetch error:", error);
				}
			}
            setIsLoading(false)

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

		if (paymentMethod === "ship" && ongkir) {
			price += ongkir
		}

		dispatch(setTotalPrice(price));
	}, [cart, paymentMethod, ongkir]);

	useEffect(() => {
		if (pathname === "/checkout") {
			if (paymentMethod === "ship") {
				setDisabled(
					name.trim() === "" ||
                    number.trim() === "" ||
                    address?.trim() === "" ||
                    province === "" ||
                    city === "" ||
                    ongkir === 0
				);
			} else {
				setDisabled(name.trim() === "" || number.trim() === "");
			}
		} else {
			setDisabled(false);
		}
	}, [name, number, paymentMethod, province, city, address, ongkir, pathname]);

	return (
		<button
			className={` ${
				disabled || isLoading ? "bg-[#7D7D7D]" : "bg-dark hover:bg-darker"
			} rounded-full w-full h-[54px] flex items-center justify-between p-5 text-white transition ease-in-out duration-150 transform active:scale-[0.98]`}
			onClick={() => handleCheckout()}
			disabled={disabled || isLoading}
		>
			<p>
				Rp{totalPrice.toLocaleString('id-ID')}
			</p>
			<div className="flex gap-2">
				<p>{isLoading? "Loading..." : "Checkout"}</p>
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
