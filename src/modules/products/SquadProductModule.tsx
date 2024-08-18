"use client";
import { Header } from "@/components/Header";
import { ProductThumbnail } from "@/components/ProductThumbnail";
import { products } from "@/data/products";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function SquadProductModule() {
	const cart = useSelector((state: RootState) => state.cart.cart);

	const product = products[0]

	return (
		<div className="relative flex flex-col items-center gap-6 text-black">
			<Header>Bring Your Squad!</Header>
			<ProductThumbnail product={product} />
			<p>
				Yuk, ajak 5 teman kamu beli gelang FLUORE barengan dan
				dapatkan harga spesial hanya Rp20.000 per gelang. Nggak cuma
				hemat, tapi juga nambah keren!.{" "}
			</p>

			{cart.length !== 0 && <div className="h-14"></div>}
		</div>
	);
}
