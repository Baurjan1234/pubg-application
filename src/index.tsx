import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { IonNav } from '@ionic/react';
import { Provider } from 'react-redux';
import { store } from './ReduxUtil/story';

const container = document.getElementById('root');

const root = createRoot(container!);

root.render(
  <Provider store={store} >
    <React.StrictMode>
      <IonNav root={() => <App />}></IonNav>
    </React.StrictMode>
  </Provider >

);

serviceWorkerRegistration.unregister();
reportWebVitals();
