import {
  IonBackButton, IonButtons, IonHeader, IonContent, IonToolbar, IonTitle,
  IonLabel, IonSegment, IonSegmentButton,
} from '@ionic/react';
import { useState } from 'react';
import { Swiper as Swr, SwiperSlide } from 'swiper/react';
import Swiper from 'swiper';

import NewsCard from '../components/NewsCard';


function PageNews() {
  const [segmentValue, setSegmentValue] = useState<string>('0');
  const [swiper, setSwiper] = useState<Swiper>();
  const slideTo = (index: any) => swiper?.slideTo(index);

  const onSegmentChange = (value: any) => {
    slideTo(parseInt(value.detail.value));
  }
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton></IonBackButton>
          </IonButtons>
          <IonTitle>News </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <p className='ion-text-center'>Pubg Mobile articles  </p>

        <IonSegment value={segmentValue} onIonChange={
          onSegmentChange
        }>
          <IonSegmentButton value="0">
            <IonLabel>Everything</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="1">
            <IonLabel>News</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="2">
            <IonLabel>Feathures</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        <Swr
          onSlideChange={(val) => {
            setSegmentValue(val.activeIndex + '');
          }}
          onSwiper={(e) => setSwiper(e)}
        >
          <SwiperSlide tabIndex={1}><h1> {Array.from({ length: 5 }).map((e) => <NewsCard />)} </h1> </SwiperSlide>
          <SwiperSlide tabIndex={2}><h1> News 2 </h1> </SwiperSlide>
          <SwiperSlide tabIndex={3}><h1> News 3 </h1> </SwiperSlide>
        </Swr>
      </IonContent>
    </>
  );
}

export default PageNews;