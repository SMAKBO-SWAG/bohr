'use client'
import Image from "next/image";
import { AddToCartButton } from "./AddToCartButton";
import { useRouter } from "next/navigation";

interface FilterToggleProps {
   isNew: boolean,
   isPreOrder: boolean,
   name: string,
   type: string,
   price: string
}

const ProductCard = ({ isNew, isPreOrder, name, type, price }: FilterToggleProps) => {
    const router = useRouter()
    return (
        <div className="relative text-white flex flex-col w-full aspect-[3.5/4] cursor-pointer" onClick={() => router.push(`/product/${name}`)}>
            
            <div className="z-10 flex flex-col justify-between p-5 h-full">
              
              <div className="flex justify-between items-start">
                <div className="flex flex-col gap-3">

                    <div className="flex flex-row gap-2">
                        {isPreOrder? <p>Pre-Order</p> : null}
                        <p>{type}</p>
                    </div>

                    <div className="flex flex-col gap-2">
                        <p>{name.toUpperCase()}</p>
                        <p>Rp{price}</p>
                    </div>
                    
                </div>
                {isNew ? 
                <Image
                    src={`/svg/${name}-new-tag.svg`}
                    style={{objectFit:"cover"}}
                    alt={`/${name}-new-tag`}
                    width={105}
                    height={85}
                    unoptimized
                /> : null}
              </div>

              <div className="flex w-full justify-end">
                <AddToCartButton />
              </div>

            </div>

            <Image
              src={`/png/${name}-thumbnail.png`}
              className="w-full h-full rounded-3xl absolute"
              style={{objectFit:"cover"}}
              alt={`${name}-thumbnail`}
              width={0}
              height={0}
              unoptimized
            />
            
        </div>
    );
};

ProductCard.displayName = 'ProductCard';

export { ProductCard };
