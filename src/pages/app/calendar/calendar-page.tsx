import { IonButton, IonCard, IonCardContent, IonContent, IonDatetime, IonHeader, IonIcon, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonRouterOutlet, IonTabBar, IonTabs, IonTextarea, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import { pin } from 'ionicons/icons';
import React, { useState } from 'react';
import { Route } from 'react-router';
import { RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps {
}


export const CalendarPage: React.FC<Props> = ({ history }) => {

  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  const [present, dismiss] = useIonToast();

  const onSubmit = () => {
    console.log("hoge")
    present('hello, message sent', 1000)
    history.push("/app/mypage")
  }

  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Calendar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container">
          <IonCard>
            <IonItem>
              <IonIcon icon={pin} slot="start" />
              <IonLabel>ion-item in a card, icon left, button right</IonLabel>
              <IonButton fill="outline" slot="end">View</IonButton>
            </IonItem>

            <IonCardContent>
              This is content, without any paragraph or header tags,
              within an ion-cardContent element.
            </IonCardContent>
          </IonCard>

        </div>
      </IonContent>
    </React.Fragment>
  );
};

