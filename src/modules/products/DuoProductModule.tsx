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
            Gandakan kebahagian dengan promo beli floure dan classic bracelet hanya dengan harga lebih murah! ✨
            Dapatkan penawaran spesial ini untuk menambah koleksi aksesorismu. Nikmati diskon istimewa dan buat setiap momen lebih berharga. Buruan, (promo ini hanya berlaku untuk waktu terbatas!){" "}
			</p>

			{cart.length !== 0 && <div className="h-14"></div>}
		</div>
	);
}
