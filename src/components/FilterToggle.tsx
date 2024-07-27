import { ChangeEvent, ReactNode } from "react";
import { setFilter } from "@/redux/slices/filterSlice";
import { useDispatch } from "react-redux";

interface FilterToggleProps {
	type: string;
	checked: boolean;
}

const FilterToggle = ({ type, checked }: FilterToggleProps) => {
	const dispatch = useDispatch();
	const defaultInputClass = `hidden peer`;
	const defaultLabelClass = `
        font-medium
        bg-light px-4 py-2 text-nowrap rounded-full cursor-pointer 
        transition ease-in-out duration-150 
        peer-checked:bg-dark peer-checked:text-white
        hover:bg-[#C3EAFF] 
    `;

	const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(setFilter(event.target.value));
	};

	return (
		<div className="text-dark transition ease-in-out duration-150 transform active:scale-95">
			<input
				type="radio"
				name="product-filter"
				value={type}
				id={type}
				className={defaultInputClass}
				onChange={(event: ChangeEvent<HTMLInputElement>) =>
					handleFilterChange(event)
				}
				checked={checked}
			/>
			<label htmlFor={type} className={defaultLabelClass}>
				{type}
			</label>
		</div>
	);
};

FilterToggle.displayName = "FilterToggle";

export { FilterToggle };
