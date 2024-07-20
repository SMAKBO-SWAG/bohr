'use client';
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { close } from "@/redux/slices/modalSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { AddToCartButton } from "./AddToCartButton";
import { BraceletFilterButton } from "./BraceletSizeButton";

function Modal() {
    const show = useSelector((state: RootState) => state.modal.show);
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
            setTimeout(() => setVisible(false), 300);
        }
    }, [show]);

    if (!visible) return null;

    return (
        <>
            <div className={`text-black fixed w-screen sm:w-[480px] h-full z-50 overflow-auto flex justify-center items-end`}>
                <div className={`w-full h-full backdrop-blur-sm absolute ${fadeClass}`} onClick={() => dispatch(close())}>
                </div>
                <div className={`z-10 p-5 h-fit flex flex-col gap-5 w-full bg-white rounded-[20px_20px_0px_0px] ${slideClass}`}>

                    <div className="flex flex-row items-center gap-4">
                        <Image
                            src={`/png/fluore-thumbnail-s.png`}
                            alt={`fluore-thumbnail-s`}
                            width={82}
                            height={82}
                            unoptimized
                        />
                        <div className="flex flex-col gap-2 ">
                            <p>Bracelet</p>
                            <p>FLUORE</p>
                            <p>Rp25.000</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4">
                        <hr className="border-t border-[#E4F6FF] border-1"/>
                        <p>Sizes(Keliling)</p>
                        <div className="flex w-full flex-row items-center justify-between gap-8">

                            <BraceletFilterButton type='s' onChange={() => null}></BraceletFilterButton>
                            <BraceletFilterButton type='m' onChange={() => null}></BraceletFilterButton>
                            <BraceletFilterButton type='l' onChange={() => null}></BraceletFilterButton>

                        </div>

                    </div>

                    <div className="flex flex-col gap-4">
                        <hr className="border-t border-[#E4F6FF] border-1"/>
                        <div className="flex flex-row justify-between">
                            <p>Amount</p>
                            <div className="flex">
                                <button>+</button>
                                <p>0</p>
                                <button>-</button>
                            </div>
                        </div>
                    </div>

                    <AddToCartButton></AddToCartButton>
                </div>
            </div>
        </>
    );
}

export default Modal;
