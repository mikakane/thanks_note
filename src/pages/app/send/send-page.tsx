import { IonButton, IonContent, IonHeader, IonItem, IonItemDivider, IonList, IonTextarea, IonTitle, IonToolbar, useIonToast } from '@ionic/react'
import React, { useState } from 'react'
import type { RouteComponentProps } from 'react-router-dom'

type Props = RouteComponentProps

export const SendPage: React.FC<Props> = ({ history }) => {
  const [text, setText] = useState<string>()
  const [,] = useState<number>()

  const [present] = useIonToast()

  const onSubmit = () => {
    console.log('hoge')
    present('hello, message sent', 1000)
    history.push('/app/mypage')
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
  )
}
