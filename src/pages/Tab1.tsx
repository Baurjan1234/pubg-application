import React, { useEffect, useRef, useState } from "react";
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
  IonCol,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonNote,

} from "@ionic/react";

import { Swiper, SwiperSlide } from 'swiper/react';

import "./Tab1.css";
import { star } from "ionicons/icons";
import InfinityScrollerCom from "../components/InfinityScrollCom";
import SwiperCard from "../components/swiperCard";

const Tab1: React.FC = () => {
  const item = [12, 2, 1, 2, 3, 2, 2];

  return (
    <IonPage>
      <IonContent>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Pubg appBar</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonItem>
          <IonAvatar slot="start">
            <img
              alt="Silhouette of a person's head"
              src="https://ionicframework.com/docs/img/demos/avatar.svg"
            />
          </IonAvatar>

          <IonLabel>
            <h2>H1 Heading</h2>
            <p>Paragraph</p>
          </IonLabel>

          <IonButton slot="end">
            <IonIcon icon={star}></IonIcon>
          </IonButton>
        </IonItem>
        <SwiperCard />
        <InfinityScrollerCom />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
