'use client'
import { PrimaryButton } from "@/components/PrimaryButton";
import Image from "next/image";

export default function HomeModule() {

  return (
    <div className="relative gap-5 flex text-black items-center justify-center h-full"> 

        <div className="z-10 gap-4 p-10 flex flex-col items-center justify-center rounded-3xl">
            <Image
                src={`/png/fluore-thumbnail-s.png`}
                alt={`fluore-thumbnail-s`}
                width={200}
                height={200}
                unoptimized
            />
            <div className="flex flex-col gap-6 items-center">
                <div className="flex flex-col text-center gap-2">
                    <p>Confirm Deletion</p>
                    <p>Are you sure you want to remove this item from your cart?</p>
                </div>
                    <PrimaryButton>Back to Home</PrimaryButton>
            </div>
        </div>

    </div>
  );
}
