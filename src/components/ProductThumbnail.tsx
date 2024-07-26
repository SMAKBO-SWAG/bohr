'use client'
import Image from "next/image";
import { AddToCartButton } from "./AddToCartButton";
import { useRouter } from "next/navigation";
import { show } from "@/redux/slices/drawerSlice";
import { useDispatch } from "react-redux";

interface FilterToggleProps {
    isNew: boolean,
    isPreOrder: boolean,
    accent: string,
    accentComplement: string,
    name: string,
    type: string,
    price: number
}

const ProductThumbnail = ({ isNew, isPreOrder, accent, accentComplement, name, type, price }: FilterToggleProps) => {
    const router = useRouter();
    const dispatch = useDispatch();

    return (
        <div className="relative flex flex-col w-full aspect-[3.5/4] cursor-pointer" onClick={() => router.push(`/product/${name}`)}>
            <div className="z-10 flex flex-col justify-between p-5 h-full">
                <div className="flex justify-between items-start">
                    <div className="flex flex-col gap-3" style={{ color: accent }}>
                        <div className="flex flex-row gap-2 items-center">
                            {isPreOrder ?
                                <div className="py-0.5 px-3 rounded-full font-medium" style={{ backgroundColor: accent, color: accentComplement }}>
                                    <p>Pre-Order</p>
                                </div> : null}
                                <div className="py-0.5 px-3 rounded-full font-medium" style={{ backgroundColor: accent, color: accentComplement }}>
                                    <p>{type}</p>
                                </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <p className="text-3xl font-bold tracking-wider">{name.toUpperCase()}</p>
                            <p className="text-lg">Rp{price}</p>
                        </div>
                    </div>
                    {isNew ?
                        <Image
                            src={`/svg/${name}-new-tag.svg`}
                            style={{ objectFit: "cover" }}
                            alt={`/${name}-new-tag`}
                            width={105}
                            height={85}
                            unoptimized
                        /> : null}
                </div>
                <div className="flex w-full justify-end">
                    <AddToCartButton onClick={() => dispatch(show(name))}/>
                </div>
            </div>
            <Image
                src={`/images/${name}-thumbnail.png`}
                className="w-full h-full rounded-3xl absolute"
                style={{ objectFit: "cover" }}
                alt={`${name}-thumbnail`}
                width={0}
                height={0}
                unoptimized
            />
        </div>
    );
};

ProductThumbnail.displayName = 'ProductThumbnail';

export { ProductThumbnail };
