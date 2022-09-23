import { IonButton, IonContent, IonHeader, IonInput, IonItem, IonItemDivider, IonLabel, IonList, IonPage, IonRouterOutlet, IonTabBar, IonTabs, IonTextarea, IonTitle, IonToolbar, useIonToast } from '@ionic/react';
import React, { useState } from 'react';
import { Route } from 'react-router';
import { RouteComponentProps } from 'react-router-dom'

interface Props extends RouteComponentProps{
}


export const SendPage: React.FC<Props> = ({history}) => {

  const [text, setText] = useState<string>();
  const [number, setNumber] = useState<number>();

  const [present, dismiss] = useIonToast();

  const onSubmit = () => {
    console.log("hoge")
    present('hello, message sent',1000)
    history.push("/app/mypage")
  }

  return (
    <React.Fragment>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Send Thanks</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container">
          <IonList>
            <IonItemDivider>Default Input with Placeholder</IonItemDivider>
            <IonItem>
              <IonTextarea value={text} rows={5} placeholder="Enter Input" onIonChange={e => setText(e.detail.value!)}></IonTextarea>
            </IonItem>
          </IonList>
          <IonButton color="primary" onClick={onSubmit}>Send</IonButton>
        </div>
      </IonContent>
    </React.Fragment>
  );
};

