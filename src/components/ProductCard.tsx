"use client";
import Image from "next/image";
import { AmountButton } from "./buttons/AmountButton";
import { incrementAmount, decrementAmount } from "@/redux/slices/cartSlice";
import { showModal } from "@/redux/slices/modalSlice";
import { useRouter } from "next/navigation";
import { Product } from "@/types/product";
import { useDispatch } from "react-redux";
import { useState } from "react";
import DeletionConfirmModal from "./modals/DeletionConfirmModal";

interface ProductCardProps {
	product: Product;
	editable: boolean;
}

const ProductCard = ({ product, editable }: ProductCardProps) => {
	const dispatch = useDispatch();
	const router = useRouter();

	const [amount, setAmount] = useState<number>(product.amount!);

	const handleIncrement = () => {
		dispatch(incrementAmount({ name: product.name, size: product.size! }));
		setAmount((prev) => prev + 1);
	};

	const handleDecrement = () => {
		if (amount <= 1) {
			dispatch(
				showModal(
					<DeletionConfirmModal
						name={product.name}
						size={product.size!}
					/>
				)
			);
			return;
		}
		dispatch(decrementAmount({ name: product.name, size: product.size! }));
		setAmount((prev) => prev - 1);
	};

	return (
		<div className="flex flex-row items-center gap-4">
			<Image
				src={`/images/thumbnails/${product.id}-thumbnail-s.png`}
				alt={`${product.id}-thumbnail-s`}
				width={84}
				height={84}
				unoptimized
				className="cursor-pointer"
				onClick={() => router.push(`/product/${product.id}`)}
			/>
			<div className="flex w-full h-full justify-between">
				<div className="flex flex-col gap-2 ">
					<p>
						{product?.type}
                        {/* ({product.size!.toUpperCase()}) */}
					</p>
					<p className="text-xl font-bold leading-5">
						{product?.name.toUpperCase()}
					</p>
					<p>
						Rp
						{product?.price.toLocaleString('id-ID')}
					</p>
				</div>
				<div
					className={`flex flex-col items-end  gap-2 ${
						editable ? "justify-end" : "justify-center"
					}`}
				>
					<p className="mr-2">x{amount}</p>
					{editable ? (
						<div className="flex gap-2">
							<AmountButton onClick={() => handleDecrement()}>
								-
							</AmountButton>
							<AmountButton onClick={() => handleIncrement()}>
								+
							</AmountButton>
						</div>
					) : null}
				</div>
			</div>
		</div>
	);
};

ProductCard.displayName = "ProductCard";

export { ProductCard };
