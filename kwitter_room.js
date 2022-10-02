var firebaseConfig = {
    apiKey: "AIzaSyC8V_h66k-b9vL_5u02TTA1h6LZ-tHhrB0",
    authDomain: "practice-activity-3911e.firebaseapp.com",
    databaseURL: "https://practice-activity-3911e-default-rtdb.firebaseio.com",
    projectId: "practice-activity-3911e",
    storageBucket: "practice-activity-3911e.appspot.com",
    messagingSenderId: "553267580981",
    appId: "1:553267580981:web:465e3d118f3ada7195617c"
  };
  
  
  firebase.initializeApp(firebaseConfig);
    
  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "Welcome " + user_name + " !";
  