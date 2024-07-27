"use client";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { close } from "@/redux/slices/modalSlice";
import { RootState } from "@/redux/store";
import Image from "next/image";
import { PrimaryButton } from "./PrimaryButton";
import { SecondaryButton } from "./SecondaryButton";
import { remove } from "@/redux/slices/cartSlice";

const actionHandlers = {
    removeItem: (dispatch: any, params: any) => {
        dispatch(remove(params));
    },
};

export default function Modal() {
	const { show, content } = useSelector((state: RootState) => ({
		show: state.modal.show,
		content: state.modal.content,
	}));
	const dispatch = useDispatch();

	const [visible, setVisible] = useState(show);

	useEffect(() => {
		if (show) {
			setVisible(true);
		} else {
			setVisible(false);
		}
	}, [show]);

    const handleProceed = () => {
        (actionHandlers as any)[content.action](dispatch, content.params)
        dispatch(close())
    }

	if (!visible) return null;

	return (
		<>
			<div
				className={`fixed w-screen sm:w-[480px] h-full z-50 overflow-auto flex justify-center items-center text-black`}
			>
				<div
					className={`w-full h-full bg-black bg-opacity-30 backdrop-blur-sm absolute`}
					onClick={() => dispatch(close())}
				></div>

				<div className="z-10 w-screen sm:w-[480px] mx-5 bg-white gap-4 p-10 flex flex-col items-center justify-center rounded-3xl">
					<Image
						src={`/svg/illustrations/deletion-confirm-illustration.svg`}
						alt={`deletion-confirm-illustration`}
						width={250}
						height={0}
						unoptimized
					/>
					<div className="flex flex-col gap-6 items-center">
						<div className="flex flex-col text-center gap-2">
							<p className="text-2xl font-bold">
								{content.title}
							</p>
							<p className="text-s font-medium">{content.body}</p>
						</div>

						<div className="flex w-full justify-center gap-4">
							<PrimaryButton onClick={() => dispatch(close())}>
								Cancel
							</PrimaryButton>
							<SecondaryButton onClick={() => handleProceed()}>
								Remove
							</SecondaryButton>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
