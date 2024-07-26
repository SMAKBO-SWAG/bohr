import { ReactNode } from "react";

const AmountButton = ({onClick, children} : {onClick : () => void, children : ReactNode}) => {

    return (
        <button 
            className="rounded-full bg-dark w-[35px] h-[35px] flex items-center justify-center text-white
                transition ease-in-out duration-150 transform 
                active:scale-95
                hover:bg-darker"
            onClick={onClick}>
                {children}
        </button>
    );
};

AmountButton.displayName = 'AmountButton';

export { AmountButton };