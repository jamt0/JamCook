import React, { FunctionComponent } from 'react';

interface Props {
    handler?: (e: any) => void;
    label: string;
    type?: string;
}

const Button: FunctionComponent<Props> = ({ handler, label, type }) => {

    var className: string;

    className = "border border-red-500 py-4 bg-red-500 text-white text-xl rounded-md transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline w-full"

    switch (type) {
        case "Principal":
            className = "border border-red-500 py-4 bg-red-500 text-white text-xl rounded-md transition duration-500 ease select-none hover:bg-red-600 focus:outline-none focus:shadow-outline w-full"
            break;
        case "Secundario":
            className = "border border-purple-500 py-4 bg-purple-500 text-white text-xl rounded-md transition duration-500 ease select-none hover:bg-purple-600 focus:outline-none focus:shadow-outline w-full"
            break;
        case "Link":
            className = "text-purple-600 text-base select-none inline"
            break;
    }

    //Boton por defecto es el principal
    return (
        <button className={className}
            onClick={handler}>{label}
        </button>
    );

};

export default Button;