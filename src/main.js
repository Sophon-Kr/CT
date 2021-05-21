import { createApp } from 'vue'
import App from './App.vue'
import firebase from 'firebase'
import router from './router'

import './index.css'
import'bootstrap'
import'bootstrap/dist/css/bootstrap.min.css'


let app

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCBIOA8D9_FkWhvl1VqWrl7bLi4YDLOU6Y",
    authDomain: "mycactus-1a1d8.firebaseapp.com",
    projectId: "mycactus-1a1d8",
    storageBucket: "mycactus-1a1d8.appspot.com",
    messagingSenderId: "797041841910",
    appId: "1:797041841910:web:42586a4e0935931675fed7",
    measurementId: "G-7GH2D7ZHH5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  firebase.auth().onAuthStateChanged((user)=> {
    if(!app){
        // สร้างใหม่เมื่อไม่เคยล็อกอินมาก่อน
        app = createApp(App).use(router).mount('#app')
    }
 })
