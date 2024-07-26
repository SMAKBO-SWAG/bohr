'use client'
import Image from "next/image";
import { FilterToggle } from "@/components/FilterToggle";
import { ProductThumbnail } from "@/components/ProductThumbnail";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { setFilter } from "@/redux/slices/filterSlice";
import { allProducts } from "@/data/products";
import { useEffect } from "react";
import { show } from "@/redux/slices/checkoutSlice";

export default function HomeModule() {
  const dispatch = useDispatch();
  const filter = useSelector((state: RootState) => state.filter.filter);
  const checkoutShow = useSelector((state: RootState) => state.checkout.show);

  const products = (filter === 'All')? allProducts : allProducts.filter((product) => product.type === filter)

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter(event.target.value));
  };

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
                <FilterToggle onChange={handleFilter} type="All" checked={filter==='All'} >All</FilterToggle>
                <FilterToggle onChange={handleFilter} type="Bracelet" checked={filter==='Bracelet'}>Bracelet</FilterToggle>
                <FilterToggle onChange={handleFilter} type="Sticker" checked={filter==='Sticker'}>Sticker</FilterToggle>
                <FilterToggle onChange={handleFilter} type="T-shirt" checked={filter==='T-shirt'}>T-shirt</FilterToggle>
                <FilterToggle onChange={handleFilter} type="Hoodie" checked={filter==='Hoodie'}>Hoodie</FilterToggle>
                <p className="text-nowrap text-dark">and more to come...</p>
            </div>

            <div className="flex flex-col items-center gap-5">

                {products.map((product, key) => {
                    return <ProductThumbnail 
                    name={product.name} 
                    type={product.type}
                    price={product.price}
                    isNew={product.isNew} 
                    isPreOrder={product.isPreOrder} 
                    accent={product.accent} 
                    accentComplement={product.accentComplement}
                    key={key}/>
                })}

                {
                    checkoutShow?
                    <div className="h-14">

                    </div>: null
                }

            </div>
        </div>

    </div>
  );
}
