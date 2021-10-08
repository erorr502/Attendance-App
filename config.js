import firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyDeRgZ3LHVThaDAu-WjB5j-tS7KuElOwuc',
  authDomain: 'c60-attendanceapp.firebaseapp.com',
  projectId: 'c60-attendanceapp',
  storageBucket: 'c60-attendanceapp.appspot.com',
  messagingSenderId: '537491225125',
  appId: '1:537491225125:web:174c39c5b099406ba69dcc',
};
let app = firebase.initializeApp(firebaseConfig);
export default app.database();
