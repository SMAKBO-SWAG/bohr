"use client";

export default function CloseOrderModule() {
	return (
		<div className="relative gap-5 flex items-center justify-center h-full text-black">
			<div className="z-10 gap-4 p-10 flex flex-col items-center justify-center rounded-3xl">
				<div className="flex flex-col gap-6 items-center">
					<div className="flex flex-col text-center gap-2">
						<p className="text-3xl font-bold text-dark">Pre-order is Closed!</p>
						<p className="text-s font-medium">
							Thank you for your enthusiasm! <br/> See you in the next pre-order!{" "}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}
