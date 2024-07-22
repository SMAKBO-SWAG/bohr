import Image from "next/image";
import { useDispatch } from 'react-redux'
import { show } from "@/redux/slices/modalSlice";

const AddToCartButton = () => {
    const dispatch = useDispatch()

    return (
        <button 
            onClick={(e) => { e.stopPropagation() ; dispatch(show())}}
            className="
                flex py-2 px-4 gap-2 text-white items-center justify-center bg-dark rounded-full
                transition ease-in-out duration-150 transform 
                active:scale-95
                hover:bg-darker
                shadow-[
                    0px_43px_12px_0px_rgba(0,0,0,0.00),
                    0px_27px_11px_0px_rgba(0,0,0,0.01),
                    0px_15px_9px_0px_rgba(0,0,0,0.05),
                    0px_7px_7px_0px_rgba(0,0,0,0.09),
                    0px_2px_4px_0px_rgba(0,0,0,0.10)
                    ]">
            <Image
                src={`/svg/add-to-cart-icon.svg`}
                alt={`add-to-cart-icon`}
                width={21}
                height={21}
                unoptimized
            />
            <p>Add to Cart</p>
        </button>
    );
};

AddToCartButton.displayName = 'AddToCartButton';

export { AddToCartButton };