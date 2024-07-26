'use client'
import { AmountButton } from "@/components/AmountButton";
import { BackButton } from "@/components/BackButton";
import { show } from "@/redux/slices/modalSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

export default function ClassicProductModule() {
  const dispatch = useDispatch()

  return (
    <div className="relative flex flex-col items-center gap-6 text-black">          
        <div className="w-full flex justify-between items-center">
            <BackButton/>
            <p className="text-2xl font-bold tracking-wide">Cart</p>
            <div className="w-[54px]"></div>
        </div>
        <div className="flex flex-col w-full">

            <div className="flex flex-row items-center gap-4">
                <Image
                    src={`/png/fluore-thumbnail-s.png`}
                    alt={`fluore-thumbnail-s`}
                    width={84}
                    height={84}
                    unoptimized
                />
                <div className="flex w-full h-full justify-between">
                    <div className="flex flex-col gap-2 ">
                        <p>Bracelet</p>
                        <p className="text-xl font-bold leading-5">FLUORE</p>
                        <p>Rp25.000</p>
                    </div>
                    <div className="flex flex-col items-end justify-end">
                        <p>x2</p>
                        <div className="flex gap-2">
                            <AmountButton>-</AmountButton>
                            <AmountButton>+</AmountButton>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
        <button onClick={() => dispatch(show())} >Modal</button>

    </div>
  );
}
