import Countdown from "react-countdown";

const CountdownLabel = () => {
	const targetDate = new Date("2024-08-30T00:00:00+07:00");

	const now = new Date();
	const jakartaTime = new Date(
		now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
	);
	const timerAvailableDate = new Date("2024-08-27T00:00:00+07:00");

	const dateDifference =
		(targetDate.getTime() - jakartaTime.getTime()) / (1000 * 60 * 60);

	if (jakartaTime >= timerAvailableDate) {
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
						date={targetDate}
						daysInHours={true}
					/>{" "}
					Hour(s)
				</span>
			</div>
		);
	}

	return null;
};

CountdownLabel.displayName = "CountdownLabel";

export { CountdownLabel };
