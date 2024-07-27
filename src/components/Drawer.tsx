"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { close } from "@/redux/slices/drawerSlice";
import { RootState } from "@/redux/store";
import { BraceletFilterButton } from "./BraceletSizeButton";
import { AmountButton } from "./AmountButton";
import { allProducts } from "@/data/products";
import { AddToCartButton } from "./AddToCartButton";
import { setCart } from "@/redux/slices/cartSlice";

export default function Drawer() {
	const dispatch = useDispatch();

	// Drawer states
	const show = useSelector((state: RootState) => state.drawer.show);
	const name = useSelector((state: RootState) => state.drawer.name);

	// Animation states
	const [visible, setVisible] = useState(show);
	const [slideClass, setSlideClass] = useState("");
	const [fadeClass, setFadeClass] = useState("");

	useEffect(() => {
		if (show) {
			setVisible(true);
			setSlideClass("animate-slideIn");
			setFadeClass("animate-fadeIn");
		} else {
			setSlideClass("animate-slideOut");
			setFadeClass("animate-fadeOut");

			const clearState = setTimeout(() => {
                setVisible(false);
                setSize("m");
                setAmount(1);
            }, 280);
    
            return () => clearTimeout(clearState);
		}
	}, [show]);

	// Product states
	const product = allProducts.find((product) => product.name === name);
	const [size, setSize] = useState<string>("m");
	const [amount, setAmount] = useState<number>(1);

	const handleAddToCart = () => {
		dispatch(setCart({ name, size, amount }));
		dispatch(close());
	};

	if (!visible) return null;

	return (
		<>
			<div
				className={`fixed w-screen sm:w-[480px] h-full z-50 overflow-auto flex justify-center items-end text-black`}
			>
				<div
					className={`w-full h-full bg-black bg-opacity-30 backdrop-blur-sm absolute ${fadeClass}`}
					onClick={() => dispatch(close())}
				></div>
				<div
					className={`z-10 p-5 h-fit flex flex-col gap-5 w-full bg-white rounded-[20px_20px_0px_0px] ${slideClass}`}
				>
					<div className="flex flex-row items-center gap-4">
						<Image
							src={`/images/fluore-thumbnail-s.png`}
							alt={`fluore-thumbnail-s`}
							width={84}
							height={84}
							unoptimized
						/>
						<div className="flex flex-col gap-2 ">
							<p>{product?.type}</p>
							<p className="text-xl font-bold leading-5">
								{product?.name.toUpperCase()}
							</p>
							<p>{product?.price}</p>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<hr className="border-t border-[#E4F6FF] border-1" />
						<p>Sizes(Keliling)</p>
						<div className="flex w-full flex-row items-center justify-between gap-8">
							<BraceletFilterButton
								type="s"
								onChange={() => setSize("s")}
								checked={size === "s"}
							></BraceletFilterButton>
							<BraceletFilterButton
								type="m"
								onChange={() => setSize("m")}
								checked={size === "m"}
							></BraceletFilterButton>
							<BraceletFilterButton
								type="l"
								onChange={() => setSize("l")}
								checked={size === "l"}
							></BraceletFilterButton>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<hr className="border-t border-[#E4F6FF] border-1" />
						<div className="flex flex-row justify-between">
							<p>Amount</p>
							<div className="flex items-center gap-2">
								<AmountButton
									onClick={() =>
										setAmount((prev) => prev - 1)
									}
									disabled={amount <= 1}
								>
									-
								</AmountButton>
								<p>{amount}</p>
								<AmountButton
									onClick={() =>
										setAmount((prev) => prev + 1)
									}
								>
									+
								</AmountButton>
							</div>
						</div>
					</div>

					<AddToCartButton onClick={() => handleAddToCart()} />
				</div>
			</div>
		</>
	);
}
