"use client";
import Image from "next/image";
import { AddToCartButton } from "./AddToCartButton";
import { useRouter } from "next/navigation";
import { show } from "@/redux/slices/drawerSlice";
import { useDispatch } from "react-redux";
import { Tag } from "./Tag";

interface ProductProps {
	isNew: boolean;
	isPreOrder: boolean;
	accent: string;
	accentComplement: string;
	name: string;
	type: string;
	price: number;
}

const ProductThumbnail = ({
	isNew,
	isPreOrder,
	accent,
	accentComplement,
	name,
	type,
	price,
}: ProductProps) => {
	const router = useRouter();
	const dispatch = useDispatch();

	const handleProductClick = () => [router.push(`/product/${name}`)];
	const handleAddToCartDrawer = () => [dispatch(show(name))];

	return (
		<div
			className="relative flex flex-col w-full aspect-[3.5/4] cursor-pointer"
			onClick={() => handleProductClick()}
		>
			<Image
				src={`/images/${name}-thumbnail.png`}
				className="w-full h-full rounded-3xl absolute"
				style={{ objectFit: "cover" }}
				alt={`${name}-thumbnail`}
				width={0}
				height={0}
				unoptimized
			/>
			<div className="z-10 flex flex-col justify-between p-5 h-full">
				<div className="flex justify-between items-start">
					<div
						className="flex flex-col gap-4"
						style={{ color: accent }}
					>
						<div className="flex flex-row gap-2 items-center">
							{isPreOrder && (
								<Tag
									accent={accent}
									accentComplement={accentComplement}
								>
									Pre-Order
								</Tag>
							)}
							<Tag
								accent={accent}
								accentComplement={accentComplement}
							>
								{type}
							</Tag>
						</div>
						<div className="flex flex-col gap-2">
							<p className="text-3xl font-bold leading-6 tracking-wider">
								{name.toUpperCase()}
							</p>
							<p className="text-lg">
								Rp
								{price
									.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
							</p>
						</div>
					</div>
					{isNew && (
						<Image
							src={`/svg/${name}-new-tag.svg`}
							style={{ objectFit: "cover" }}
							alt={`/${name}-new-tag`}
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
