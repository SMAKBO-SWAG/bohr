import "./globals.css";
import { ReduxProviders } from "@/redux/provider";
import { Metadata } from "next";

import CheckoutFloatingButton from "@/components/CheckoutFloatingButton";
import Drawer from "@/components/Drawer";
import Modal from "@/components/Modal";

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
	return (
			<html lang="en">
				<body className="w-screen min-h-screen flex justify-center font-gotham">
                    <ReduxProviders>
                        <div className="w-[480px] p-5 bg-white overflow-auto no-scrollbar">
                            {children}
                        </div>
                        <CheckoutFloatingButton />
                        <Drawer />
                        <Modal />
                    </ReduxProviders>
				</body>
			</html>
	);
}
