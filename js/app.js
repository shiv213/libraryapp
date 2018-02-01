(window.onload = function() {
  var config = {
    apiKey: "AIzaSyDTvUwyFOD-qb9trefu9jSL_ej-H4oqE5w",
    authDomain: "libraryapp-backend.firebaseapp.com",
    databaseURL: "https://libraryapp-backend.firebaseio.com",
    projectId: "libraryapp-backend",
    storageBucket: "libraryapp-backend.appspot.com",
    messagingSenderId: "617592398054"
  };
  firebase.initializeApp(config);

  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword')
  const btnLogin = document.getElementById('btnLogin')
  const btnSignup = document.getElementById('btnSignup')
  const btnLogout = document.getElementById('btnLogout')
  const donthaveaccount = document.getElementById('donthaveaccount')
  const passtext = document.getElementById('passtext')
  const emailtext = document.getElementById('emailtext')
  const btnAddBook = document.getElementById('btnAddBook')

  btnLogin.addEventListener('click', e => {
    console.log('login button click detected');
    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    const promise = auth.signInWithEmailAndPassword(email, pass);
    promise.catch(e => alert(e.message));

  });
  btnSignup.addEventListener('click', e => {
    console.log('signup button click detected');
    //TODO: Check for real email

    const email = txtEmail.value;
    const pass = txtPassword.value;
    const auth = firebase.auth();

    if (validateEmail(email)) {
      const promise = auth.createUserWithEmailAndPassword(email, pass);
    } else {
      promise.catch(e => alert(e.message));
    }

  });

  function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  }

  function validate(email) {
    if (validateEmail(email)) {
      $("#result").text(email + " is valid :)");
      $("#result").css("color", "green");
    } else {
      $("#result").text(email + " is not valid :(");
      $("#result").css("color", "red");
    }
    return false;
  }

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });

  firebase.auth().onAuthStateChanged(firebaseUser => {
    if (firebaseUser) {
      var email = firebaseUser.email;
      var emailVerified = firebaseUser.emailVerified;
      var uid = firebaseUser.uid;
      var providerData = firebaseUser.providerData;
      console.log(firebaseUser);

      btnLogin.classList.add('hide');
      btnSignup.classList.add('hide');
      txtEmail.classList.add('hide');
      txtPassword.classList.add('hide');
      donthaveaccount.classList.add('hide');
      emailtext.classList.add('hide');
      passtext.classList.add('hide');
      btnLogout.classList.remove('hide');

      makeUid(uid);

    } else {
      console.log('Not logged in');
      btnLogin.classList.remove('hide');
      btnLogout.classList.add('hide');
      btnSignup.classList.remove('hide');
      txtEmail.classList.remove('hide');
      txtPassword.classList.remove('hide');
      donthaveaccount.classList.remove('hide');
      emailtext.classList.remove('hide');
      passtext.classList.remove('hide');

    }
  });

  function makeUid(uid) {
    // return firebase.database().ref.once('/persons/', function(snapshot) {
    //   snapshot.forEach(function(childSnapshot) {
    //     var childKey = childSnapshot.key;
    //     var childData = childSnapshot.val();
    //     console.log(childKey);
    //     console.log(childData);
    //     // ...
    //   });
    // });
    //TODO finish this part if you have time bc other stuff is more important rn
    return firebase.database().ref('/persons/0/checkedout/0').once('value').then(function(snapshot) {
      var yea = (snapshot.val() && snapshot.val().isbn) || 'Anonymous';
      var date = (snapshot.val() && snapshot.val().until) || 'Anonymous';
    	console.log(yea);
    });
  }

  var storage = firebase.storage();
  var storageRef = storage.ref();
  // var imagesRef = storageRef.child('map.jpg');

  storageRef.child('map.jpg').getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'

    // This can be downloaded directly:
    // var xhr = new XMLHttpRequest();
    // xhr.responseType = 'blob';
    // xhr.onload = function(event) {
    //   var blob = xhr.response;
    // };
    // xhr.open('GET', url);
    // xhr.send();

    // Or inserted into an <img> element:
    var img = document.getElementById('mapimg');
    img.src = url;
  }).catch(function(error) {
    // Handle any errors
  });
  // console.log("ran");
  // document.getElementById("Map").innerHTML = '<img src="imagesRef" alt="Test School Map" style="width: 100%; height: 100% " data-elem="pinchzoomer">';
  // var userId = firebase.auth().currentUser.uid;
  // return firebase.database().ref('/persons/' + userId).once('value').then(function(snapshot) {
  //   var yea = (snapshot.val() && snapshot.val().role) || 'Anonymous';
	// 	console.log(yea);
  // });
  //     btnAddBook.addEventListener('click', e=>{
  //       addNewBook('test', '12345', 'onHold', user);
  //     });

  //     function addNewBook(bookTitle2, isbn2, status2, whoOwnsIt2) {
  //       console.log("Adding book!");
  //       firebase.database().ref('book/1234').set({
  //         bookTitle: bookTitle2,
  //         isbn: isbn2,
  //         status: status2,
  //         whoOwnsIt: whoOwnsIt2
  //       });
  //     }
});
