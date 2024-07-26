import { allProducts } from "@/data/products";
import { setCart } from "@/redux/slices/cartSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const CheckoutButton = ({onClick} : {onClick : () => void}) => {
    const dispatch = useDispatch()

    const cart = useSelector((state : RootState) => state.cart.cart)
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

    useEffect(() => {
        const products = localStorage.getItem('cart')
        let productsJSON = null
      
        if (products){
          productsJSON = JSON.parse(products)
        }
    
        dispatch(setCart(productsJSON))
    }, [])

    return (
        <button 
            className="rounded-full bg-dark w-full h-[54px] flex items-center justify-between p-5 text-white
                transition ease-in-out duration-150 transform 
                active:scale-[0.98]
                hover:bg-darker "
                onClick={onClick}>

            <p>Rp{totalPrice}</p>
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