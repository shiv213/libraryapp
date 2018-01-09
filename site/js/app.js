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

    btnLogin.addEventListener('click', e=>{
        console.log('login button click detected');
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e=>console.log(e.message));

    }
    );
    btnSignup.addEventListener('click', e=>{
        console.log('signup button click detected');
        //TODO: Check for real email

        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = firebase.auth();

        if (validateEmail(email)) {
            const promise = auth.createUserWithEmailAndPassword(email, pass);
        } else {
            promise.catch(e=>console.log(e.message));
        }

    }
    );

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

    btnLogout.addEventListener('click', e=>{
        firebase.auth().signOut();
    }
    );

    firebase.auth().onAuthStateChanged(firebaseUser=>{
        if (firebaseUser) {
            console.log(firebaseUser);
            btnLogout.classList.remove('hide');

        } else {
            console.log('Not logged in');
            btnLogout.classList.add('hide');
        }
    }
    );
}
);
