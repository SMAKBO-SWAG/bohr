import "./globals.css";
import { ReduxProviders } from "@/redux/provider";
import { Metadata } from "next";

import BottomBar from "@/components/BottomBar";
import Drawer from "@/components/Drawer";
import BaseModal from "@/components/modals/BaseModal";
import ClosedModule from "@/modules/ClosedModule";
import { closeOrderDate, openOrderDate } from "@/data/dates";

export const metadata: Metadata = {
	title: "SMAKBO SWAG",
	icons: {
		icon: "/icon.ico",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	const now = new Date();

	const jakartaTime = new Date(
		now.toLocaleString("en-US", { timeZone: "Asia/Jakarta" })
	);

	return (
		<html lang="en">
			<body className="w-screen min-h-screen flex justify-center font-gotham bg-[url('/images/bg-body.png')]">
				<ReduxProviders>
					{ (jakartaTime < openOrderDate) || (jakartaTime >= closeOrderDate) ? (
						<ClosedModule />
					) : (
						<div className="w-[480px] p-5 bg-white overflow-auto no-scrollbar">
							{children}
						</div>
					)}
					<BottomBar />
					<Drawer />
					<BaseModal />
				</ReduxProviders>
			</body>
		</html>
	);
}
