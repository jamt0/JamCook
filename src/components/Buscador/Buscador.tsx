import { IonSearchbar } from '@ionic/react';
import React, { FunctionComponent } from 'react';

interface Props {
    placeHolder: string;
}

const Buscador: FunctionComponent<Props> = ({ placeHolder }) => {

    return (
        <div className="sticky top-0 z-40 bg-white py-2">
          <IonSearchbar value={""} placeholder={placeHolder}></IonSearchbar>
        </div>
    );

};

export default Buscador;