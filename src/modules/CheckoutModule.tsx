'use client'
import { BackButton } from "@/components/BackButton";
import { show } from "@/redux/slices/modalSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";


export default function CheckoutModule() {
    const dispatch = useDispatch()

  return (
    <div className="relative flex flex-col items-center gap-6 text-black">          
        <div className="w-full flex justify-between items-center">
            <BackButton/>
            <p className="text-2xl font-bold tracking-wide">Checkout</p>
            <div className="w-[54px]"></div>
        </div>
        <div className="flex w-full bg-[#F5F6FB] p-4 gap-4 rounded-xl">

            <Image
                src="/svg/info-icon.svg"
                width={31}
                height={31}
                alt="SMAKBO SWAG Logo"
            />

            <div className="flex flex-col gap-2 font-medium text-sm">
                <ul className="list-disc pl-2">
                    <li>Pre-order berlangsung dari tanggal ... dan dilanjut produksi. (estimasi 1 minggu) </li>
                    <li>Pengambilan barang dilakukan di SMK-SMAK Bogor. </li>
                </ul>
            </div>
            
        </div>

        <div className="flex flex-col gap-2 w-full">
            <p>Name</p>
            <input className="flex w-full bg-[#F5F6FB] p-4 gap-4 rounded-xl" placeholder="Budi"></input>
        </div>

        <div className="flex flex-col gap-2 w-full">
            <p>Number/Whatsapp</p>
            <input className="flex w-full bg-[#F5F6FB] p-4 gap-4 rounded-xl" placeholder="0812345678"></input>
        </div>

        <div className="flex flex-col gap-2 w-full">
            <p>Payment Method</p>
            <div className="flex gap-2">
                <input type="radio" id="cod" name="paymentMethod"></input>
                <label htmlFor="cod"> Cash on Delivery (SMAKBO)</label>
            </div>
            <div className="flex gap-2">
                <input type="radio" id="qris" name="paymentMethod"></input>
                <label htmlFor="qris"> QRIS Payment</label>
            </div>
        </div>

        <div className="flex flex-col gap-2 w-full">
            <p>Order Items</p>
            <div className="flex flex-col gap-4">
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
                        <div className="flex flex-col items-end justify-center">
                            <p>x2</p>
                        </div>
                    </div>
                </div>


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
                        <div className="flex flex-col items-end justify-center">
                            <p>x2</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </div>
        <button onClick={() => dispatch(show())} >Modal</button>

    </div>
  );
}
