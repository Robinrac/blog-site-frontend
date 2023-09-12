import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'DIN_API-KEY',
  authDomain: 'DIN_AUTH_DOMAIN',
  projectId: 'DITT_PROJECT_ID',
  storageBucket: 'DIN_STORAGE_BUCKET',
  messagingSenderId: 'DIN_MESSAGING_SENDER_ID',
  appId: 'DIN_APP_ID',
};

const app = initializeApp(firebaseConfig);

export default app;
