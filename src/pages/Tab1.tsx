import React, { useEffect, useState } from "react";
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
} from "@ionic/react";

import "./Tab1.css";
import { star } from "ionicons/icons";
import InfinityScrollerCom from "../components/InfinityScrollCom";
import SwiperCard from "../components/swiperCard";
import PageNews from "./news";


const Tab1: React.FC = () => {

  interface UserModel {
    name: string;
    id: string;
  }

  const [user, setUser] = useState<UserModel>();


  const dataFetch = async () => {
    const data = await (
      await fetch(
        "https://run.mocky.io/v3/b3bcb9d2-d8e9-43c5-bfb7-0062c85be6f9"
      )
    ).json();
    setUser(data[0]);
  };

  useEffect(() => {
    dataFetch();
  }, []);


  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Pubg appBar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem lines="none">
          <IonAvatar slot="start">
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>

          <IonLabel>
            <h2>{user?.name ? user.name : 'name null'}</h2>
            <p>{user?.id ? user.id : 'name null'}</p>
          </IonLabel>
          <IonNavLink routerDirection="forward" component={() => <PageNews />}>
            <IonButton slot="end">
              <IonIcon icon={star}></IonIcon>
            </IonButton>
          </IonNavLink>

        </IonItem>
        <SwiperCard />
        <InfinityScrollerCom />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
