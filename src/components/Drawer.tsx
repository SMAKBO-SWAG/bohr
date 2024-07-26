'use client';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { close } from "@/redux/slices/drawerSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { BraceletFilterButton } from "./BraceletSizeButton";
import { AmountButton } from "./AmountButton";
import { allProducts } from "@/data/products";
import { AddToCartButton } from "./AddToCartButton";
import { setName, setSize, incrementAmount, decrementAmount, clear, setCart } from "@/redux/slices/cartSlice";
import { show  as showCartButton }  from "@/redux/slices/checkoutSlice";

export default function Drawer() {
    const show = useSelector((state: RootState) => state.drawer.show);
    const name = useSelector((state: RootState) => state.drawer.name);

    const cartName = useSelector((state: RootState) => state.cart.name);
    const size = useSelector((state: RootState) => state.cart.size);
    const amount = useSelector((state: RootState) => state.cart.amount);

    const product = allProducts.find(product => product.name === name);

    const dispatch = useDispatch();

    const [visible, setVisible] = useState(show);
    const [slideClass, setSlideClass] = useState("");
    const [fadeClass, setFadeClass] = useState("");

    useEffect(() => {
        dispatch(setName(name))
        dispatch(setSize('m'))

        if (show) {
            setVisible(true);
            setSlideClass("animate-slideIn");
            setFadeClass("animate-fadeIn");
        } else {
            setSlideClass("animate-slideOut");
            setFadeClass("animate-fadeOut");
            setTimeout(() => setVisible(false), 280);
            dispatch(clear())
        }
    }, [show]);

    const handleSize = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSize(event.target.value));
    };

    const handleAddToCart = () => {
    
        const currentCart = localStorage.getItem('cart');
    
        if (!currentCart) {
            localStorage.setItem('cart', JSON.stringify([{ name: cartName, size, amount }]));
            dispatch(showCartButton())
            dispatch(clear())
            return;
        }
    
        let currentCartJSON = JSON.parse(currentCart);
        const productIndex = currentCartJSON.findIndex((item : any) => item.name === cartName && item.size === size);
    
        if (productIndex !== -1) {
            currentCartJSON[productIndex].amount += amount;
        } else {
            currentCartJSON.push({ name: cartName, size, amount });
            dispatch(showCartButton())
        }
    
        localStorage.setItem('cart', JSON.stringify(currentCartJSON));
        dispatch(setCart(currentCartJSON))
        dispatch(clear())
    };

    if (!visible) return null;

    return (
        <>
            <div className={`fixed w-screen sm:w-[480px] h-full z-50 overflow-auto flex justify-center items-end text-black`}>
                <div className={`w-full h-full bg-black bg-opacity-30 backdrop-blur-sm absolute ${fadeClass}`} onClick={() => dispatch(close())}>
                </div>
                <div className={`z-10 p-5 h-fit flex flex-col gap-5 w-full bg-white rounded-[20px_20px_0px_0px] ${slideClass}`}>

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
                            <p className="text-xl font-bold leading-5">{product?.name.toUpperCase()}</p>
                            <p>{product?.price}</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <hr className="border-t border-[#E4F6FF] border-1"/>
                        <p>Sizes(Keliling)</p>
                        <div className="flex w-full flex-row items-center justify-between gap-8">

                            <BraceletFilterButton type='s' onChange={handleSize} checked={size === 's'}></BraceletFilterButton>
                            <BraceletFilterButton type='m' onChange={handleSize} checked={size === 'm'}></BraceletFilterButton>
                            <BraceletFilterButton type='l' onChange={handleSize} checked={size === 'l'}></BraceletFilterButton>

                        </div>

                    </div>

                    <div className="flex flex-col gap-4">
                        <hr className="border-t border-[#E4F6FF] border-1"/>
                        <div className="flex flex-row justify-between">
                            <p>Amount</p>
                            <div className="flex items-center gap-2">
                                <AmountButton onClick={() => dispatch(decrementAmount())}>-</AmountButton>
                                <p>{amount}</p>
                                <AmountButton onClick={() => dispatch(incrementAmount())}>+</AmountButton>
                            </div>
                        </div>
                    </div>

                    <AddToCartButton onClick={() => {handleAddToCart(); dispatch(close())}}/>
                </div>
            </div>
        </>
    );
}