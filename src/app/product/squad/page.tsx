import CloseOrderModule from "@/modules/CloseOrderModule";
import SquadProductModule from "@/modules/products/SquadProductModule";

export default function SquadProduct() {
    const now = new Date();
	const jakartaTime = new Date(
		now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
	);
	const closeOrder = new Date("2024-08-29T23:59:00+07:00");

    if (jakartaTime >= closeOrder) {
        return <CloseOrderModule/>
    }
    
	return <SquadProductModule />;
}
