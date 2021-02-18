import React, { FunctionComponent } from 'react';

interface Props {
}

const ContainerSection: FunctionComponent<Props> = ({ children }) => {

    return (
        <div className="px-3 mb-8 mt-2">
            {children}
        </div>
    );

};

export default ContainerSection;