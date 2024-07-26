'use client'
import { BackButton } from "@/components/BackButton";
import { ProductCard } from "@/components/ProductCard";
import { show } from "@/redux/slices/modalSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";


export default function CheckoutModule() {
    const dispatch = useDispatch()
    const checkoutShow = useSelector((state: RootState) => state.checkout.show);

    const cart = useSelector((state: RootState) => state.cart.cart);

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
            <div className="flex flex-col w-full gap-4">

                {cart.map((product: { name: string, size: string, amount: number }, index: number, key: any, ) => {
                    return <ProductCard name={product.name} index={index} key={key} editable={false}></ProductCard>
                })}

                {
                    checkoutShow?
                    <div className="h-14">

                    </div>: null
                }
                
            </div>
            
        </div>

    </div>
  );
}
