"use client";
import Image from "next/image";
import { AddToCartButton } from "./buttons/AddToCartButton";
import { useRouter } from "next/navigation";
import { showDrawer } from "@/redux/slices/drawerSlice";
import { useDispatch } from "react-redux";
import { Tag } from "./Tag";
import { Product } from "@/types/product";

const ProductThumbnail = ({ product }: { product: Product }) => {
	const router = useRouter();
	const dispatch = useDispatch();

	const item = {
		id: product.id,
		name: product.name,
		tag: product.tag,
		price: product.price,
	};

	const thumbnail = product.thumbnail!;

	const handleProductClick = () => [router.push(`/product/${product.id}`)];
	const handleAddToCartDrawer = () => [dispatch(showDrawer(item))];

	return (
		<div
			className="relative flex flex-col w-full aspect-[3.5/4] cursor-pointer"
			onClick={() => handleProductClick()}
		>
            {product.id === 'luminous-legacy' && (
                <div
                    className="absolute w-full h-full rounded-3xl blur-[5px] animate-aurora bg-gradient-to-r from-[#B1CCFF] to-[#A1BAE8] opacity-90"
                ></div>
            )}
			<Image
				src={`/images/thumbnails/${product.id}-thumbnail.png`}
				className="w-full h-full rounded-3xl absolute"
				style={{ objectFit: "cover" }}
				alt={`${product.id}-thumbnail`}
				width={0}
				height={0}
				unoptimized
			/>
			<div className="z-10 flex flex-col justify-between p-5 h-full">
				<div className="flex justify-between items-start">
					<div
						className="flex flex-col gap-4"
						style={{ color: thumbnail.accent }}
					>
						<div className="flex flex-row gap-2 items-center">
							{product.tag.map((tag) => (
								<Tag
									accent={thumbnail.accent}
									accentComplement={
										thumbnail.accentComplement
									}
								>
									{tag}
								</Tag>
							))}
						</div>
						<div className="flex flex-col gap-2">
							<p className="text-2xl font-bold leading-6 tracking-wider">
								{product.name.toUpperCase()}
							</p>
							<p className="text-lg">
								Rp
								{product.price.toLocaleString("id-ID")}{product.tag.includes("Package") ? "/pack" : "/pcs"}
							</p>
						</div>
					</div>
				</div>
				<div className="flex w-full justify-end">
					<AddToCartButton
						child={"Add to Cart"}
						disabled={false}
						onClick={() => handleAddToCartDrawer()}
					/>
				</div>
			</div>
		</div>
	);
};

ProductThumbnail.displayName = "ProductThumbnail";

export { ProductThumbnail };
