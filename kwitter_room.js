
//ADD YOUR FIREBASE LINKS HERE

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCzLN0HzuNeOw_ad1Kk8jRNM6a_UBuO7kA",
  authDomain: "classtest-a5abb.firebaseapp.com",
  databaseURL: "https://classtest-a5abb-default-rtdb.firebaseio.com",
  projectId: "classtest-a5abb",
  storageBucket: "classtest-a5abb.appspot.com",
  messagingSenderId: "54590184475",
  appId: "1:54590184475:web:38cf67dd4b04be028becbe"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function getData() {
  firebase.database().ref("/").on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id=" + Room_names + "omclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
    });
  });
}
getData();

function addRoom() {
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html"
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "kwitter.html";
}
