import {
  IonAvatar,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCol,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonModal,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { Doughnut } from "react-chartjs-2";

import React, { useRef, useState } from "react";
import "./Tab2.css";
import TableData from "../components/DataTable";

const Tab2: React.FC = () => {

  const inputDeposit = useRef<HTMLIonInputElement>(null);
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderWidth: 1,
      },
    ],
  };


  const [segmentValue, setSegmentValue] = useState<string>('Amount');
  const [depositDisable, setDepositDisable] = useState<boolean>(true);

  const handleSegmentChange = (val: any) => {
    setDepositDisable(true);
    setSegmentValue('' + val.detail.value);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Wallet</IonTitle>
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
          </IonItem>

          <IonCard className="ion-padding ion-text-center">
            <IonRow>
              <IonCol>
                <IonButton
                  id="open-deposit"
                  shape="round" className="button-height">
                  Deposit
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton
                  id="open-deposit-withdraw"

                  shape="round" className="button-height">
                  Withdraw
                </IonButton>
              </IonCol>
            </IonRow>
          </IonCard>

          <h5 className="padding-right">My tickets</h5>
          <IonCard className="ion-padding">
            <IonCardHeader className="ion-text-center">
              <IonLabel>
                <IonCardTitle>Ticket allocation </IonCardTitle>
              </IonLabel>
            </IonCardHeader>
            <IonRow className="ion-text-center">
              <IonCol size="6" aria-expanded={true}>
                <Doughnut data={data} spellCheck={true} />
              </IonCol>
              <IonCol className="graphicLabelFlex">
                <IonLabel>Daily 40% </IonLabel>
                <IonLabel>Weekly 30%</IonLabel>
                <IonLabel>League 30%</IonLabel>
              </IonCol>
            </IonRow>
          </IonCard>

          <TableData />

          <IonModal

            trigger="open-deposit"
            initialBreakpoint={0.5}
            breakpoints={[0.5]}
            handleBehavior="cycle"
            className='ion-padding'
          >
            <IonToolbar>
              <IonSegment value={segmentValue} onIonChange={handleSegmentChange}>
                <IonSegmentButton value="Amount">
                  Amount
                </IonSegmentButton>
                <IonSegmentButton value="Deposit" disabled={depositDisable}>
                  Deposit
                </IonSegmentButton>
              </IonSegment>
            </IonToolbar>

            {segmentValue === 'Amount' &&
              <div className="ion-margin-top ion-text-center">
                <IonInput
                  className="form__input"
                  color="dark" placeholder="Deposit" ref={inputDeposit}></IonInput>

                <IonButton slot="center" shape="round" className="ion-margin-top ion-text-center" onClick={() => {
                  setSegmentValue('Deposit');
                  setDepositDisable(false);
                }} >Deposit</IonButton>
              </div>}

            {segmentValue === 'Deposit' && <IonItem>
              <b>Deposit amount</b>
              <IonInput
                className="form__input"
                value={inputDeposit.current?.value} readonly={true}></IonInput>
            </IonItem>}

          </IonModal>

          <IonModal
            trigger="open-deposit-withdraw"
            initialBreakpoint={0.5}
            breakpoints={[0.5]}
            handleBehavior="cycle"
            className='ion-padding'
          >
            <IonToolbar>
              <IonSegment value={segmentValue} onIonChange={handleSegmentChange}>
                <IonSegmentButton value="Amount">
                  Amount
                </IonSegmentButton>
                <IonSegmentButton value="Deposit" disabled={depositDisable}>
                  Deposit
                </IonSegmentButton>
              </IonSegment>
            </IonToolbar>

            {segmentValue === 'Amount' &&
              <div className="ion-margin-top ion-text-center">

                <IonInput
                  className="form__input"
                  color="dark" placeholder="Deposit" ref={inputDeposit}></IonInput>

                <IonButton slot="center" shape="round" className="ion-margin-top ion-text-center" onClick={() => {
                  setSegmentValue('Deposit');
                  setDepositDisable(false);
                }} >Deposit</IonButton>
              </div>}

            {segmentValue === 'Deposit' && <IonItem>

              <b>Deposit amount</b>
              <IonInput
                className="form__input"
                value={inputDeposit.current?.value} readonly={true}></IonInput>
            </IonItem>}

          </IonModal>
        </IonList>
      </IonContent>
    </IonPage >
  );
};

export default Tab2;

