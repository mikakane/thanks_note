import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

type Props = {
    children: React.ReactNode
}

export const TopPageLayout: React.FC<Props> = ({children}) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Thanks Note</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
            {children}
        </div>
      </IonContent>
    </IonPage>
  );
};
