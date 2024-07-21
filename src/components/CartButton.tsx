import Image from "next/image";

const CartButton = () => {

    return (
        <button 
            className="rounded-full bg-dark min-w-[54px] h-[54px] flex items-center justify-center
                transition ease-in-out duration-150 transform 
                active:scale-95
                hover:bg-darker active: ">
            <Image
                src={`/svg/cart-icon.svg`}
                alt={`cart-icon`}
                width={22}
                height={23}
                unoptimized
            />
        </button>
    );
};

CartButton.displayName = 'CartButton';

export { CartButton };