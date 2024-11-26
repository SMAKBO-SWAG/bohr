"use client";

import MerchSuggestModal from "@/components/modals/MerchSuggestModal";
import { showModal } from "@/redux/slices/modalSlice";
import { useDispatch } from "react-redux";

export default function CloseOrderModule() {
    const dispatch = useDispatch()
    
	return (
		<div className="relative gap-5 flex items-center justify-center text-black">
			<div className="z-10 gap-4 p-10 flex flex-col items-center justify-center rounded-3xl">
				<div className="flex flex-col gap-6 items-center">
					<div className="flex flex-col text-center gap-2">
						<p className="text-3xl font-bold text-dark">Pre-order is Closed!</p>
						<p className="text-s font-medium">
							Thank you for your enthusiasm! <br/> See you in the next pre-order!{" "} <br/>  <br/> What would you like to see in our next pre-order?
						</p>
                        <div onClick={() => dispatch(showModal(<MerchSuggestModal/>))} className="font-medium text-dark transition ease-in-out duration-150 transform active:scale-95 border-dark border-2 px-4 py-0.5 text-nowrap rounded-full cursor-pointer">
						Choose your next merch!
					    </div>
					</div>
				</div>
			</div>
		</div>
	);
}
