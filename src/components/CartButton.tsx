import Image from "next/image";
import { useRouter } from "next/navigation";

const CartButton = () => {
    const router = useRouter()
    return (
        <button 
            className="rounded-full bg-dark min-w-[54px] h-[54px] flex items-center justify-center
                transition ease-in-out duration-150 transform 
                active:scale-95
                hover:bg-darker"
                onClick={() => router.push('/cart')}>
            <Image
                src={`/svg/icons/cart-icon.svg`}
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