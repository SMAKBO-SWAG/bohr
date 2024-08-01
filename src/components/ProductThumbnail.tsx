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
		name: product.name,
		type: product.type,
		price: product.price,
	};

	const thumbnail = product.thumbnail!;

	const handleProductClick = () => [router.push(`/product/${product.name}`)];
	const handleAddToCartDrawer = () => [dispatch(showDrawer(item))];

	return (
		<div
			className="relative flex flex-col w-full aspect-[3.5/4] cursor-pointer"
			onClick={() => handleProductClick()}
		>
			<Image
				src={`/images/${product.name}-thumbnail.png`}
				className="w-full h-full rounded-3xl absolute"
				style={{ objectFit: "cover" }}
				alt={`${product.name}-thumbnail`}
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
							{thumbnail.isPreOrder && (
								<Tag
									accent={thumbnail.accent}
									accentComplement={
										thumbnail.accentComplement
									}
								>
									Pre-Order
								</Tag>
							)}
							<Tag
								accent={thumbnail.accent}
								accentComplement={thumbnail.accentComplement}
							>
								{product.type}
							</Tag>
						</div>
						<div className="flex flex-col gap-2">
							<p className="text-3xl font-bold leading-6 tracking-wider">
								{product.name.toUpperCase()}
							</p>
							<p className="text-lg">
								Rp
								{product.price
									.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
							</p>
						</div>
					</div>
					{thumbnail.isNew && (
						<Image
							src={`/svg/${product.name}-new-tag.svg`}
							style={{ objectFit: "cover" }}
							alt={`/${product.name}-new-tag`}
							width={105}
							height={85}
							unoptimized
						/>
					)}
				</div>
				<div className="flex w-full justify-end">
					<AddToCartButton onClick={() => handleAddToCartDrawer()} />
				</div>
			</div>
		</div>
	);
};

ProductThumbnail.displayName = "ProductThumbnail";

export { ProductThumbnail };
