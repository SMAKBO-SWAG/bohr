'use client';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { close } from "@/redux/slices/drawerSlice";
import { RootState } from "@/redux/store";
import { CartButton } from "./CartButton";
import { CheckoutButton } from "./CheckoutButton";

export default function CheckoutFloatingButton() {
    const show = useSelector((state: RootState) => state.checkout.show);
    const dispatch = useDispatch();

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
            setTimeout(() => setVisible(false), 280);
        }
    }, [show]);

    if (!visible) return null;

    return (
        <>
            <div className={`text-black fixed w-screen sm:w-[480px] h-full z-50 p-5 flex justify-center items-end pointer-events-none`}>
                <div className="flex gap-4 w-full pointer-events-auto">
                    <CartButton/>
                    <CheckoutButton/>
                </div>
            </div>
        </>
    );
}