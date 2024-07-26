'use client'
import { BackButton } from "@/components/BackButton";
import { ProductThumbnail } from "@/components/ProductThumbnail";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useSelector } from "react-redux";

export default function FluoreProductModule() {
    const checkoutShow = useSelector((state : RootState) => state.checkout.show)

  return (
    <div className="relative flex flex-col items-center gap-6 text-black">          
        <div className="w-full flex justify-between items-center">
            <BackButton/>
            <p className="text-2xl font-bold tracking-wide">Fluore</p>
            <div className="w-[54px]"></div>
        </div>
        <ProductThumbnail isNew={true} isPreOrder={true} accent="#ffffff" accentComplement="#132042" name="fluore" type="Bracelet" price={25000}/>
        <p>Kenalin Fluore, gelang dengan desain minimalis tulisan SMAKBO. Terinspirasi dari karakteristik fluorescent, gelang ini bisa 
        glow in the dark dan menambah keunikan serta kesan futuristik. </p>
        <Image
            src="/images/fluore-thumbnail-m.png"
            width={0}
            height={0}
            alt="SMAKBO SWAG Logo"
            className="w-full aspect-[4/2]"
            unoptimized
        />
        <p>Fluore juga hadir sebagai simbol kebanggaan bagi seluruh warga SMAKBO. Kenakan Fluore dan tunjukkan kebanggaanmu dengan gaya minimalis!</p>

        {
            checkoutShow?
            <div className="h-14">

            </div>: null
        }
    </div>
  );
}
