import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import Slider from '../../components/Slider/Slider';

const Search: React.FC<RouteComponentProps> = ({ history }) => {
    
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle><div className="md:flex md:justify-center">Buscar</div></IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="sticky top-0 z-10 bg-white pt-2">
                    <IonSearchbar value={"searchText"} placeholder="Buscar recetas"></IonSearchbar>
                </div>
                <div className="px-2">
                <Slider/>
                <Slider/>
                <Slider/>
                <Slider/>
                <Slider/>
                </div>
            </IonContent>
        </IonPage >
    );
};

export default Search;