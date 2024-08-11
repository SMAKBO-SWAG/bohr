"use client";
import Image from "next/image";
import { Header } from "@/components/Header";
import { ProductThumbnail } from "@/components/ProductThumbnail";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

export default function CartModule() {
	const cart = useSelector((state: RootState) => state.cart.cart);

	const product = {
		name: "classic",
		type: "Bracelet",
		price: 25000,
		thumbnail: {
			isNew: false,
			isPreOrder: true,
			accent: "#132042",
			accentComplement: "#ffffff",
		},
	};

	return (
		<div className="relative flex flex-col items-center gap-6 text-black">
			<Header>Classic</Header>
			<ProductThumbnail product={product} />
			<p>
				#BanggaBersama dengan Classic Bracelet! Didesain dengan siluet
				elegan logo SMAKBO, gelang ini memadukan gaya modern yang cocok
				banget buat semua kalangan.{" "}
			</p>
			<Image
				src="/images/thumbnails/classic-thumbnail-m.png"
				width={0}
				height={0}
				alt="SMAKBO SWAG Logo"
				className="w-full aspect-[4/2] rounded-[32px]"
				unoptimized
			/>
			<p>
				Mau dipakai sebagai aksesori sehari-hari atau hadiah, Classic
				Bracelet tetap akan menjadi simbol kebanggaan bagi setiap warga
				SMAKBO!
			</p>

			{cart.length  !== 0 && <div className="h-14"></div>}
		</div>
	);
}
