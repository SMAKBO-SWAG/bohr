'use client'
import Image from "next/image";
import { AmountButton } from "./AmountButton";
import { allProducts } from "@/data/products";
import { incrementAmount, decrementAmount } from "@/redux/slices/cartSlice";
import { useSelector, useDispatch} from "react-redux";
import { RootState } from "@/redux/store";


interface ProductCardProps {
    name: string,
    index: number,
    editable: boolean,
}

const ProductCard = ({ name, index , editable}: ProductCardProps) => {

    const dispatch = useDispatch()

    const product = allProducts.find((item) => item.name === name)

    const cart = useSelector((state: RootState) => state.cart.cart);

    const size = cart[index].size
    const amount = cart[index].amount

    const handleIncrement = () => {
        dispatch(incrementAmount({name, size, amount}))
    }

    const handleDecrement = () => {
        dispatch(decrementAmount({name, size, amount}))
    }

    return (
        <div className="flex flex-row items-center gap-4">
            <Image
                src={`/images/${name}-thumbnail-s.png`}
                alt={`${name}-thumbnail-s`}
                width={84}
                height={84}
                unoptimized
            />
            <div className="flex w-full h-full justify-between">
                <div className="flex flex-col gap-2 ">
                    <p>{product?.type} ({size.toUpperCase()})</p>
                    <p className="text-xl font-bold leading-5">{product?.name.toUpperCase()}</p>
                    <p>Rp{product?.price}</p>
                </div>
                <div className={`flex flex-col items-end ${editable? 'justify-end': 'justify-center' }`}>
                    <p>{amount}</p>
                    {editable ?
                        <div className="flex gap-2">
                            <AmountButton onClick={() => handleDecrement()}>-</AmountButton>
                            <AmountButton onClick={() => handleIncrement()}>+</AmountButton>
                        </div> : null
                    }
                </div>
            </div>
        </div>
    );
};

ProductCard.displayName = 'ProductCard';

export { ProductCard };
