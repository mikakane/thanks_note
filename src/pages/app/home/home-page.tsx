import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/react'
import React from 'react'

export const HomePage: React.FC = () => {
  console.log("hoge")
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
  )
}
