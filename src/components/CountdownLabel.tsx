import { closeOrderDate } from "@/data/dates";
import Countdown from "react-countdown";

const CountdownLabel = () => {
	const now = new Date();
	const jakartaTime = new Date(
		now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
	);

	const dateDifference =
		(closeOrderDate.getTime() - jakartaTime.getTime()) / (1000 * 60 * 60);

	if (dateDifference > 72) {
		return null;
	}

	return (
		<div
			className={`w-full ${
				dateDifference <= 24 ? "bg-[#ed4337]" : "bg-dark"
			} text-white flex justify-between px-4 py-3 rounded-xl items-center`}
		>
			<span>Pre-order closed in...</span>
			<span>
				<Countdown
					className="text-2xl"
					date={closeOrderDate}
					daysInHours={true}
				/> Hour(s)
			</span>
		</div>
	);
};

CountdownLabel.displayName = "CountdownLabel";

export { CountdownLabel };
