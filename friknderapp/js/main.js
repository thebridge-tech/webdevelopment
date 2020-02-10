function retrieveUser() {
  let userId = document.getElementById("usuarios").value;

  return firebase.database()
      .ref('/users/')
      .once('value')
      .then(function(myData) {
        let myUser = myData.val()[userId];

        // Draw data in view
        document.getElementById("userinfo").innerHTML = "Hi, " + myUser.username + " (" + myUser.email + ")";
      }
    );
}

function retrieveAllUsers() {
  return firebase.database()
      .ref('/users/')
      .once('value')
      .then(function(myData) {

        // Write data in select
        myData.val().map( user => {
          let option = document.createElement('option');
          option.value = user.id;
          option.innerText = user.email;

          document.getElementById("usuarios").appendChild(option);
        });
      }
    );
}

function createNewUser() {
  let username = document.getElementById("username").value;
  let useremail = document.getElementById("useremail").value;

  let totalUsers = 0;
  let userExists = false;

  firebase.database()
      .ref('/users/')
      .once('value')
      .then(function(myData) {
        // Validate username
        if(myData.val().find(user => user.username === username)) {
          // Gestionar error
          userExists = true;
        }
        else
        {
          // How many users I have?
          totalUsers = myData.val().length;
        }
      })
      .then(function(myData) {
        if(!userExists) {
          let userId = totalUsers;

          // Write new user
          firebase.database().ref('users/' + userId).set({
            username: username,
            email: useremail
          });
        }
        else {
          // Decir al usuario que ya existe y que escriba otro
          console.log("Ya existes!!");
        }
      });
}

window.onload = retrieveAllUsers;