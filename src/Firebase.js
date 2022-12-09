import firebase from "Firebase";

const settings ={ timestampsInSnapshort:true };
const firebaseConfig = {
    apiKey: "AIzaSyAO6mS2ScLI5n5TQWSk4sAKllloXfx5AOo",
    authDomain: "vue-form-6d470.firebaseapp.com",
    projectId: "vue-form-6d470",
    storageBucket: "vue-form-6d470.appspot.com",
    messagingSenderId: "22119730621",
    appId: "1:22119730621:web:33d99b5dcd7fccfc1dd6d4"
  };

  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings(settings);

  export default firebase;