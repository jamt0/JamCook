import { IonItemDivider, IonSearchbar, IonToolbar } from '@ionic/react';
import Item from 'components/Item/Item';
import { FunctionComponent } from 'react';

interface Props {
    placeHolder: string;
}

const Searcher: FunctionComponent<Props> = ({ placeHolder }) => {

    return (
        <IonItemDivider sticky className="ion-no-padding" mode="md">
            <IonSearchbar value={""} placeholder={placeHolder} color="light"></IonSearchbar>
        </IonItemDivider>
    );

};

export default Searcher;