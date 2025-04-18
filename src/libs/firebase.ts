import { getApp as getAppBase, getApps, initializeApp } from "@firebase/app";

export const getApp = () => {
  if (getApps().length === 0) {
    return initializeApp(firebaseConfig);
  } else {
    return getAppBase();
  }
};

const firebaseConfig = {
  apiKey: "AIzaSyD4pNhqAaZhIZy2sYLh03aqoGLMD11Ii38",
  authDomain: "alakazam-a696.firebaseapp.com",
  projectId: "alakazam-a696",
  storageBucket: "alakazam-a696.firebasestorage.app",
  messagingSenderId: "920058090090",
  appId: "1:920058090090:web:3b4171e09bdebd48db3013",
};
