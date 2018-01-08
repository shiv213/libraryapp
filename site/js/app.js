(function() {
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

    btnLogin.addEventListener('click', e => {
        console.log(5 + 6);
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth().signInWithEmailAndPassword(email, pass);
        promise.catch(e=>console.log(e.message));

    }
    );
    btnSignup.addEventListener('click', e => {
    	//TODO: Check for real email
    	const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth().createUserWithEmailAndPassword(email, pass);
        promise.catch(e=>console.log(e.message));
    });
