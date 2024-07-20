"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { close } from "@/redux/slices/modalSlice";
import { RootState } from "@/redux/store";

function Modal() {
    const show = useSelector((state : RootState) => state.modal.show)
    const dispatch = useDispatch()


    const [animationClass, setAnimationClass] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (show) {
            setIsVisible(true);
            setAnimationClass("animate-fadeIn");
        } else {
            setAnimationClass("animate-fadeOut");
            setTimeout(() => {
                setIsVisible(false);
            }, 500);
        }
    }, [show]);

    return (
        <>
            <div className={`${isVisible ? '' : 'hidden'} fixed left-0 top-0 w-full h-full bg-black bg-opacity-50 z-50 overflow-auto backdrop-blur flex justify-center items-center ${animationClass}`}>
                <div className="bg-white m-auto p-8">
                    <div className="flex flex-col items-center">
                        <p>Modal content</p>
                        <br/>
                        <button onClick={() => dispatch(close())} type="button" className="bg-red-500 text-white p-2">Close Modal</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
