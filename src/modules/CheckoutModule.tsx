"use client";
import { Header } from "@/components/Header";
import { ProductCard } from "@/components/ProductCard";
import { notes } from "@/data/notes";
import {
	setAddress,
	setCity,
	setName,
	setNumber,
	setOngkir,
	setPaymentMethod,
	setProvince,
} from "@/redux/slices/userSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CheckoutModule() {
	const dispatch = useDispatch();
	const router = useRouter();

	const cities = ["Bogor", "Jakarta"];
	const provinces = ["Jawa Barat", "Palembang"];

	const { cart } = useSelector((state: RootState) => state.cart);

	const { name, number, province, city, address, paymentMethod, valid } =
		useSelector((state: RootState) => state.user);

	useEffect(() => {
		if (!cart.length) {
			router.push("/");
		}
	}, [cart, router]);

	useEffect(() => {
		if (city) {
			//TODO fetch ongkir

			dispatch(setOngkir(14000));
		}
	}, [province, city]);

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
						{notes.map((note, index) => (
							<li key={index}>{note}</li>
						))}
					</ul>
				</div>
			</div>

			<div className="flex flex-col gap-2 w-full">
				<p>Payment Method</p>
				<div className="flex gap-2">
					<input
						type="radio"
						value="cod"
						id="cod"
						name="paymentMethod"
						defaultChecked={
							paymentMethod ? paymentMethod === "cod" : true
						}
						onChange={(e) =>
							dispatch(setPaymentMethod(e.target.value))
						}
					></input>
					<label htmlFor="cod"> COD - pickup at SMAKBO</label>
				</div>
				<div className="flex gap-2">
					<input
						type="radio"
						value="qris"
						id="qris"
						name="paymentMethod"
						defaultChecked={paymentMethod === "qris"}
						onChange={(e) =>
							dispatch(setPaymentMethod(e.target.value))
						}
					></input>
					<label htmlFor="qris"> QRIS - pickup at SMAKBO</label>
				</div>
				<div className="flex gap-2">
					<input
						type="radio"
						value="ship"
						id="ship"
						name="paymentMethod"
						defaultChecked={paymentMethod === "ship"}
						onChange={(e) =>
							dispatch(setPaymentMethod(e.target.value))
						}
					></input>
					<label htmlFor="ship"> QRIS - JNE ( + ongkir)</label>
				</div>
			</div>

			<div className="flex flex-col gap-2 w-full">
				<p>Name</p>
				<input
					type="text"
					className="flex w-full bg-[#F5F6FB] p-4 gap-4 rounded-xl"
					placeholder="Budi"
					value={name}
					onChange={(e) => dispatch(setName(e.target.value))}
				></input>
			</div>

			<div className="flex flex-col gap-2 w-full">
				<p>Whatsapp</p>
				<input
					type="number"
					className="flex w-full bg-[#F5F6FB] p-4 gap-4 rounded-xl"
					placeholder="0812345678"
					value={number}
					onChange={(e) => dispatch(setNumber(e.target.value))}
				></input>
				{!valid && (
					<span className="text-[#ED4337] text-sm">
						Not a valid phone number
					</span>
				)}
			</div>

			{paymentMethod === "ship" && (
				<div className="flex flex-col gap-2 w-full">
					<p>Complete Address</p>

					<div className="flex justify-between w-full bg-[#F5F6FB] p-4 gap-4 rounded-xl">
						<input
							type="address"
							placeholder="Jl.Raya Puncak, No.01"
							className="bg-[#F5F6FB] w-full"
							value={address}
							onChange={(e) =>
								dispatch(setAddress(e.target.value))
							}
						></input>

						<div className="flex gap-2">
							<div className="flex flex-col w-full w-[96px] text-sm">
								<select
									id="province"
									className="p-2 border rounded-[20px] shadow-inner-custom h-[40px]"
									value={province}
									onChange={(e) =>
										dispatch(setProvince(e.target.value))
									}
								>
									<option value="" disabled>
										Provinsi
									</option>
									{provinces.map((province, index) => (
										<option key={index} value={province}>
											{province}
										</option>
									))}
								</select>
							</div>

							<div className="flex flex-col w-[84px] text-sm">
								<select
									id="city"
									className="p-2 border rounded-[20px] shadow-inner-custom h-[40px]"
									value={city}
									onChange={(e) =>
										dispatch(setCity(e.target.value))
									}
								>
									<option value="" disabled>
										Kota
									</option>
									{cities.map((province, index) => (
										<option key={index} value={province}>
											{province}
										</option>
									))}
								</select>
							</div>
						</div>
					</div>
				</div>
			)}

			<div className="flex flex-col gap-2 w-full">
				<p>Order Items</p>
				<div className="flex flex-col w-full gap-4">
					{cart.map((product, index: number) => {
						return (
							<ProductCard
								product={product}
								key={index}
								editable={false}
							></ProductCard>
						);
					})}
				</div>
			</div>

			<div className="h-14" />
		</div>
	);
}
