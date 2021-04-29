import React, { FunctionComponent } from 'react';
import Container from 'components/Container/Container';
import { IonSearchbar } from '@ionic/react';

type Props = {
    placeHolder: string;
}

const Searcher: FunctionComponent<Props> = ({ placeHolder }) => {

    return (
        <Container sticky className="ion-no-padding">
            <IonSearchbar value={""} placeholder={placeHolder} color="light"></IonSearchbar>
        </Container>
    );

};

export default Searcher;