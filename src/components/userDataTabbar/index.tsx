import { IonAvatar, IonButton, IonIcon, IonItem, IonLabel } from "@ionic/react"
import { star } from "ionicons/icons"

const UserDataTab = () => {
    return (
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
            <IonButton slot="end">
                <IonIcon icon={star}> </IonIcon>
            </IonButton>
        </IonItem>
    )
}

export default UserDataTab;