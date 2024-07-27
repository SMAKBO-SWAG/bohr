"use client";
import Image from "next/image";
import { allProducts } from "@/data/products";
import { FilterToggle } from "@/components/FilterToggle";
import { ProductThumbnail } from "@/components/ProductThumbnail";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export default function HomeModule() {
	const filter = useSelector((state: RootState) => state.filter.filter);
    const localCart = localStorage.getItem("cart");

	const products =
		filter === "All"
			? allProducts
			: allProducts.filter((product) => product.type === filter);

	return (
		<div className="relative gap-5 flex flex-col">
			<Image
				src="/svg/logo.svg"
				width={225}
				height={45}
				alt="SMAKBO SWAG Logo"
			/>

			<div className="flex flex-col gap-4">
				<div className="flex items-center gap-2 overflow-x-auto py-2 px-5 mx-[-20px] no-scrollbar">
					<FilterToggle 
                        type="All" 
                        checked={filter === "All"} 
                    />
					<FilterToggle
						type="Bracelet"
						checked={filter === "Bracelet"}
					/>
					<FilterToggle
						type="Sticker"
						checked={filter === "Sticker"}
					/>
					<FilterToggle
						type="T-shirt"
						checked={filter === "T-shirt"}
					/>
					<FilterToggle 
                        type="Hoodie" 
                        checked={filter === "Hoodie"}
                    />
					<p className="text-nowrap text-dark">and more to come...</p>
				</div>

				<div className="flex flex-col items-center gap-5">
					{products.map((product, key) => {
						return (
							<ProductThumbnail
								name={product.name}
								type={product.type}
								price={product.price}
								isNew={product.isNew}
								isPreOrder={product.isPreOrder}
								accent={product.accent}
								accentComplement={product.accentComplement}
								key={key}
							/>
						);
					})}

					{localCart && <div className="h-14" />}
				</div>
			</div>
		</div>
	);
}
