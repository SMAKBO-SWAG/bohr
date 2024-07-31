"use client";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/redux/store";
import { closeModal } from "@/redux/slices/modalSlice";

export default function BaseModal() {
	const dispatch = useDispatch();

	const { showModal, modalContent } = useSelector((state: RootState) => ({
		showModal: state.modal.showModal,
		modalContent: state.modal.modalContent,
	}));

	if (!showModal) return null;

	return (
		<>
			<div
				className={`fixed w-screen sm:w-[480px] h-full z-50 overflow-auto flex justify-center items-center text-black`}
			>
				<div
					className={`w-full h-full bg-black bg-opacity-30 backdrop-blur-sm absolute`}
					onClick={() => dispatch(closeModal())}
				></div>

				{modalContent}
			</div>
		</>
	);
}
