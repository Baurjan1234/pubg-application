import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonList,
  IonItem,
  IonAvatar,
  IonLabel,
  IonCol,
  IonButton,
  IonIcon,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonCard,
  IonThumbnail,
  IonRow,
} from "@ionic/react";
import { chevronForwardOutline } from "ionicons/icons";
import "./infinity.css";

function InfinityScrollerCom() {
  const [items, setItems] = useState<string[]>([]);

  const generateItems = () => {
    const newItems = [];
    console.log(items.length);

    if (items.length >= 10) return;
    for (let i = 0; i < 5; i++) {
      newItems.push(`Item ${1 + items.length + i}`);
    }
    setItems([...items, ...newItems]);
  };

  useEffect(() => {
    generateItems();
  }, []);

  return (
    <IonContent>
      <IonList>
        {items.map((item, index) => (
          <IonCard className="ion-padding" key={`slide ${item}`}>
            <IonRow>
              <IonCol className="ion-text-center" size="3">
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                />
              </IonCol>
              <IonCol size="8">
                <IonCardHeader>
                  <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                </IonCardHeader>

                <IonCardContent>
                  Here's a small text description for
                </IonCardContent>
              </IonCol>

              <IonCol size="1">
                <IonIcon
                  icon={chevronForwardOutline}
                  className="ion-padding-top"
                ></IonIcon>
              </IonCol>
            </IonRow>
            {/* <IonItem>
              <IonThumbnail slot="start">
                <img
                  alt="Silhouette of mountains"
                  src="https://ionicframework.com/docs/img/demos/thumbnail.svg"
                />
              </IonThumbnail>
              <IonLabel>Item</IonLabel>
            </IonItem> */}
          </IonCard>
        ))}
      </IonList>

      <IonInfiniteScroll
        onIonInfinite={(ev) => {
          generateItems();
          setTimeout(() => ev.target.complete(), 500);
        }}
      >
        <IonInfiniteScrollContent></IonInfiniteScrollContent>
      </IonInfiniteScroll>
    </IonContent>
  );
}
export default InfinityScrollerCom;
