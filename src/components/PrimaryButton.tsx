import { useRouter } from "next/navigation";
import { ReactNode } from "react";

const PrimaryButton = ({children} : {children : ReactNode}) => {
    const router = useRouter()
    return (
        <button 
            className="rounded-full bg-dark px-5 py-2 flex items-center justify-center text-white
                transition ease-in-out duration-150 transform 
                active:scale-95
                hover:bg-darker"
                onClick={() => router.push('/cart')}>
                {children}
        </button>
    );
};

PrimaryButton.displayName = 'PrimaryButton';

export { PrimaryButton };