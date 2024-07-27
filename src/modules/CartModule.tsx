"use client";
import { ProductCard } from "@/components/ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Header } from "@/components/Header";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export interface CartState {
	name: string;
	size: string;
	amount: number;
}

export default function CartModule() {
    const router = useRouter()
	const cart = useSelector((state: RootState) => state.cart.cart);

	useEffect(() => {
		if (cart.length === 0) {
			router.push("/");
		}
	}, [cart]);

	return (
		<div className="relative flex flex-col items-center gap-8 text-black">
			<Header>Cart</Header>
			<div className="flex flex-col w-full gap-4">
				{cart?.map(
					(
						product: { name: string; size: string; amount: number },
						index: number
					) => {
						return (
							<ProductCard
								name={product.name}
								index={index}
								key={index}
								editable={true}
							></ProductCard>
						);
					}
				)}
				<div className="h-14" />
			</div>
		</div>
	);
}
