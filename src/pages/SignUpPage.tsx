import React, { useState } from 'react';
import {
    IonHeader, IonToolbar, IonTitle, IonContent,
    IonPage, IonButtons, IonMenuButton,
    IonRow, IonCol, IonButton, IonList, IonItem,
    IonLabel, IonInput, IonText
} from '@ionic/react';
import { connect } from 'react-redux';
import { State } from '../ReduxUtil';

import headerImg from '../images/pubg-logo1.png'


const SignUpPage: React.FC<any> = (props) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [usernameError, setUsernameError] = useState(false);
    const [passwordError, setPasswordError] = useState(false);

    const login = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        if (!username) {
            setUsernameError(true);
        }
        if (!password) {
            setPasswordError(true);
        }
        if (username && password) {
            console.log('user name password', password, username);
        }
    };

    return (
        <IonPage id="login-page">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Нэвтрэх</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <img
                    src={headerImg}
                    alt="card"
                />

                <form noValidate onSubmit={login}>
                    <IonList>
                        <IonItem>
                            <IonLabel position="stacked" color="primary">Имэйл *
                                {formSubmitted && usernameError && <IonText color="danger">
                                    {' бөглөнө үү'}
                                </IonText>}
                            </IonLabel>
                            <IonInput name="username" type="text" value={username} spellCheck={false} autocapitalize="off" onIonChange={e => setUsername(e.detail.value!)}
                                required>
                            </IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="stacked" color="primary">Нууц үг *
                                {formSubmitted && passwordError && <IonText color="danger">
                                    {' оруулна уу'}
                                </IonText>}
                            </IonLabel>
                            <IonInput name="password" type="password" value={password} onIonChange={e => setPassword(e.detail.value!)}>
                            </IonInput>
                        </IonItem>

                    </IonList>

                    <IonRow>

                        <IonCol>
                            <IonButton routerLink="/" color="light" expand="block">Бүртгүүлэх</IonButton>
                        </IonCol>
                    </IonRow>
                </form>

            </IonContent>

        </IonPage>
    );
};

function mapStateToProps(state: State) {
    return {
        //   ...: state...
    }

}

export default connect()(SignUpPage)