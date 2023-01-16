import { IonCol, IonGrid, IonRow } from '@ionic/react';
function TableData() {
    return (
        <>
            <IonGrid fixed={true}>
                <IonRow>
                    <IonCol size="6">My teams</IonCol>
                    <IonCol>Unit</IonCol>
                    <IonCol >Ticket price</IonCol>
                </IonRow>
            </IonGrid>
            <IonGrid >
                {[1, 2, 3, 4, 5].map((e, i) => (
                    <IonRow key={`${e + i}`}>
                        <IonCol size="6"># Stalwart E-Sports</IonCol>
                        <IonCol>{e}</IonCol>
                        <IonCol>5000$</IonCol>
                    </IonRow>

                ))}

            </IonGrid>
        </>

    );
}
export default TableData;