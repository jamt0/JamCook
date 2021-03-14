import { IonSearchbar } from '@ionic/react';
import React, { FunctionComponent } from 'react';

interface Props {
    placeHolder: string;
}

const Searcher: FunctionComponent<Props> = ({ placeHolder }) => {

    return (
        <div className="sticky top-0 z-40 bg-white">
          <IonSearchbar value={""} placeholder={placeHolder}></IonSearchbar>
        </div>
    );

};

export default Searcher;