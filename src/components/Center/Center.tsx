import { FunctionComponent } from 'react';

interface Props {
    justify?: "start" | "center" | "end" | undefined;
    content?: "start" | "center" | "end" | undefined;
    direction?: "row" | "col" | undefined;
    className?: string;
}

const Center: FunctionComponent<Props> = ({ children, direction="row", className="", justify="center", content="center" }) => {

    return (
        <div className={`flex flex-${direction} justify-${justify} content-${content} items-${content} ${className}`}>
            {children}
        </div>
    );

};

export default Center;