import {
  IonAvatar,
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
import { chevronForwardOutline, layersOutline, listCircleOutline, manOutline, schoolOutline, star } from "ionicons/icons";

const Tab4: React.FC = () => {
  const iconData = [
    schoolOutline,
    schoolOutline,
    layersOutline,
    listCircleOutline,
    listCircleOutline,
    manOutline,
  ];
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>


        <IonList>


          <IonItem lines="none">
            <IonAvatar slot="start">
              <img
                alt="Silhouette of a person's head"
                src="https://ionicframework.com/docs/img/demos/avatar.svg"
              />
            </IonAvatar>

            <IonLabel>
              <h2>Customer name</h2>
              <p>$777,999</p>
            </IonLabel>
            <IonButton slot="end">
              <IonIcon icon={star}></IonIcon>
            </IonButton>
          </IonItem>
          {['My Quest', 'Static', "Wallet", 'My Teams', 'Message', 'Profile Setting'].map((element, index) =>

            <IonItem lines="none" key={`${element}`}>
              <IonIcon icon={iconData[index]} slot="start"></IonIcon>
              <IonLabel>{element}</IonLabel>
              <IonIcon icon={chevronForwardOutline} slot="end"></IonIcon>
            </IonItem>
          )

          }

        </IonList>
        {/* <Example /> */}


      </IonContent>
    </IonPage>
  );
};

export default Tab4;
