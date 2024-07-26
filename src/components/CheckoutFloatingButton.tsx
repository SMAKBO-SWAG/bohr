'use client';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from "@/redux/store";
import { CartButton } from "./CartButton";
import { CheckoutButton } from "./CheckoutButton";
import { show } from "@/redux/slices/checkoutSlice";
import { usePathname, useRouter } from 'next/navigation'

export default function CheckoutFloatingButton() {
    const dispatch = useDispatch();
    const router = useRouter();
    const pathname = usePathname();

    const showButton = useSelector((state: RootState) => state.checkout.show);

    const [visible, setVisible] = useState(showButton);
    const [slideClass, setSlideClass] = useState("");

    const handleCheckout = () => {
        if (pathname === "/checkout") {

            console.log('TODO')
            localStorage.removeItem('cart')
            router.push("/success")
        } else {
            router.push("/checkout")
        }
    }

    useEffect(() => {
        if (showButton) {
            setVisible(true);
            setSlideClass("animate-slideIn");
        } else {
            setSlideClass("animate-slideOut");
            // setTimeout(() => setVisible(false), 280);
        }
    }, [showButton]);

    useEffect(() => {
        const cart = localStorage.getItem('cart')
    
        if (cart) {
            dispatch(show())
        }

      }, [])

    if (!visible) return null;

    return (
        <>
            {pathname !== '/success' ?
            <div className={`fixed w-screen sm:w-[480px] h-full z-50 p-5 flex justify-center items-end pointer-events-none`}>
                <div className={`flex gap-4 w-full pointer-events-auto ${slideClass}`}>
                    <CartButton/>
                    <CheckoutButton onClick = {() => handleCheckout()}/>
                </div>
            </div> : null
            }
        </>
    );
}