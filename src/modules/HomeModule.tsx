'use client'
import Image from "next/image";
import { FilterToggle } from "@/components/FilterToggle";
import { ProductCard } from "@/components/ProductCard";
import { useEffect, useRef, useState } from "react";
import lottie from 'lottie-web';

export default function HomeModule() {
  const [filter, setFilter] = useState<string>("");
  const animationContainer = useRef<HTMLDivElement>(null);
  const animationInstance = useRef<any>(null);

  const handleFilter = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    console.log(filter);
  }, [filter]);


  useEffect(() => {

    if (animationInstance.current === null){
        animationInstance.current = lottie.loadAnimation({
            container: animationContainer.current!,
            renderer: 'svg',
            loop: true,
            autoplay: true,
            path: '/lottie/cash-on-delivery.json'
        });

        animationInstance.current.addEventListener('DOMLoaded', () => {
            const svgElement = animationContainer.current!.querySelector('svg');
            const watermark = svgElement!.querySelector('path[d^=" M351.34320068359375"]');
            if (watermark) {
            watermark.remove();
            }
        });
    }

  }, []);

  return (
    <div className="relative gap-5 flex flex-col text-black">          
        <Image
            src="/svg/logo.svg"
            width={225}
            height={45}
            alt="SMAKBO SWAG Logo"
        />

        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 overflow-x-auto py-2 px-5 mx-[-20px] no-scrollbar">
            <FilterToggle onChange={handleFilter} type="All">All</FilterToggle>
            <FilterToggle onChange={handleFilter} type="Bracelet">Bracelet</FilterToggle>
            <FilterToggle onChange={handleFilter} type="Sticker">Sticker</FilterToggle>
            <FilterToggle onChange={handleFilter} type="T-shirt">T-shirt</FilterToggle>
            <FilterToggle onChange={handleFilter} type="Hoodie">Hoodie</FilterToggle>
            <p className="text-nowrap text-dark">and more to come...</p>
            </div>

            <div className="flex flex-col items-center gap-5">
            <ProductCard isNew={true} isPreOrder={true} name="fluore" type="Bracelet" price="25.000"/>
            <ProductCard isNew={false} isPreOrder={true} name="classic" type="Bracelet" price="25.000"/>
            </div>
        </div>
        <div ref={animationContainer} ></div>

    </div>
  );
}
