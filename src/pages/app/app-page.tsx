import { IonIcon, IonLabel, IonPage, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react'
import { apps, flash, send } from 'ionicons/icons'
import { Route } from 'react-router'

import { CalendarPage } from './calendar/calendar-page'
import { HomePage } from './home/home-page'
// import ExploreContainer from '../components/ExploreContainer';
// import './Home.css';
import { SendPage } from './send/send-page'
import { SettingPage } from './setting/setting-page'

export const AppPage: React.FC = () => {
  return (
    <IonPage>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/app/mypage" component={HomePage} exact={true} />
          <Route path="/app/send" component={SendPage} exact={true} />
          <Route path="/app/calendar" component={CalendarPage} exact={true} />
          <Route path="/app/setting" component={SettingPage} exact={true} />
        </IonRouterOutlet>

        <IonTabBar slot="bottom">
          <IonTabButton tab="tabdedd1" href="/app/mypage">
            <IonIcon icon={flash} />
            <IonLabel>home</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab1" href="/app/send">
            <IonIcon icon={flash} />
            <IonLabel>send</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/app/calendar">
            <IonIcon icon={apps} />
            <IonLabel>calendar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/app/setting">
            <IonIcon icon={send} />
            <IonLabel>setting</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonPage>
  )
}
