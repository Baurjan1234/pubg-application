import React from "react";

import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonLabel,
  IonAvatar,
  IonIcon,
  IonNavLink,
  IonImg,
} from "@ionic/react";


import { star } from "ionicons/icons";
import InfinityScrollerCom from "../components/InfinityScrollCom";
import SwiperCard from "../components/swiperCard";
import PageNews from "./News";
import { connect } from "react-redux";
import { State } from "../ReduxUtil";
import barImg from '../images/pubgAppbar.png';
import './Tab3.css'

const Home: React.FC<any> = (props) => {

  return (
    <IonPage>
      <IonContent>
        <IonHeader >

          {/* <div className="containerR">
            <IonImg src={barImg} style={{
              height: '50px',
              objectFit: 'cover',
            }} />
            <div className="bottom-left">Bottom Left</div>
          </div> */}

          <IonToolbar className="containerR">
            <IonImg src={barImg} style={{
              objectFit: 'cover',
            }} />
            <IonTitle className="center"> Pubg appBar </IonTitle>
          </IonToolbar>
        </IonHeader>

        {props.login ? <IonItem lines="none">

          <IonAvatar slot="start">
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>
          <IonLabel>
            <h2>{'Name '}</h2>
            <p>{'SubName '}</p>
          </IonLabel>
          <IonNavLink routerDirection="forward" component={() => <PageNews />}>
            <IonButton slot="end">
              <IonIcon icon={star}></IonIcon>
            </IonButton>
          </IonNavLink>
        </IonItem> :
          <IonItem lines="none">
            <h1>Та нэвтрээгүй байна</h1>
            <IonButton slot="start" href='/login' > Нэвтрэх</IonButton>
          </IonItem>
        }
        <SwiperCard />
        <InfinityScrollerCom />
      </IonContent>
    </IonPage >
  );
};


// function mapDispatchToProps(dispatch: Dispatch) {
//   return {
//     changeLogin: (res: boolean) => dispatch({
//       type: LoginType.LOGIN,
//       login: res
//     }),
//   }
// }

function mapStateToProps(state: State) {
  return {
    login: state.login
  }
}
export default connect(mapStateToProps)(Home);
