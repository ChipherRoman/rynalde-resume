import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDiBc088zmQi0EcX-RrO0TjK0O6sIA_ztQ",
    authDomain: "midnight-66219.firebaseapp.com",
    databaseURL: "https://midnight-66219-default-rtdb.firebaseio.com",
    projectId: "midnight-66219",
    storageBucket: "midnight-66219.appspot.com",
    messagingSenderId: "622569580574",
    appId: "1:622569580574:web:9225fae99f808e99e2660f",
    measurementId: "G-GZ5QFG1T3J"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

firebase.initializeApp(firebaseConfig);
var messagesContainer = document.querySelector('.chat-messages');

var messagesRef = firebase.database().ref('messages');

// Listen for new messages added to the database
messagesRef.on('child_added', function(snapshot) {
  var message = snapshot.val();
  var messageElement = document.createElement('div');
  messageElement.innerText = message.text;
  messagesContainer.appendChild(messageElement);
});

// Handle the form submission to add a new message to the database
document.querySelector('.chat-form').addEventListener('submit', function(e) {
  e.preventDefault();
  var messageInput = document.getElementById('chat-text');
  var nameInput = document.getElementById('chat-name');
  const currentTime = new Date(Date.now())
  var newMessage = {
    text: `[${currentTime.toLocaleDateString()} | ${currentTime.toLocaleTimeString()}] ${nameInput.value}: ${messageInput.value}`
  };
  messagesRef.push(newMessage);
  messageInput.value = '';
});
