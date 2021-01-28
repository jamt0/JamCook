import React, { FunctionComponent } from 'react';

interface Props {
    direccion: string;
    className?: string;
    eje?: string;
}

const Center: FunctionComponent<Props> = ({ children, direccion, className, eje }) => {

    const centradoEje = eje == null ? " items-center | justify-self-center justify-center " : eje == "x" ? " items-center " : " justify-self-center justify-center "

    return (
        <div className={"flex flex-" + direccion + centradoEje + className}>
            {children}
        </div>
    );

};

export default Center;