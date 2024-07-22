'use client';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { close } from "@/redux/slices/modalSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";


export default function Drawer() {
    const show = useSelector((state: RootState) => state.modal.show);
    const dispatch = useDispatch();

    const [visible, setVisible] = useState(show);

    useEffect(() => {
        if (show) {
            setVisible(true);
           
        } else {
            setVisible(false)
        }
    }, [show]);

    if (!visible) return null;

    return (
        <>
            <div className={`text-black fixed w-screen sm:w-[480px] h-full z-50 overflow-auto flex justify-center items-center`}>
                <div className={`w-full h-full bg-black bg-opacity-30 backdrop-blur-sm absolute`} onClick={() => dispatch(close())}>
                </div>

                <div className="z-10 w-screen sm:w-[480px] mx-5 bg-white gap-4 p-10 flex flex-col items-center justify-center rounded-3xl">
                    <Image
                        src={`/png/fluore-thumbnail-s.png`}
                        alt={`fluore-thumbnail-s`}
                        width={200}
                        height={200}
                        unoptimized
                    />
                    <div className="flex flex-col gap-6 items-center">
                        <div className="flex flex-col text-center gap-2">
                            <p>Confirm Deletion</p>
                            <p>Are you sure you want to remove this item from your cart?</p>
                        </div>

                        <div className="flex w-full justify-between">
                            <PrimaryButton>Cancel</PrimaryButton>
                            <SecondaryButton>remove</SecondaryButton>
                        </div>

                    </div>


                </div>
            </div>
        </>
    );
}