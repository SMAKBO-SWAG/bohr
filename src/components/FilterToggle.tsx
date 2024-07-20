import { ChangeEvent, ReactNode } from "react";

interface FilterToggleProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: string;
    children: ReactNode;
}

const FilterToggle = ({ onChange, type, children }: FilterToggleProps) => {
    const defaultInputClass = `hidden peer`;
    const defaultLabelClass = `
        bg-light px-4 py-2 text-nowrap rounded-full cursor-pointer 
        transition ease-in-out duration-300 
        peer-checked:bg-dark peer-checked:text-white
        hover:bg-[#C3EAFF] 
    `;

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        onChange(event);
    };

    return (
        <div className="transition ease-in-out duration-300 transform active:scale-95">
            <input
                type="radio"
                name="product-filter"
                value={type}
                id={type}
                className={defaultInputClass}
                onChange={handleChange}
            />
            <label
                htmlFor={type}
                className={defaultLabelClass}
            >
                {children}
            </label>
        </div>
    );
};

FilterToggle.displayName = 'FilterToggle';

export { FilterToggle };
