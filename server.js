const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session');
const firebase = require('firebase-admin');
var admin = require("firebase-admin");


var serviceAccount = require(__dirname + "/serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://exercise-for-goodhealth-default-rtdb.asia-southeast1.firebasedatabase.app"
});
  
  // Use middleware to parse request body
  app.use(bodyParser.urlencoded({ extended: true }));
  
  // Use express-session for managing user sessions
  app.use(session({
    secret: 'keyAIzaSyCvEX2dnyLlPz--Z4-_C3xQXjQZFjszhM8',
    resave: false,
    saveUninitialized: true,
  }));

app.use(express.static(__dirname + '/public'));
  
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/main.html');
});

   

app.get('/adminpage', (req, res, next) => {
    res.sendFile(__dirname + '/admin.html');
    function isAuthenticated(req, res, next) {
    if (req.session.user) {
      next(); // User is authenticated, proceed to /adminpage
    } else {
      res.redirect('/login.html'); // Redirect to the login page
    }
  }
});

app.post('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
    const email = req.body.email;
    const password = req.body.password;

    // Use Firebase Authentication to sign in
    admin.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successfully signed in
            const user = userCredential.user;
            
            // Store user in session
            req.session.user = user;

            res.redirect('/adminpage'); // Redirect to the admin page
        })
        .catch((error) => {
            res.send(error.message); // Handle authentication error
        });
});


app.listen(3000, () => {
    console.log('server started localhost:3000');
    });