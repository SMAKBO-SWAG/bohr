"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { closeDrawer } from "@/redux/slices/drawerSlice";
import { RootState } from "@/redux/store";
import { AmountButton } from "./buttons/AmountButton";
import { AddToCartButton } from "./buttons/AddToCartButton";
import { setCart } from "@/redux/slices/cartSlice";
import { products } from "@/data/products";

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
	const [size, setSize] = useState<string>("S");
    const [packageSizes, setPackageSizes] = useState(["S", "S", "S"]);
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
				setSize("S");
                setPackageSizes(["S", "S", "S"])
				setAmount(1);
			}, 280);

			return () => clearTimeout(clearState);
		}
	}, [showDrawer]);

	const handleAddToCart = () => {
		dispatch(setCart({ ...drawerContent, size, amount }));
		dispatch(closeDrawer());
	};

    const handleBulkSize = (index: number, value: string) => {
        packageSizes.splice(index, 1, value)
        setPackageSizes(packageSizes)
        setSize(packageSizes.toString())
    }

    useEffect( () => {console.log(size)},[size])

	if (!visible) return null;

	return (
		<>
			<div
				className={`fixed w-screen sm:w-[480px] h-full z-50 overflow-y-auto flex justify-center items-end text-black`}
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
							src={`/images/thumbnails/${drawerContent.id}-thumbnail-s.png`}
							alt={`fluore-thumbnail-s`}
							width={84}
							height={84}
							unoptimized
						/>
						<div className="flex flex-col gap-2 ">
							<p>{drawerContent.tag.toString()}</p>
							<p className="text-xl font-bold leading-5">
								{drawerContent.name.toUpperCase()}
							</p>
							<p>
								Rp{drawerContent.price.toLocaleString("id-ID")}
							</p>
						</div>
					</div>

                    {drawerContent.tag.includes("Bracelet") &&
                        <div className="flex flex-col gap-4">
                            <hr className="border-t border-[#E4F6FF] border-1" />
                            <p>Bracelet Size</p>
                            <div className="flex w-full flex-row items-center justify-between gap-8">
                                <Image
                                    src={`/images/illustrations/bracelet-size-chart-illustration.png`}
                                    alt={`bracelet-diameter`}
                                    width={0}
                                    height={0}
                                    className="w-full aspect-[3.5/1]"
                                    unoptimized
                                />
                            </div>
                        </div>
                    }

                    {drawerContent.tag.includes("T-Shirt") &&
                    
                    <div className="flex flex-col gap-4">
						<hr className="border-t border-[#E4F6FF] border-1" />
						<p>T-Shirt Size Chart</p>
						<div className="flex w-full flex-row items-center justify-between gap-8">
							<Image
								src={`/images/illustrations/tshirt-size-chart-illustration.png`}
								alt={`bracelet-diameter`}
								width={0}
								height={0}
								className="w-full"
								unoptimized
							/>
						</div>
                        
                        <div className="flex justify-between">
                            <p>Choose Size</p>
                            {drawerContent.id === 'suit-up-your-squad' ?
                            <div className="flex gap-2">
                                <select name="size" id="size" onChange={(e) => handleBulkSize(0, e.target.value)}>
                                    <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                </select>
                                <select name="size" id="size" onChange={(e) => handleBulkSize(1, e.target.value)}>
                                <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                </select>
                                <select name="size" id="size" onChange={(e) => handleBulkSize(2, e.target.value)}>
                                <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                                </select>
                            </div>
                            :
                            <select name="size" id="size" onChange={(e) => setSize(e.target.value)}>
                                <option value="XS">XS</option>
                                    <option value="S">S</option>
                                    <option value="M">M</option>
                                    <option value="L">L</option>
                                    <option value="XL">XL</option>
                                    <option value="XXL">XXL</option>
                            </select>
                            }
                        </div>

					</div>}

                    

                   

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

					<AddToCartButton disabled={false} onClick={() => handleAddToCart()} />
				</div>
			</div>
		</>
	);
}
