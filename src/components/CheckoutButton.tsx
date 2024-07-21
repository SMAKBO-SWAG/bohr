import Image from "next/image";

const CheckoutButton = () => {

    return (
        <button 
            className="rounded-full bg-dark w-full h-[54px] flex items-center justify-between p-5 text-white
                transition ease-in-out duration-150 transform 
                active:scale-[0.98]
                hover:bg-darker ">

            <p>Rp50.000</p>
            <div className="flex gap-2">
                <p>Checkout</p>
                <Image
                    src={`/svg/arrow.svg`}
                    alt={`arrow`}
                    width={21}
                    height={20}
                    unoptimized
                />
            </div>
        </button>
    );
};

CheckoutButton.displayName = 'CheckoutButton';

export { CheckoutButton };