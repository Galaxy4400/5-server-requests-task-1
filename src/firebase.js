import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyA8EbsjCLx1LHWxFt-IiO45LyZ-H-T7ohc",
  authDomain: "tasksproject-863f4.firebaseapp.com",
  projectId: "tasksproject-863f4",
  storageBucket: "tasksproject-863f4.appspot.com",
  messagingSenderId: "256209487366",
  appId: "1:256209487366:web:f2b19085a4d632dfa96587",
	databaseURL: "https://tasksproject-863f4-default-rtdb.europe-west1.firebasedatabase.app/",
};

const app = initializeApp(firebaseConfig);

export const db = getDatabase(app);
