import CheckoutModule from "@/modules/CheckoutModule";
import Script from "next/script";
import CloseOrderModule from "@/modules/CloseOrderModule";

export default function Checkout() {
	const isProduction = process.env.NODE_ENV === "production";

	const clientKey = isProduction
		? process.env.MIDTRANS_CLIENT_KEY
		: process.env.MIDTRANS_CLIENT_KEY_DEV;

	const scriptSource = isProduction
		? process.env.MIDTRANS_SNAP_SCRIPT
		: process.env.MIDTRANS_SNAP_SCRIPT_DEV;

	const now = new Date();
	const jakartaTime = new Date(
		now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
	);
	const closeOrder = new Date("2024-08-29T23:59:00+07:00");

	if (jakartaTime >= closeOrder) {
		return <CloseOrderModule />;
	}

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
