import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { TopPageLayout } from '../../components/layout/toppage/TopPageLayout';
//import ExploreContainer from '../components/ExploreContainer';
// import './Home.css';

const Top: React.FC = () => {
  return (
    <TopPageLayout>
        <IonButton routerLink='/app/mypage'>はじめる</IonButton>
    </TopPageLayout>
  );
};

export default Top;
