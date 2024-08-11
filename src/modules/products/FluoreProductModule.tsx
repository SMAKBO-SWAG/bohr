"use client";
import { Header } from "@/components/Header";
import { ProductThumbnail } from "@/components/ProductThumbnail";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function FluoreProductModule() {
	const cart = useSelector((state: RootState) => state.cart.cart);

	const product = {
		name: "fluore",
		type: "Bracelet",
		price: 25000,
		thumbnail: {
			isNew: true,
			isPreOrder: true,
			accent: "#ffffff",
			accentComplement: "#132042",
		},
	};

	return (
		<div className="relative flex flex-col items-center gap-6 text-black">
			<Header>Fluore</Header>
			<ProductThumbnail product={product} />
			<p>
				Kenalin Fluore, gelang dengan desain minimalis tulisan SMAKBO.
				Terinspirasi dari karakteristik fluorescent, gelang ini bisa
				glow in the dark dan menambah keunikan serta kesan futuristik.{" "}
			</p>
			<Image
				src="/images/thumbnails/fluore-thumbnail-m.png"
				width={0}
				height={0}
				alt="SMAKBO SWAG Logo"
				className="w-full aspect-[4/2] rounded-[32px]"
				unoptimized
			/>
			<p>
				Fluore juga hadir sebagai simbol kebanggaan bagi seluruh warga
				SMAKBO. Kenakan Fluore dan tunjukkan kebanggaanmu dengan gaya
				minimalis!
			</p>

			{cart.length !== 0 && <div className="h-14"></div>}
		</div>
	);
}
