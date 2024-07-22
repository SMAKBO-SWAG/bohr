import { ChangeEvent, ReactNode } from "react";
import Image from "next/image";

interface BraceletFilterButtonProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    type: string;
}

const BraceletFilterButton = ({ onChange, type }: BraceletFilterButtonProps) => {
    const defaultInputClass = `hidden peer`;

    return (
        <div className="w-full transition ease-in-out duration-150 transform active:scale-95 cursor-pointer">
            <input
                type="radio"
                name="bracelet-size"
                value={type}
                id={type}
                className={defaultInputClass}
                onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event)}
            />
            <label htmlFor={type} className="w-full rounded-xl border border-transparent peer-checked:border-darker peer-checked:border-2 inline-block">
                <Image
                    src={`/svg/size-bracelet-${type}.svg`}
                    alt={`size-bracelet-${type}`}
                    width={0}
                    height={0}
                    className="w-full aspect-[1/1] rounded-xl"
                    unoptimized
                />
            </label>
        </div>
    );
};

BraceletFilterButton.displayName = 'BraceletFilterButton';

export { BraceletFilterButton };