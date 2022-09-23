import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonPage, IonRouterOutlet, IonTabBar, IonTabs, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import { Route } from 'react-router';

export const HomePage: React.FC = () => {
  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab Two</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container">
          <IonList>
            <IonItem href="/tab2/details">
              <IonLabel>
                <h2>Go to detail!!</h2>
              </IonLabel>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </React.Fragment>
  );
};

