import { ReactNode } from "react";

const AmountButton = ({children} : {children : ReactNode}) => {

    return (
        <button 
            className="rounded-full bg-dark w-[35px] h-[35px] flex items-center justify-center text-white
                transition ease-in-out duration-150 transform 
                active:scale-95
                hover:bg-darker">
                {children}
        </button>
    );
};

AmountButton.displayName = 'AmountButton';

export { AmountButton };