import {
  IonLabel, IonSegment, IonSegmentButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,
  IonButton, IonIcon, IonModal, IonButtons, IonList, IonRow, IonCol
} from '@ionic/react';
import { Swiper as Swr, SwiperSlide } from 'swiper/react';
import Swiper, { Pagination } from "swiper";

import './Tab3.css';
import { useEffect, useRef, useState } from 'react';
import TableData from '../components/DataTable';
import { addOutline, removeOutline, star } from 'ionicons/icons';



const Tab3: React.FC = () => {

  const [value, setValue] = useState<string>("0");
  const [date, setDate] = useState<string>();
  const [count, setCount] = useState<number>(1);
  const modal = useRef<HTMLIonModalElement>(null);
  const [swiper, setSwiper] = useState<Swiper>();
  const slideToc = (index: any) => swiper?.slideTo(index);




  const pubgGroup = Array.from({ length: 20 });

  const onchagenSwiper = (val: any) => {
    setValue('' + val.activeIndex);
  }

  const handleSegmentChange = (val: any) => {
    slideToc(parseInt(val.detail.value));
  }

  const dismiss = () => {
    modal.current?.dismiss();
  }

  const getDate = () => {
    setDate(Date().toLocaleString());
  }

  useEffect(() => {
    setInterval(getDate, 1000);
  },);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Buy Ticked</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <h3 className='ion-text-center'>
          <b>Pubg mobile</b>   Ending in 00:00:01 {date}
        </h3>

        <IonSegment value={value} onIonChange={handleSegmentChange} >
          <IonSegmentButton value="0">
            <IonLabel>Daily</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="1">
            <IonLabel>Weekly</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="2">
            <IonLabel>League</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {/* <SegmentScrollerData /> */}
        <Swr

          onSlideChange={(val) => {
            setValue(val.activeIndex + '');
          }}
          modules={[Pagination]}
          onSwiper={(e) => setSwiper(e)}


        >

          <SwiperSlide><TableData /></SwiperSlide>
          <SwiperSlide><TableData /></SwiperSlide>
          <SwiperSlide><TableData /></SwiperSlide>
        </Swr>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
          }}
        >
          <IonButton>Teams</IonButton>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              border: 'solid 1px grey',
              borderRadius: "30px"
            }}
          >
            <IonButton
              fill='clear'
              onClick={() => count > 1 && setCount(count - 1)}>

              <IonIcon icon={removeOutline}> </IonIcon>

            </IonButton>
            <p>{count}</p>
            <IonButton
              fill="clear"
              onClick={() => setCount(count + 1)}>
              <IonIcon icon={addOutline}> </IonIcon>
            </IonButton>
          </div>
          <IonButton id="open-modal-buy">Buy</IonButton>
        </div>

        <IonModal id="example-modal" ref={modal} trigger="open-modal-buy">
          <IonContent>
            <IonToolbar>
              <IonTitle>Buy ticket</IonTitle>
              <IonButtons slot="end">
                <IonButton color="light" onClick={() => dismiss()}>
                  Close
                </IonButton>
              </IonButtons>
            </IonToolbar>
            <IonList className='ion-text-center'>

              <IonRow className='ion-text-center' >
                <IonCol>My ticket <IonIcon icon={star} /> 20 </IonCol>
              </IonRow>
              <div className='wrap-circle ion-padding'>
                {
                  pubgGroup.map((e, index) =>
                    <span className="circle" key={`${index}`} />
                  )
                }
              </div>
              <IonButton shape='round' className='ion-margin-top' onClick={() => dismiss()} >
                Random Buy
              </IonButton>
            </IonList>
          </IonContent>
        </IonModal>



      </IonContent>
    </IonPage >
  );
};

export default Tab3;
