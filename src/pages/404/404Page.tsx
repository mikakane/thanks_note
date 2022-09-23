import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'

// import ExploreContainer from '../components/ExploreContainer';
// import './Home.css';

export const NotFoundPage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Thanks Note</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="container">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum magnam soluta nisi? Blanditiis at excepturi eius iure velit autem inventore fuga debitis enim. Illum dolor eos, at atque sit culpa?
        </div>
      </IonContent>
    </IonPage>
  )
}
