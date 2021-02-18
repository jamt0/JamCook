import React, { FunctionComponent } from 'react';

interface Props {
}

const TitleRecipe: FunctionComponent<Props> = ({ children }) => {

    return (
        <h2 className="text-lg font-bold text-center mb-3">
            {children}
        </h2>
    );

};

export default TitleRecipe;