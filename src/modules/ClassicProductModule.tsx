'use client'
import { BackButton } from "@/components/BackButton";
import { ProductCard } from "@/components/ProductCard";
import Image from "next/image";

export default function CartModule() {

  return (
    <div className="relative flex flex-col items-center gap-6 text-black">          
        <div className="w-full flex justify-between items-center">
            <BackButton/>
            <p>Classic</p>
            <div className="w-[54px]"></div>
        </div>
        <ProductCard isNew={false} isPreOrder={true} name="classic" type="Bracelet" price="25.000"/>
        <p>#BanggaBersama dengan Classic Bracelet! Didesain dengan siluet elegan logo SMAKBO, gelang ini memadukan gaya modern yang cocok banget buat semua kalangan. </p>
        <Image
            src="/png/classic-thumbnail-m.png"
            width={0}
            height={0}
            alt="SMAKBO SWAG Logo"
            className="w-full aspect-[4/2]"
            unoptimized
        />
        <p>Mau dipakai sebagai aksesori sehari-hari atau hadiah, Classic Bracelet tetap akan menjadi simbol kebanggaan bagi setiap warga SMAKBO!</p>

    </div>
  );
}
