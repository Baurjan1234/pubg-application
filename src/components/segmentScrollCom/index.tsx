// import React from 'react';
// import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/react';

// function SegmentScrollerData() {
//     return (
//         <>
//             <IonSegment value="buttons">
//                 <IonSegmentButton value="default">
//                     <IonLabel>Daily</IonLabel>
//                 </IonSegmentButton>
//                 <IonSegmentButton value="segment">
//                     <IonLabel>Weekly</IonLabel>
//                 </IonSegmentButton>
//                 <IonSegmentButton value="buttons">
//                     <IonLabel>League</IonLabel>
//                 </IonSegmentButton>
//             </IonSegment>
//         </>
//     );
// }
// export default SegmentScrollerData;


import React, { useState, useRef } from 'react';
import {
    IonSegment, IonSegmentButton, IonRow, IonCol, IonGrid, IonContent, IonSlides,
    IonSlide, IonHeader, IonPage, IonTitle,
    IonToolbar, IonButtons, IonMenuButton, IonSearchbar,

    IonCard, IonCardContent, IonCardSubtitle
} from '@ionic/react';
import { Swiper, SwiperSlide } from "swiper/react";

const Market: React.FC = () => {
    const slider = useRef<HTMLIonSlidesElement>(null);
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const [value, setValue] = useState("0");
    const slideOpts = {
        initialSlide: 0,
        speed: 400,
        loop: false,
        pagination: {
            el: null
        },

    };

    // a function to handle the segment changes
    const handleSegmentChange = (e: any) => {
        setValue(e.detail.value);
        slider.current!.slideTo(e.detail.value);
    };

    // a function to handle the slider changes
    const handleSlideChange = async (event: any) => {
        let index: number = 0;
        await event.target.getActiveIndex().then((value: any) => (index = value));
        setValue(`${index}`)
    }


    return (
        <IonPage>

            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Market</IonTitle>
                </IonToolbar>
            </IonHeader>




            {/*-- Segment in a toolbar --*/}
            {/*-- the value is binded to state value and is updated every time setValue is running --*/}
            {/*-- buttons values are set to 0 and 1, to match slider index, it can be whatever you need but there mas be a table --*/}

            <IonContent>
                <IonSegment value={value} onIonChange={(e) => handleSegmentChange(e)} >
                    <IonSegmentButton value="0">
                        <IonTitle>Market</IonTitle>
                    </IonSegmentButton>
                    <IonSegmentButton value="1">
                        <IonTitle>My Package</IonTitle>
                    </IonSegmentButton>
                </IonSegment>

                <IonSlides 
                
                pager={true} options={slideOpts} onIonSlideDidChange={(e) => handleSlideChange(e)} ref={slider}>
                    <IonSlide>
                        <IonGrid>
                            <IonRow>
                                <IonCol> Data1</IonCol>
                                <IonCol> Data1</IonCol>
                                <IonCol> Data1</IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonSlide>
                    <IonSlide>
                        <IonGrid>
                            <IonRow>
                                <IonCol>2</IonCol>
                                <IonCol>2</IonCol>
                                <IonCol>2</IonCol>
                                <IonCol>2</IonCol>
                            </IonRow>
                        </IonGrid>
                    </IonSlide>
                </IonSlides>

            </IonContent>
        </IonPage>
    )
}

export default Market;