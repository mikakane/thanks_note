import { IonButton, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonTitle, IonToolbar } from '@ionic/react'
import { pin } from 'ionicons/icons'
import React, { useState } from 'react'


export const CalendarPage: React.FC = () => {
  const [,] = useState<string>()
  const [,] = useState<number>()

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
  )
}
