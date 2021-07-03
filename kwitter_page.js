//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyDvcanZ94dYWIAN59HBXJr_9ycft8YxWu0",
      authDomain: "kwitter-8a79f.firebaseapp.com",
      databaseURL: "https://kwitter-8a79f-default-rtdb.firebaseio.com",
      projectId: "kwitter-8a79f",
      storageBucket: "kwitter-8a79f.appspot.com",
      messagingSenderId: "271024748580",
      appId: "1:271024748580:web:980b6061fc56761ef680b1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id); 	       
console.log(message_data); 	       
name = message_data['name']; 	       
message = message_data['message'];          
like = message_data['like'];          
name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";          
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>"; 
like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";          
span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ like +"</span></button><hr>";          
row = name_with_tag + message_with_tag +like_button + span_with_tag;                
document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id)
{
  console.log("clicked on like button - " + message_id);
	button_id = message_id;
	likes = document.getElementById(button_id).value;
	updated_likes = Number(likes) + 1;
	console.log(updated_likes);

	firebase.database().ref(room_name).child(message_id).update({
		like : updated_likes  
	 });

}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("kwitter.html");
}