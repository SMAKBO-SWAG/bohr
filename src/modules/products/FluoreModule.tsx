"use client";
import { Header } from "@/components/Header";
import { ProductThumbnail } from "@/components/ProductThumbnail";
import { products } from "@/data/products";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function FluoreModule() {
	const cart = useSelector((state: RootState) => state.cart.cart);

	const product = products[5]

	return (
		<div className="relative flex flex-col items-center gap-6 text-black">
			<Header>{product.name.toUpperCase()}</Header>
			<ProductThumbnail product={product} />

			{cart.length !== 0 && <div className="h-14"></div>}
		</div>
	);
}
