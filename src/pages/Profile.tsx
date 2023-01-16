import {
  IonButton,
  IonContent,
  IonHeader,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronForwardOutline, layersOutline, listCircleOutline, manOutline, schoolOutline } from "ionicons/icons";

import { connect, useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import UserDataTab from "../components/userDataTabbar";

import { actionCreators, State } from '../ReduxUtil/index'

const Profile: React.FC<any> = (props) => {
  const iconData = [
    schoolOutline,
    schoolOutline,
    layersOutline,
    listCircleOutline,
    listCircleOutline,
    manOutline,
  ];
  const dispatch = useDispatch();
  const { bankrupMoney, depositMoney, withdrawMoney } = bindActionCreators(actionCreators, dispatch);
  const amount = useSelector((state: State) => state.bank);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonList>
          {/* <h2> redux {amount && ` ${amount} ssdf`}</h2> */}
          {/* <IonItem>
            <IonButton onClick={() => dispatch({
              type: ActionType.DEPOSIT,
              payload: 100000
            })} >Deposit</IonButton>
            <IonButton onClick={() => withdrawMoney(500)}>WithDraw</IonButton>
            <IonButton onClick={() => bankrupMoney(1000000)}>Bankrupt</IonButton>
          </IonItem> */}
          {props.login ? <UserDataTab /> :
            <div className='ion-text-center'>

              <h3>Та нэвтэрээгүй байна.</h3>
              <IonButton href="/login" > Нэвтрэх</IonButton>
            </div>
          }


          {['My Quest', 'Static', "Wallet", 'My Teams', 'Message', 'Profile Setting'].map((element, index) =>

            <IonItem lines="none" key={`${element}`}>
              <IonIcon icon={iconData[index]} slot="start"></IonIcon>
              <IonLabel>{element}</IonLabel>
              <IonIcon icon={chevronForwardOutline} slot="end"></IonIcon>
            </IonItem>
          )
          }
        </IonList>
      </IonContent>
    </IonPage >
  );
};


function mapStateToProps(state: State) {
  return {
    login: state.login
  }

}

export default connect()(Profile);
