import { IonButton, IonCard, IonCardContent, IonContent, IonDatetime, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonRouterOutlet, IonTabBar, IonTabs, IonTextarea, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { pin } from 'ionicons/icons';
import React, { useState } from 'react';
import { Route } from 'react-router';
import { RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps {
}


export const SettingPage: React.FC<Props> = ({ history }) => {


  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calendar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container">
          <IonList>
            <IonItem>
              <IonLabel>Pokémon Yellow</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Mega Man X</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>The Legend of Zelda</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Pac-Man</IonLabel>
            </IonItem>
            <IonItem>
              <IonLabel>Super Mario World</IonLabel>
            </IonItem>
          </IonList>

        </div>
      </IonContent>
    </React.Fragment>
  );
};

