import { IonContent, IonHeader, IonPage, IonSearchbar, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

const Search: React.FC<RouteComponentProps> = ({history}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonTitle><div className="md:flex md:justify-center">Buscar</div></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonSearchbar className="sticky top-0" value={"searchText"} placeholder="Buscar recetas"></IonSearchbar>
      </IonContent>
    </IonPage>
  );
};

export default Search;