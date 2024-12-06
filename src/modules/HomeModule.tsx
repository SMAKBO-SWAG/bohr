"use client";
import Image from "next/image";
import { products } from "@/data/products";
import { FilterToggle } from "@/components/FilterToggle";
import { ProductThumbnail } from "@/components/ProductThumbnail";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { showModal } from "@/redux/slices/modalSlice";
import MerchSuggestModal from "@/components/modals/MerchSuggestModal";
import { CountdownLabel } from "@/components/CountdownLabel";

export default function HomeModule() {
    const dispatch = useDispatch()

    const { cart, filter } = useSelector((state: RootState) => ({
		cart: state.cart.cart,
		filter: state.filter.filter,
	}));

	const filteredProducts =
		filter === "All"
			? products
			: products.filter((product) => product.tag[0] === filter);

	return (
		<div className="relative gap-5 flex flex-col h-full">
            <div className="flex justify-between items-center">
			<Image
				src="/svg/logo.svg"
				width={225}
				height={45}
				alt="SMAKBO SWAG Logo"
			/>
            <Image
				src="/svg/icons/suggestion-icon.svg"
				width={48}
				height={48}
				alt="Suggestion Icon"
                className="transition ease-in-out duration-150 transform active:scale-95 hover:opacity-90 cursor-pointer"
                onClick={() => dispatch(showModal(<MerchSuggestModal/>))}
			/>
            </div>

			<div className="flex flex-col gap-4 h-full">
                <CountdownLabel/>

				<div className="flex justify-between items-center gap-2 overflow-x-scroll py-2 px-5 mx-[-20px] no-scrollbar">
					<FilterToggle type="All" checked={filter === "All"} />

                    <FilterToggle
						type="Package"
						checked={filter === "Package"}
					/>

                    <FilterToggle
						type="Bracelet"
						checked={filter === "Bracelet"}
					/>

                    <FilterToggle
						type="T-Shirt"
						checked={filter === "T-Shirt"}
					/>
				</div>

				{filteredProducts.length ? (
					<div className="flex flex-col items-center gap-5">
						{filteredProducts.map((product, index) => {
							return (
								<ProductThumbnail
									product={product}
									key={index}
								/>
							);
						})}

						{cart.length !== 0 && <div className="h-14" />}
					</div>
				) : (
					<div className="flex items-center justify-center h-full font-medium">
						Cookin&apos; soon ..
					</div>
				)}
			</div>
		</div>
	);
}
