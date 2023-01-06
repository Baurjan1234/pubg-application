import { IonLabel, IonSegment, IonSegmentButton, IonContent, IonHeader, IonNote, IonPage, IonTitle, IonToolbar, IonSlides, IonSlide, IonCard, IonCardContent, IonCardSubtitle, IonButton, IonIcon, IonModal } from '@ionic/react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from "swiper";

import './Tab3.css';
import { useState } from 'react';
import TableData from '../components/DataTable';
import { addOutline, colorFill, removeOutline, star } from 'ionicons/icons';
import SheetModel from '../components/sheetModal';


const Tab3: React.FC = () => {

  const [value, setValue] = useState<string>("0");
  const [count, setCount] = useState<number>(1);
  const swip = useSwiper();



  const onchagenSwiper = (val: any) => {
    console.log(val.activeIndex);
    setValue('' + val.activeIndex);
  }

  const handleSegmentChange = (val: any) => {
    console.log(val.detail.value + "segment");
    setValue('' + val.detail.value);
  }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle size="large">Buy Ticked</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <h3 className='ion-text-center'>
          <b>Pubg mobile</b>   Ending in 00:00:01
        </h3>

        <IonSegment value={value} onIonChange={handleSegmentChange} >
          <IonSegmentButton value="0">
            <IonLabel>Default1</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="1">
            <IonLabel>Segment2</IonLabel>
          </IonSegmentButton>
          <IonSegmentButton value="2">
            <IonLabel>Button3</IonLabel>
          </IonSegmentButton>
        </IonSegment>
        {/* <SegmentScrollerData /> */}
        <Swiper

          tabIndex={parseInt(value)}
          onSlideChange={onchagenSwiper}
          modules={[Pagination]}
          onActiveIndexChange={(e) => e.activeIndex}
        >
          {value === '0' && <TableData />}
          {value === '1' && <TableData />}
          {value === '2' && <TableData />}
        </Swiper>

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
          <IonButton id="open-modal">Buy</IonButton>
          <IonModal
            trigger="open-modal"
            initialBreakpoint={0.5}
            breakpoints={[0.5]}
            handleBehavior="cycle"
            className='ion-padding'
          >
            <IonToolbar>
              <IonSegment value="all">
                <IonSegmentButton value="all">
                  All
                </IonSegmentButton>
                <IonSegmentButton value="favorites">
                  Favorites
                </IonSegmentButton>
              </IonSegment>
            </IonToolbar>
            <div className="ion-margin-top">
              <IonLabel>Click the handle above to advance to the next breakpoint.</IonLabel>
            </div>
          </IonModal>
        </div>
      </IonContent>
    </IonPage >
  );
};

export default Tab3;
