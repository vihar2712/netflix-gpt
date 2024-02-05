# Netflix GPT

### Create React App
### Configured Tailwind
### Created a Sign In form
### Created a Sign-Up form
### implemented routing
### form validation
### set up Firebase for authentication
    - npm install firebase
    - npm i -g firebase-tools
    - firebase login (connect to the Firebase account)
    - firebase init (firebase initialization and hosting configuration)
    - firebase deploy
### implemented authentication logic for sign-in/signup (inside login.js file)
### store user credentials inside the Firebase console after sign up 
### retrieve user credentials from Firebase after login
####    -used methods like onAuthStateChanged,createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile etc...
### show the user name on the header on ('/browse') after sign up/sign in using redux(created a store, slice, dispatch function, render function and component using a selector to subscribe to the store) 
### sign out working => on click, navigate back to login page
### started working on the browse page
### initialized TMDB API with the access token 
### created a slice for 'Now Playing Movies', got data from API and stored it in the store
### created a custom hook having the logic of fetching the 'Now Playing Movies' from the API.
    
## Features to be included:

### Login/Signup (if not authenticated)
### SignIn/signup form 
### After Authentication, route to /browse 

### Browse page(if authenticated)
### All Movies on the homepage
####    -One movie in large portion with a Trailer running in the background
####    -Carousel with all genre-related movies
### Netflix GPT page
####    -Search feature
####    -provide movie suggestions based on search