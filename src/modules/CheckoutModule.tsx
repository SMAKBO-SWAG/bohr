"use client";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { setName, setNumber, setPaymentMethod } from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CheckoutModule() {
	const router = useRouter();
	const dispatch = useDispatch();
	const cart = useSelector((state: RootState) => state.cart.cart);

	useEffect(() => {
		if (cart.length === 0) {
			router.push("/");
		}
	}, [cart]);

	return (
		<div className="relative flex flex-col items-center gap-6 text-black">
			<Header>Checkout</Header>
			<div className="flex w-full bg-[#F5F6FB] p-4 gap-4 rounded-xl">
				<Image
					src="/svg/icons/info-icon.svg"
					width={31}
					height={31}
					alt="SMAKBO SWAG Logo"
				/>

				<div className="flex flex-col gap-2 font-medium text-sm">
					<ul className="list-disc pl-2">
						<li>
							Pre-order berlangsung dari tanggal ... dan dilanjut
							produksi. (estimasi 1 minggu){" "}
						</li>
						<li>
							Pengambilan barang dilakukan di SMK-SMAK Bogor.{" "}
						</li>
					</ul>
				</div>
			</div>

			<div className="flex flex-col gap-2 w-full">
				<p>Name</p>
				<input
                    type="text"
					className="flex w-full bg-[#F5F6FB] p-4 gap-4 rounded-xl"
					placeholder="Budi"
					onChange={(e) => dispatch(setName(e.target.value))}
				></input>
			</div>

			<div className="flex flex-col gap-2 w-full">
				<p>Number/Whatsapp</p>
				<input
                    type="number"
					className="flex w-full bg-[#F5F6FB] p-4 gap-4 rounded-xl"
					placeholder="0812345678"
					onChange={(e) => dispatch(setNumber(e.target.value))}
				></input>
			</div>

			<div className="flex flex-col gap-2 w-full">
				<p>Payment Method</p>
				<div className="flex gap-2">
					<input
						type="radio"
						value="cod"
						id="cod"
						name="paymentMethod"
						onChange={(e) => dispatch(setPaymentMethod(e.target.value))}
					></input>
					<label htmlFor="cod"> Cash on Delivery (SMAKBO)</label>
				</div>
				<div className="flex gap-2">
					<input
						type="radio"
						value="qris"
						id="qris"
						name="paymentMethod"
						onChange={(e) => dispatch(setPaymentMethod(e.target.value))}
					></input>
					<label htmlFor="qris"> QRIS Payment</label>
				</div>
			</div>

			<div className="flex flex-col gap-2 w-full">
				<p>Order Items</p>
				<div className="flex flex-col w-full gap-4">
					{cart.map(
						(
							product: {
								name: string;
								size: string;
								amount: number;
							},
							index: number
						) => {
							return (
								<ProductCard
									name={product.name}
									index={index}
									key={index}
									editable={false}
								></ProductCard>
							);
						}
					)}

					<div className="h-14" />
				</div>
			</div>
		</div>
	);
}
