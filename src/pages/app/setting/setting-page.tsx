import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'
import type { RouteComponentProps } from 'react-router-dom'

type Props = RouteComponentProps

export const SettingPage: React.FC<Props> = () => {
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
  )
}
