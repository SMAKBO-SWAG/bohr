'use client'
import Image from "next/image"
import { useEffect, useState } from "react";

export default function Home() {

  const [filter, setFilter] = useState<string>("");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
  };

  useEffect(() => {
    console.log(filter)
  },[filter])

  return (
    <div className="gap-8 text-black flex flex-col">
      <Image
        src="/logo.svg"
        width={225}
        height={45}
        alt="SMAKBO SWAG Logo"
      />

      <div className="flex flex-col gap-4">

        <div className="flex items-center gap-2 overflow-x-auto py-2">
          <div className="relative">
            <input type="radio" name="product-filter" value="all" id="all" className="hidden peer" onChange={handleRadioChange} />
            <label htmlFor="all" className=" text-nowrap bg-light px-4 py-2 rounded-full cursor-pointer peer-checked:bg-dark peer-checked:text-white">All</label>
          </div>

          <div className="relative">
            <input type="radio" name="product-filter" value="bracelet" id="bracelet" className="hidden peer" onChange={handleRadioChange} />
            <label htmlFor="bracelet" className="h-fit w-fit text-nowrap bg-light px-4 py-2 rounded-full cursor-pointer peer-checked:bg-dark peer-checked:text-white">Bracelet</label>
          </div>

          <div className="relative">
            <input type="radio" name="product-filter" value="t-shirt" id="t-shirt" className="hidden peer" onChange={handleRadioChange} />
            <label htmlFor="t-shirt" className="h-fit w-fit text-nowrap bg-light px-4 py-2 rounded-full cursor-pointer peer-checked:bg-dark peer-checked:text-white">T-shirt</label>
          </div>

          <div className="relative">
            <input type="radio" name="product-filter" value="hoodie" id="hoodie" className="hidden peer" onChange={handleRadioChange} />
            <label htmlFor="hoodie" className="h-fit w-fit text-nowrap bg-light px-4 py-2 rounded-full cursor-pointer peer-checked:bg-dark peer-checked:text-white">Hoodie</label>
          </div>

          <p className="text-nowrap">and more to come...</p>
        </div>

        <div className="flex flex-col items-center gap-5">

          <div className="relative text-white flex flex-col w-[353px] h-[400px]">
            <div className="z-10 flex flex-col justify-between p-5 h-full">
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-2">
                  <p>Pre-Order</p>
                  <p>Bracelet</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>FLUORE</p>
                  <p>Rp25.000</p>
                </div>
              </div>
              <div className="flex w-full justify-end">
                aye
              </div>
            </div>
            <Image
              src="/fluore-thumbnail.png"
              width={353}
              height={400}
              alt="Fluore Thumbnail"
              className="rounded-3xl absolute"
              unoptimized
            />
          </div>

          <div className="relative text-[#132042] flex flex-col w-[353px] h-[400px]">
            <div className="z-10 flex flex-col justify-between p-5 h-full">
              <div className="flex flex-col gap-3">
                <div className="flex flex-row gap-2">
                  <p>Pre-Order</p>
                  <p>Bracelet</p>
                </div>
                <div className="flex flex-col gap-2">
                  <p>CLASSIC</p>
                  <p>Rp25.000</p>
                </div>
              </div>
              <div className="flex w-full justify-end">
                aye
              </div>
            </div>
            <Image
              src="/classic-thumbnail.png"
              width={353}
              height={400}
              alt="Classic Thumbnail"
              className="rounded-3xl absolute"
              unoptimized
            />
          </div>

        </div>
      </div>
    </div>
  );
}
