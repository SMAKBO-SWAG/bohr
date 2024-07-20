'use client'
import { FilterToggle } from "@/components/FilterToggle"
import { ProductCard } from "@/components/ProductCard";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function HomeModule() {

  const [filter, setFilter] = useState<string>("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  return (
    <div className="gap-8 text-black flex flex-col">
      <Image
        src="/logo.svg"
        width={225}
        height={45}
        alt="SMAKBO SWAG Logo"
      />

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 overflow-x-auto py-2 px-5 mx-[-20px]">
          <FilterToggle onChange={handleRadioChange} type="All" >All</FilterToggle>
          <FilterToggle onChange={handleRadioChange} type="Bracelet" >Bracelet</FilterToggle>
          <FilterToggle onChange={handleRadioChange} type="T-shirt" >T-shirt</FilterToggle>
          <FilterToggle onChange={handleRadioChange} type="Hoodie" >Hoodie</FilterToggle>
          <p className="text-nowrap">and more to come...</p>
        </div>

        <div className="flex flex-col items-center gap-5">
          <ProductCard isNew={true} isPreOrder={true} name="fluore" type="Bracelet" price="25.000"></ProductCard>
          <ProductCard isNew={false} isPreOrder={true} name="classic" type="Bracelet" price="25.000"></ProductCard>
        </div>
      </div>
    </div>
  );
}
