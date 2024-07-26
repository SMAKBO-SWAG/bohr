'use client'
import { AmountButton } from "@/components/AmountButton";
import { BackButton } from "@/components/BackButton";
import { ProductCard } from "@/components/ProductCard";
import { setCart } from "@/redux/slices/cartSlice";
import { show } from "@/redux/slices/modalSlice";
import { RootState } from "@/redux/store";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export interface CartState {
    name: string,
    size: string,
    amount: number
}

export default function ClassicProductModule() {
  const dispatch = useDispatch()
  const cart = useSelector((state: RootState) => state.cart.cart);

  useEffect(() => {
    const products = localStorage.getItem('cart')
    let productsJSON = null
  
    if (products){
      productsJSON = JSON.parse(products)
    }

    dispatch(setCart(productsJSON))
  }, [])

  return (
    <div className="relative flex flex-col items-center gap-6 text-black">          
        <div className="w-full flex justify-between items-center">
            <BackButton/>
            <p className="text-2xl font-bold tracking-wide">Cart</p>
            <div className="w-[54px]"></div>
        </div>
        <div className="flex flex-col w-full gap-4">

            {cart?.map((product: { name: string, size: string, amount: number }, index: number, key: any, ) => {
                return <ProductCard name={product.name} index={index} key={key} editable={true}></ProductCard>
            })}
            
        </div>
    </div>
  );
}
