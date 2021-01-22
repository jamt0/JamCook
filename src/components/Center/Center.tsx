import React, { FunctionComponent } from 'react';

interface Props {
    direccion: string;
    className?: string;
}

const Center: FunctionComponent<Props> = ({ children, direccion, className }) => {

    return (
        <div className={"flex flex-" + direccion + " items-center | justify-self-center justify-center | " + className}>
            {children}
        </div>
    );

};

export default Center;