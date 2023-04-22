// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCLpd9jnvYVAY8RmmW7lHVJ2seeULyWtnY",
    authDomain: "lets-chat-web-app-2-31cbe.firebaseapp.com",
    projectId: "lets-chat-web-app-2-31cbe",
    storageBucket: "lets-chat-web-app-2-31cbe.appspot.com",
    messagingSenderId: "988319376940",
    appId: "1:988319376940:web:f9043f1b2352e48c165389"
  };
  


// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



