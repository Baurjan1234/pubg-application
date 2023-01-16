import { IonModal, IonContent, IonLabel } from '@ionic/react';

function SheetModel() {
    return (
        <IonModal
            trigger="open-modal"
            initialBreakpoint={0.25}
            breakpoints={[0.5, 0.75]}
            handleBehavior="cycle"
        >
            <IonContent className="ion-padding">
                <div className="ion-margin-top">
                    <IonLabel>Click the handle above to advance to the next breakpoint.</IonLabel>
                </div>
            </IonContent>
        </IonModal>
    );
}

export default SheetModel;