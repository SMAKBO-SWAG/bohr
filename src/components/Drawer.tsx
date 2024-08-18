"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeDrawer } from "@/redux/slices/drawerSlice";
import { RootState } from "@/redux/store";
import { BraceletSizeButton } from "./buttons/BraceletSizeButton";
import { AmountButton } from "./buttons/AmountButton";
import { AddToCartButton } from "./buttons/AddToCartButton";
import { setCart } from "@/redux/slices/cartSlice";

export default function Drawer() {
	const dispatch = useDispatch();

	const { showDrawer, drawerContent } = useSelector((state: RootState) => ({
		showDrawer: state.drawer.showDrawer,
		drawerContent: state.drawer.drawerContent!,
	}));

	// Animation states
	const [visible, setVisible] = useState(showDrawer);
	const [slideClass, setSlideClass] = useState("");
	const [fadeClass, setFadeClass] = useState("");

	// Attribute states
	const [size, setSize] = useState<string>("m");
	const [amount, setAmount] = useState<number>(1);

	useEffect(() => {
		if (showDrawer) {
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
	}, [showDrawer]);

	const handleAddToCart = () => {
		dispatch(setCart({ ...drawerContent, size, amount }));
		dispatch(closeDrawer());
	};

	if (!visible) return null;

	return (
		<>
			<div
				className={`fixed w-screen sm:w-[480px] h-full z-50 overflow-auto flex justify-center items-end text-black`}
			>
				<div
					className={`w-full h-full bg-black bg-opacity-30 backdrop-blur-sm absolute ${fadeClass}`}
					onClick={() => dispatch(closeDrawer())}
				></div>
				<div
					className={`z-10 p-5 h-fit flex flex-col gap-5 w-full bg-white rounded-[20px_20px_0px_0px] ${slideClass}`}
				>
					<div className="flex flex-row items-center gap-4">
						<Image
							src={`/images/thumbnails/fluore-thumbnail-s.png`}
							alt={`fluore-thumbnail-s`}
							width={84}
							height={84}
							unoptimized
						/>
						<div className="flex flex-col gap-2 ">
							<p>{drawerContent.type}</p>
							<p className="text-xl font-bold leading-5">
								{drawerContent.name.toUpperCase()}
							</p>
							<p>
								Rp{drawerContent.price.toLocaleString("id-ID")}
							</p>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<hr className="border-t border-[#E4F6FF] border-1" />
						<p>Size Chart</p>
						<div className="flex w-full flex-row items-center justify-between gap-8">
							<Image
								src={`/images/illustrations/bracelet-size-chart-illustration.png`}
								alt={`bracelet-diameter`}
								width={0}
								height={0}
								className="w-full aspect-[3.5/1]"
								unoptimized
							/>

							{/* <BraceletSizeButton
								type="s"
								onChange={() => setSize("s")}
								checked={size === "s"}
							></BraceletSizeButton>
							<BraceletSizeButton
								type="m"
								onChange={() => setSize("m")}
								checked={size === "m"}
							></BraceletSizeButton>
							<BraceletSizeButton
								type="l"
								onChange={() => setSize("l")}
								checked={size === "l"}
							></BraceletSizeButton> */}
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
