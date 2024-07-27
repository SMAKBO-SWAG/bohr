"use client";
import Image from "next/image";
import { AmountButton } from "./AmountButton";
import { allProducts } from "@/data/products";
import {
	incrementAmount,
	decrementAmount,
	remove,
} from "@/redux/slices/cartSlice";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { useState } from "react";
import { show } from "@/redux/slices/modalSlice";
import { useRouter } from "next/navigation";

interface ProductCardProps {
	name: string;
	index: number;
	editable: boolean;
}

const ProductCard = ({ name, index, editable }: ProductCardProps) => {
	const dispatch = useDispatch();
	const router = useRouter();

	const product = allProducts.find((item) => item.name === name);

	const cart = useSelector((state: RootState) => state.cart.cart);

	const size = cart[index].size;
	const [amount, setAmount] = useState<number>(cart[index].amount);

	const handleIncrement = () => {
		dispatch(incrementAmount({ name, size }));
		setAmount((prev) => prev + 1);
	};

	const handleDecrement = () => {
		if (amount <= 1) {
			dispatch(
				show({
					title: "Confirm Deletion",
					body: "Are you sure you want to remove this item from your cart?",
					action: "removeItem",
                    params: {name, size}
				})
			);
			return;
		}
		dispatch(decrementAmount({ name, size }));
		setAmount((prev) => prev - 1);
	};

	return (
		<div className="flex flex-row items-center gap-4">
			<Image
				src={`/images/${name}-thumbnail-s.png`}
				alt={`${name}-thumbnail-s`}
				width={84}
				height={84}
				unoptimized
				className="cursor-pointer"
				onClick={() => router.push(`/product/${name}`)}
			/>
			<div className="flex w-full h-full justify-between">
				<div className="flex flex-col gap-2 ">
					<p>
						{product?.type} ({size.toUpperCase()})
					</p>
					<p className="text-xl font-bold leading-5">
						{product?.name.toUpperCase()}
					</p>
					<p>Rp{product?.price}</p>
				</div>
				<div
					className={`flex flex-col items-end ${
						editable ? "justify-end" : "justify-center"
					}`}
				>
					<p>{amount}</p>
					{editable ? (
						<div className="flex gap-2">
							<AmountButton onClick={() => handleDecrement()}>
								-
							</AmountButton>
							<AmountButton onClick={() => handleIncrement()}>
								+
							</AmountButton>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

ProductCard.displayName = "ProductCard";

export { ProductCard };
