import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { IonCard, IonCardContent, IonCardSubtitle } from "@ionic/react";

export default function SwiperCard() {
    return (
        <>
            <Swiper spaceBetween={30} slidesPerView={2}>
                {[1, 2, 3, 4, 5, 6].map((card, index) => {
                    return (
                        <SwiperSlide key={`slide ${index}`} >
                            <IonCard routerLink="/tab2" className='ion-padding'>
                                <img
                                    src="https://ionicframework.com/docs/img/demos/card-media.png"
                                    alt="card"
                                />
                                <IonCardContent>
                                    <IonCardSubtitle >title {index}</IonCardSubtitle>
                                </IonCardContent>
                            </IonCard>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </>
    );
}
