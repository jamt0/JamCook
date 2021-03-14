import React, { FunctionComponent } from 'react';

interface Props {
    handler?: (e: any) => void;
    label: string;
    type?: string;
    form?: Boolean;
    disable?: boolean;
}

const Button: FunctionComponent<Props> = ({ handler, label, type, form, disable = false }) => {

    var className: string;

    className = "border border-red-500 py-4 bg-red-500 text-white text-xl rounded-md transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline w-full disabled:opacity-50"

    switch (type) {
        case "Principal":
            className = "border border-red-500 py-4 bg-red-500 text-white text-xl rounded-md transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline w-full disabled:opacity-50"
            break;
        case "Secundario":
            className = "border border-purple-500 py-4 bg-purple-500 text-white text-xl rounded-md transition duration-500 ease select-none hover:bg-purple-600 focus:outline-none focus:shadow-outline w-full disabled:opacity-50"
            break;
        case "Link":
            className = "text-purple-600 text-base select-none inline"
            break;
    }

    //Boton por defecto es el principal
    return (
        <button 
            className={className}
            onClick={handler}
            type={form? "submit": "button"}
            disabled={disable}
        >
            {label}
        </button>
    );

};

export default Button;