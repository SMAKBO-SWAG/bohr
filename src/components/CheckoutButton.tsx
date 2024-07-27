import { allProducts } from "@/data/products";
import { setCart } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const CheckoutButton = ({pathname} : {pathname : string}) => {
    const router = useRouter()
    const cart = useSelector((state : RootState) => state.cart.cart)
      
    const handleCheckout = () => {
        if (pathname === "/checkout") {

            // TODO
            router.push("/success")
        } else {
            router.push("/checkout")
        }
    }

    const [totalPrice, setTotalPrice] = useState(0)

    const getPrice = (name : string) => {
        const product = allProducts.find((item) => item.name === name)

        if (product){
            const price = product.price
            return price
        }

        return -1
    }

    useEffect(() => {
        let price = 0
        
        if (cart)
        cart.map((item) => {
            price += getPrice(item.name) * item.amount
            
        })

        setTotalPrice(price)

    },[cart])

    return (
        <button 
            className="rounded-full bg-dark w-full h-[54px] flex items-center justify-between p-5 text-white
                transition ease-in-out duration-150 transform 
                active:scale-[0.98]
                hover:bg-darker "
                onClick={() => handleCheckout()}>

            <p>Rp{totalPrice}</p>
            <div className="flex gap-2">
                <p>Checkout</p>
                <Image
                    src={`/svg/icons/arrow-icon.svg`}
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