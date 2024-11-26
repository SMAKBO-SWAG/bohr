import CheckoutModule from "@/modules/CheckoutModule";
import Script from "next/script";

export default function Checkout() {
	const isProduction = process.env.NODE_ENV === "production";

	const clientKey = isProduction
		? process.env.MIDTRANS_CLIENT_KEY
		: process.env.MIDTRANS_CLIENT_KEY_DEV;

	const scriptSource = isProduction
		? process.env.MIDTRANS_SNAP_SCRIPT
		: process.env.MIDTRANS_SNAP_SCRIPT_DEV;

	return (
		<>
			<Script
				src={scriptSource}
				type="text/javascript"
				data-client-key={clientKey}
			/>

			<CheckoutModule />
		</>
	);
}
