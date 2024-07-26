'use client'
import { BackButton } from "@/components/BackButton";
import { ProductCard } from "@/components/ProductCard";
import Image from "next/image";

export default function FluoreProductModule() {

  return (
    <div className="relative flex flex-col items-center gap-6 text-black">          
        <div className="w-full flex justify-between items-center">
            <BackButton/>
            <p className="text-2xl font-bold tracking-wide">Fluore</p>
            <div className="w-[54px]"></div>
        </div>
        <ProductCard isNew={true} isPreOrder={true} accent="#ffffff" accentComplement="#132042" name="fluore" type="Bracelet" price="25.000"/>
        <p>Kenalin Fluore, gelang dengan desain minimalis tulisan SMAKBO. Terinspirasi dari karakteristik fluorescent, gelang ini bisa 
        glow in the dark dan menambah keunikan serta kesan futuristik. </p>
        <Image
            src="/png/fluore-thumbnail-m.png"
            width={0}
            height={0}
            alt="SMAKBO SWAG Logo"
            className="w-full aspect-[4/2]"
            unoptimized
        />
        <p>Fluore juga hadir sebagai simbol kebanggaan bagi seluruh warga SMAKBO. Kenakan Fluore dan tunjukkan kebanggaanmu dengan gaya minimalis!</p>

    </div>
  );
}
