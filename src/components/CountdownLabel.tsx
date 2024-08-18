import Countdown from "react-countdown";

const CountdownLabel = () => {
	const targetDate = new Date("2024-08-30T00:00:00+07:00");

	const now = new Date();
	const jakartaTime = new Date(
		now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
	);
	const timerAvailableDate = new Date("2024-08-28T00:00:00+07:00");

	if (jakartaTime >= timerAvailableDate) {
	
	return (
		<div className="w-full bg-dark text-white flex justify-between px-4 py-3 rounded-xl items-center">
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

return null
};

CountdownLabel.displayName = "CountdownLabel";

export { CountdownLabel };
