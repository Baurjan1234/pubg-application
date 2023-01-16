
import React, { useState, useRef } from 'react';
import {
    IonSegment, IonSegmentButton, IonRow, IonCol,
    IonGrid, IonContent, IonSlides, IonSlide,
    IonHeader, IonPage, IonTitle, IonToolbar,
    IonButtons, IonMenuButton,
} from '@ionic/react';

const Market: React.FC = () => {
    const [value, setValue] = useState("0");
    const slider = useRef<HTMLIonSlidesElement>(null);

    const slideOpts = {
        initialSlide: 0,
        speed: 400,
        loop: false,
        pagination: {
            el: null
        },
    };

    const handleSegmentChange = (e: any) => {
        setValue(e.detail.value);
        slider.current!.slideTo(e.detail.value);
    };

    const handleSlideChange = async (event: any) => {
        var index: number = 0;
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